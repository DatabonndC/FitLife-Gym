import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Basic",
    price: "29",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Access to gym facilities",
      "Basic equipment usage",
      "Locker room access",
      "2 group classes per month",
      "Fitness assessment",
    ],
  },
  {
    name: "Premium",
    price: "59",
    description: "Most popular choice for fitness enthusiasts",
    features: [
      "All Basic features",
      "Unlimited group classes",
      "1 personal training session/month",
      "Nutrition consultation",
      "Access to spa facilities",
      "Guest passes (2/month)",
    ],
    featured: true,
  },
  {
    name: "Elite",
    price: "99",
    description: "The ultimate fitness experience",
    features: [
      "All Premium features",
      "4 personal training sessions/month",
      "Quarterly body composition analysis",
      "Priority class booking",
      "Unlimited guest passes",
      "VIP locker service",
      "Exclusive events access",
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      <section className="bg-muted py-12">
        <div className="container">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Membership Plans</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Choose the perfect membership plan for your fitness journey. No hidden fees, cancel anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-lg border bg-background p-8 transition-all duration-300 hover:shadow-xl ${
                  plan.featured ? "border-primary shadow-lg scale-105 md:scale-110" : ""
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline justify-center">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-3 h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/checkout?plan=${encodeURIComponent(plan.name)}&amount=${plan.price}`}
                  className={`mt-8 w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 px-8 py-2
                  ${
                    plan.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-primary/30"
                      : "border border-primary bg-background hover:bg-primary hover:text-primary-foreground hover:scale-105"
                  }
                  group relative overflow-hidden`}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></span>
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              All plans include access to our mobile app and 24/7 customer support.
              <br />
              Need a custom plan?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

