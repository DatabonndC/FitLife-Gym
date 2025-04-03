"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative h-10 w-10"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <motion.div
        className="absolute inset-0 rounded-md border"
        initial={false}
        animate={{
          backgroundColor: theme === "light" ? "rgba(255, 107, 0, 0.1)" : "rgba(255, 107, 0, 0.2)",
        }}
        transition={{ duration: 0.2 }}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

