"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Loader2, AlertCircle } from "lucide-react"
import { useEffect } from "react"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  cardNumber: z.string().regex(/^\d{16}$/, {
    message: "Please enter a valid 16-digit card number.",
  }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, {
    message: "Please enter a valid expiry date (MM/YY).",
  }),
  cvv: z.string().regex(/^\d{3,4}$/, {
    message: "Please enter a valid CVV.",
  }),
})

export function CheckoutForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  const plan = searchParams.get("plan") || "Basic"
  const amount = searchParams.get("amount") || "29"

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  })

  useEffect(() => {
    // Simulate loading the plan details
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [plan, amount])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true)

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          plan,
          amount,
        }),
      })

      if (!response.ok) {
        throw new Error("Payment failed")
      }

      toast.success("Payment successful! Check your email for confirmation.")
      router.push("/checkout/success")
    } catch (error) {
      toast.error("Payment failed. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="rounded-lg border bg-card p-8 flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading plan details...</p>
        </div>
      </div>
    )
  }

  if (!plan || !amount) {
    return (
      <div className="rounded-lg border bg-card p-8 flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4 text-center">
          <AlertCircle className="h-8 w-8 text-destructive" />
          <h3 className="text-lg font-semibold">Invalid Plan Selection</h3>
          <p className="text-muted-foreground">Please select a valid membership plan from our pricing page.</p>
          <Button className="mt-4" onClick={() => router.push("/pricing")}>
            View Membership Plans
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-lg border bg-card p-8 transition-all duration-300 hover:shadow-lg">
      <div className="flex justify-between items-center mb-8 pb-8 border-b">
        <div>
          <h2 className="text-2xl font-bold">{plan} Plan</h2>
          <p className="text-muted-foreground">Monthly membership</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold">${amount}</p>
          <p className="text-sm text-muted-foreground">per month</p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="name@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Card Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="1234 5678 9012 3456"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "").slice(0, 16)
                      field.onChange(value)
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="expiryDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expiry Date</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="MM/YY"
                      {...field}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, "")
                        if (value.length >= 2) {
                          value = value.slice(0, 2) + "/" + value.slice(2, 4)
                        }
                        field.onChange(value)
                      }}
                      maxLength={5}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CVV</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="123"
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "").slice(0, 4)
                        field.onChange(value)
                      }}
                      maxLength={4}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            className="w-full group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02]"
            type="submit"
            disabled={isSubmitting}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></span>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              `Pay $${amount}`
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}

