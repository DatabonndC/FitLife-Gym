import Link from "next/link"
import type { Metadata } from "next"
import { LoginForm } from "@/components/auth/login-form"
import { MotionFadeIn } from "@/components/motion-fade-in"

export const metadata: Metadata = {
  title: "Login | FitLife Gym",
  description: "Login to your FitLife account",
}

export default function LoginPage() {
  return (
    <div className="container relative flex min-h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/register"
        className="absolute right-4 top-4 md:right-8 md:top-8 text-muted-foreground hover:text-primary"
      >
        Create account
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
              &ldquo;Fitness is not about being better than someone else. It's about being better than you used to
              be.&rdquo;
            </p>
            <footer className="text-sm text-primary">- FitLife Community</footer>
          </blockquote>
        </div>
      </div>
      <MotionFadeIn className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Enter your credentials to sign in to your account</p>
          </div>
          <LoginForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link href="/register" className="hover:text-primary underline underline-offset-4">
              Don&apos;t have an account? Sign Up
            </Link>
          </p>
        </div>
      </MotionFadeIn>
    </div>
  )
}

