/**
 * ScriptRunner Cloud - Linked Issues Status Validator (Simplified)
 * 
 * Purpose: Validates that all issues linked to the current issue 
 * are in either CANCELLED or APPROVED status
 * 
 * Usage: Use this as a Workflow Validator
 * 
 * This is a simplified version for ScriptRunner Cloud validators
 */

// Define the allowed statuses
def allowedStatuses = ['CANCELLED', 'APPROVED']

// Get all linked issues
def linkedIssues = get('/rest/api/3/issue/' + issue.key)
    .asObject(Map)
    .body
    .fields
    .issuelinks

// If no linked issues, validation passes
if (!linkedIssues || linkedIssues.isEmpty()) {
    return true
}

// Check each linked issue's status
def invalidIssues = []

linkedIssues.each { link ->
    def linkedIssue = link.inwardIssue ?: link.outwardIssue
    
    if (linkedIssue) {
        def statusName = linkedIssue.fields.status.name.toUpperCase()
        
        if (!allowedStatuses.contains(statusName)) {
            invalidIssues.add([
                key: linkedIssue.key,
                summary: linkedIssue.fields.summary,
                status: linkedIssue.fields.status.name
            ])
        }
    }
}

// If there are invalid issues, fail validation with message
if (!invalidIssues.isEmpty()) {
    def errorMessage = "The following linked issues must be in CANCELLED or APPROVED status:\n\n"
    invalidIssues.each { issue ->
        errorMessage += "• ${issue.key} - ${issue.summary} (Current status: ${issue.status})\n"
    }
    
    // For validators, return false and set error message
    invalidateUser(errorMessage)
    return false
}

// All linked issues are valid
return true

