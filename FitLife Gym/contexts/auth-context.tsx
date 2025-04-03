"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import type { User } from "firebase/auth"
import { onAuthStateChange } from "@/lib/auth"
import { toast } from "sonner"

interface AuthContextType {
  user: User | null
  loading: boolean
  error: Error | null
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChange((user) => {
        setUser(user)
        setLoading(false)
      })

      return () => unsubscribe()
    } catch (err) {
      setError(err as Error)
      setLoading(false)
      toast.error("Failed to initialize authentication. Please try again later.")
    }
  }, [])

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-destructive">Authentication Error</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Failed to initialize authentication. Please try again later.
          </p>
        </div>
      </div>
    )
  }

  return <AuthContext.Provider value={{ user, loading, error }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

