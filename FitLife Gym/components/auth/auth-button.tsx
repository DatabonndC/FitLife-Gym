"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserCircle } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { signOutUser } from "@/lib/auth"
import { toast } from "sonner"

export function AuthButton() {
  const { user, loading, error } = useAuth()

  const handleSignOut = async () => {
    try {
      const { error } = await signOutUser()
      if (error) throw error
      toast.success("Signed out successfully!")
    } catch (err) {
      toast.error("Failed to sign out. Please try again.")
    }
  }

  if (error) {
    return null
  }

  if (loading) {
    return (
      <Button variant="ghost" className="opacity-50 cursor-not-allowed">
        <UserCircle className="mr-2 h-5 w-5" />
        Loading...
      </Button>
    )
  }

  if (user) {
    return (
      <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary" onClick={handleSignOut}>
        <UserCircle className="mr-2 h-5 w-5" />
        Sign Out
      </Button>
    )
  }

  return (
    <div className="flex items-center gap-4">
      <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary" asChild>
        <Link href="/login">Sign In</Link>
      </Button>
      <Button asChild>
        <Link href="/register">Sign Up</Link>
      </Button>
    </div>
  )
}

