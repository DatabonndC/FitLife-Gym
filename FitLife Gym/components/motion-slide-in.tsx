"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MotionSlideInProps {
  children: React.ReactNode
  className?: string
  direction?: "left" | "right"
  delay?: number
}

export function MotionSlideIn({ children, className, direction = "left", delay = 0 }: MotionSlideInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

