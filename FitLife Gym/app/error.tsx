"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container flex min-h-[600px] flex-col items-center justify-center text-center">
      <AlertCircle className="h-16 w-16 text-destructive mb-8" />
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Something went wrong!</h1>
      <p className="mt-4 mb-8 text-muted-foreground max-w-[500px]">
        We apologize for the inconvenience. Please try again or return to the homepage.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()}>Try again</Button>
        <Button variant="outline" asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}

