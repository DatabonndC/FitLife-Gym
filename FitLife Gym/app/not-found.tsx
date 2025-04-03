import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DumbbellIcon } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container flex min-h-[600px] flex-col items-center justify-center text-center">
      <DumbbellIcon className="h-16 w-16 text-primary mb-8" />
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404 - Page Not Found</h1>
      <p className="mt-4 mb-8 text-muted-foreground max-w-[500px]">
        Oops! The page you're looking for seems to have taken a rest day. Let's get you back to your workout routine.
      </p>
      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}

