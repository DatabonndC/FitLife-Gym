import Link from "next/link"
import type { Metadata } from "next"
import { RegisterForm } from "@/components/auth/register-form"
import { MotionFadeIn } from "@/components/motion-fade-in"

export const metadata: Metadata = {
  title: "Register | FitLife Gym",
  description: "Create your FitLife account",
}

export default function RegisterPage() {
  return (
    <div className="container relative flex min-h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/login"
        className="absolute right-4 top-4 md:right-8 md:top-8 text-muted-foreground hover:text-primary"
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href="/" className="text-primary hover:text-primary/90">
            FitLife
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Join our community of fitness enthusiasts and start your journey to a healthier lifestyle
              today.&rdquo;
            </p>
            <footer className="text-sm text-primary">- FitLife Team</footer>
          </blockquote>
        </div>
      </div>
      <MotionFadeIn className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
            <p className="text-sm text-muted-foreground">Enter your details below to create your account</p>
          </div>
          <RegisterForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By creating an account, you agree to our{" "}
            <Link href="/terms" className="hover:text-primary underline underline-offset-4">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="hover:text-primary underline underline-offset-4">
              Privacy Policy
            </Link>
          </p>
        </div>
      </MotionFadeIn>
    </div>
  )
}

