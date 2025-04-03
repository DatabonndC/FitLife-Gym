import type { Metadata } from "next"
import { CheckoutForm } from "@/components/checkout/checkout-form"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata: Metadata = {
  title: "Checkout - FitLife Gym",
  description: "Complete your membership purchase",
}

export default function CheckoutPage() {
  return (
    <div className="container max-w-2xl py-12 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Checkout</h1>
        <p className="text-muted-foreground">Complete your membership purchase</p>
      </div>
      <Suspense fallback={<CheckoutSkeleton />}>
        <CheckoutForm />
      </Suspense>
    </div>
  )
}

function CheckoutSkeleton() {
  return (
    <div className="rounded-lg border bg-card p-8 space-y-8">
      <div className="flex justify-between items-center pb-8 border-b">
        <div className="space-y-2">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-4 w-40" />
        </div>
        <div className="text-right space-y-2">
          <Skeleton className="h-8 w-20 ml-auto" />
          <Skeleton className="h-4 w-24 ml-auto" />
        </div>
      </div>
      <div className="space-y-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
        <Skeleton className="h-11 w-full" />
      </div>
    </div>
  )
}

