"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { ImageOff } from "lucide-react"

interface LoadingImageProps extends React.ComponentProps<typeof Image> {
  containerClassName?: string
  fallbackClassName?: string
}

export function LoadingImage({ className, containerClassName, fallbackClassName, alt, ...props }: LoadingImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {isLoading && !error && (
        <div className="absolute inset-0 z-10">
          <Skeleton className="h-full w-full" />
        </div>
      )}

      {!error ? (
        <Image
          className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100", className)}
          alt={alt}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => {
            setError(true)
            setIsLoading(false)
          }}
          {...props}
        />
      ) : (
        <div className={cn("flex h-full w-full items-center justify-center bg-muted", fallbackClassName)}>
          <div className="flex flex-col items-center gap-2 p-4 text-center">
            <ImageOff className="h-8 w-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Failed to load image</p>
          </div>
        </div>
      )}
    </div>
  )
}

