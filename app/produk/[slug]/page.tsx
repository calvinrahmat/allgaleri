export const runtime = 'edge';

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Heart, Star, Truck, Shield, RotateCcw } from "lucide-react"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ProductImageCarousel } from "@/components/product-image-carousel"
import products from '../../../data/products.json';

export default function ProductDetail({ params }: { params: { slug: string } }) {
  // Find the product from imported JSON
  const productIndex = products.findIndex((p: any) => p.slug === params.slug);
  const product = products[productIndex];

  if (!product) {
    notFound();
  }

  // For SSR, useState is not available, so fallback to first image
  let selectedImage = product.images[0];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <ProductImageCarousel
            images={product.images.map((src: string, idx: number) => ({
              src,
              alt: `${product.name} - Image ${idx + 1}`,
            }))}
          />

          {/* Product Information */}
          <div className="space-y-6">
            <div className="space-y-2">
              {/* Only show Ready Stock if not kardus-custom */}
              {product.slug !== "kardus-custom" && (
                <Badge variant="secondary" className="w-fit">
                  Ready Stock
                </Badge>
              )}
              <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
              <div className="flex items-center space-x-2">
                {/* You can add ratings or other info here if needed */}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                {/* Additional product info if needed */}
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
              <p className="text-sm text-muted-foreground">
                {product.details}
              </p>
            </div>

            <Separator />

            {/* Product Options */}
            <div className="space-y-6">
              {/* Color Selection or other options can go here */}
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="font-semibold">Cocok Untuk</h3>
              <div className="grid gap-3">
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">{product.suitableFor}</span>
                </div>
                {/* You can add more features here if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 