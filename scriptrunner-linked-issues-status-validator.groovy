/**
 * ScriptRunner Cloud - Linked Issues Status Validator
 * 
 * Purpose: Validates that all issues linked to the current issue 
 * are in either CANCELLED or APPROVED status
 * 
 * Usage: This can be used as:
 * 1. A validator on a workflow transition
 * 2. A condition in workflow or automation rules
 * 
 * Author: Generated for Jira Cloud
 * Date: 2026-01-09
 */

import com.atlassian.jira.component.ComponentAccessor
import com.onresolve.scriptrunner.runner.rest.common.CustomEndpointDelegate
import groovy.json.JsonBuilder
import groovy.transform.BaseScript

@BaseScript CustomEndpointDelegate delegate

// Define the allowed statuses
def allowedStatuses = ['CANCELLED', 'APPROVED']

// Get the issue key from the request (for validators/conditions)
def issueKey = issue.key

// Get Issue Link Manager
def issueLinkManager = ComponentAccessor.getIssueLinkManager()
def issueManager = ComponentAccessor.getIssueManager()

// Get the current issue
def currentIssue = issueManager.getIssueObject(issueKey)

if (!currentIssue) {
    // If issue not found, return error
    return [
        valid: false,
        message: "Issue ${issueKey} not found"
    ]
}

// Get all inward and outward issue links
def inwardLinks = issueLinkManager.getInwardLinks(currentIssue.id)
def outwardLinks = issueLinkManager.getOutwardLinks(currentIssue.id)

// Collect all linked issues
def linkedIssues = []
inwardLinks.each { link ->
    linkedIssues.add(link.sourceObject)
}
outwardLinks.each { link ->
    linkedIssues.add(link.destinationObject)
}

// If no linked issues, validation passes
if (linkedIssues.isEmpty()) {
    return [
        valid: true,
        message: "No linked issues found. Validation passed."
    ]
}

// Check each linked issue's status
def invalidIssues = []
linkedIssues.each { linkedIssue ->
    def statusName = linkedIssue.status.name.toUpperCase()
    if (!allowedStatuses.contains(statusName)) {
        invalidIssues.add([
            key: linkedIssue.key,
            summary: linkedIssue.summary,
            status: linkedIssue.status.name
        ])
    }
}

// Return validation result
if (invalidIssues.isEmpty()) {
    return [
        valid: true,
        message: "All linked issues are in CANCELLED or APPROVED status."
    ]
} else {
    def errorMessage = "The following linked issues must be in CANCELLED or APPROVED status:\n\n"
    invalidIssues.each { issue ->
        errorMessage += "• ${issue.key} - ${issue.summary} (Current status: ${issue.status})\n"
    }
    
    return [
        valid: false,
        message: errorMessage
    ]
}

