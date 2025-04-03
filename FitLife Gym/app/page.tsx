"use client"

import Link from "next/link"
import { ArrowRight, DumbbellIcon, Users, Clock, Star, Award, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-24 md:py-32">
        <div className="container">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="max-w-2xl mx-auto text-center space-y-6"
          >
            <motion.h1 variants={fadeIn} className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Transform Your Life Through Fitness
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground">
              Join FitLife gym and start your journey to a healthier, stronger you. State-of-the-art equipment, expert
              trainers, and a supportive community await.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="group transition-transform hover:scale-105 relative overflow-hidden">
                <Link href="/pricing">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></span>
                  Start Your Journey
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="transition-transform hover:scale-105">
                <Link href="/classes">View Classes</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center space-y-4 mb-12"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose FitLife?
            </motion.h2>
            <motion.p variants={fadeIn} className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              We offer everything you need to achieve your fitness goals and maintain a healthy lifestyle.
            </motion.p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <DumbbellIcon className="h-6 w-6" />,
                title: "Modern Equipment",
                description:
                  "State-of-the-art fitness equipment for all your workout needs. Regular maintenance ensures everything works perfectly.",
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Expert Trainers",
                description:
                  "Certified professional trainers to guide you through your fitness journey with personalized attention.",
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: "Flexible Hours",
                description:
                  "Open early morning to late night. Work out on your schedule with our extended operating hours.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-lg border p-8 hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-6 transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5+", label: "Years of Experience" },
              { value: "20+", label: "Expert Trainers" },
              { value: "50+", label: "Weekly Classes" },
              { value: "1000+", label: "Happy Members" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center space-y-4 mb-12"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What Our Members Say
            </motion.h2>
            <motion.p variants={fadeIn} className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Don't just take our word for it. Hear from our community of fitness enthusiasts.
            </motion.p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "FitLife transformed my approach to fitness. The trainers are exceptional and the community is so supportive. I've achieved goals I never thought possible!",
                author: "Sarah Thompson",
                role: "Member since 2022",
              },
              {
                quote:
                  "The facilities are top-notch and the personal training sessions have been game-changing. Best investment in my health I've ever made.",
                author: "Michael Rodriguez",
                role: "Member since 2021",
              },
              {
                quote:
                  "From the moment I joined, I felt welcomed. The variety of classes keeps me motivated and the results speak for themselves.",
                author: "Emily Chen",
                role: "Member since 2023",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative rounded-lg border bg-background p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 text-primary">
                  <Star className="h-5 w-5 inline-block" fill="currentColor" />
                  <Star className="h-5 w-5 inline-block" fill="currentColor" />
                  <Star className="h-5 w-5 inline-block" fill="currentColor" />
                  <Star className="h-5 w-5 inline-block" fill="currentColor" />
                  <Star className="h-5 w-5 inline-block" fill="currentColor" />
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
                <div className="mt-4 pt-4 border-t">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center space-y-4 mb-12"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Core Values
            </motion.h2>
            <motion.p variants={fadeIn} className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              The principles that guide everything we do at FitLife
            </motion.p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "Excellence",
                description: "Committed to providing the highest quality fitness experience",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Community",
                description: "Building a supportive environment for all members",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Results",
                description: "Focused on helping you achieve your fitness goals",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-lg bg-primary px-6 py-16 sm:p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80 opacity-100"></div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="relative z-10 mx-auto max-w-2xl text-center"
            >
              <motion.h2
                variants={fadeIn}
                className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl"
              >
                Ready to Start Your Fitness Journey?
              </motion.h2>
              <motion.p variants={fadeIn} className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/90">
                Join now and get your first month at a special introductory rate. No long-term contracts required.
              </motion.p>
              <motion.div variants={fadeIn} whileHover={{ scale: 1.05 }}>
                <Button size="lg" variant="secondary" className="mt-8 group relative overflow-hidden" asChild>
                  <Link href="/pricing">
                    <span className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/30 to-secondary/0 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></span>
                    View Membership Options
                    <motion.span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

