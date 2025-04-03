import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Target, CheckCircle } from "lucide-react"
import { LoadingImage } from "@/components/loading-image"
import { MotionFadeIn } from "@/components/motion-fade-in"
import { MotionSlideIn } from "@/components/motion-slide-in"

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Member since 2022",
    content:
      "FitLife transformed my approach to fitness. The trainers are exceptional and the community is so supportive. I've achieved goals I never thought possible!",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Michael Rodriguez",
    role: "Member since 2021",
    content:
      "The facilities are top-notch and the personal training sessions have been game-changing. Best investment in my health I've ever made.",
    image: "https://images.unsplash.com/photo-1563685442337-f8d7c4ccf9a3?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Emily Chen",
    role: "Member since 2023",
    content:
      "From the moment I joined, I felt welcomed. The variety of classes keeps me motivated and the results speak for themselves.",
    image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=150&q=80",
  },
]

const achievements = [
  "Best Fitness Center 2023",
  "Certified Personal Trainers",
  "State-of-the-Art Equipment",
  "Inclusive Community",
  "Personalized Training Programs",
  "Nutrition Guidance",
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <LoadingImage
            src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&w=1920&q=80"
            alt="About FitLife"
            fill
            className="object-cover brightness-25"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10">
          <MotionFadeIn className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">About FitLife</h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-lg">
              Empowering individuals to achieve their fitness goals since 2010.
            </p>
          </MotionFadeIn>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <MotionSlideIn direction="left">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Story</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">From Passion to Community</h2>
                <p className="text-muted-foreground">
                  Founded in 2010, FitLife began with a simple mission: to create a welcoming and inclusive environment
                  where people of all fitness levels could achieve their health goals.
                </p>
                <p className="text-muted-foreground">
                  Over the years, we've grown into a community of passionate individuals committed to helping each other
                  succeed. Our state-of-the-art facilities, expert trainers, and diverse range of programs make fitness
                  accessible and enjoyable for everyone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="group relative overflow-hidden">
                    <Link href="/contact">
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></span>
                      Join Our Community
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/classes">Explore Classes</Link>
                  </Button>
                </div>
              </div>
            </MotionSlideIn>
            <MotionSlideIn direction="right">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-video lg:aspect-square">
                  <LoadingImage
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"
                    alt="Gym facility"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-medium">Our main facility in downtown</p>
                </div>
              </div>
            </MotionSlideIn>
          </div>
        </div>
      </section>

      {/* Values Section with Images */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <MotionFadeIn className="text-center space-y-4 mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Values</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What We Stand For</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Our core values guide everything we do at FitLife
            </p>
          </MotionFadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            <MotionFadeIn delay={0.1}>
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-[4/3]">
                  <LoadingImage
                    src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80"
                    alt="Excellence"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Excellence</h3>
                  <p className="mt-2 text-white/80">Committed to providing the highest quality fitness experience</p>
                </div>
              </div>
            </MotionFadeIn>

            <MotionFadeIn delay={0.2}>
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-[4/3]">
                  <LoadingImage
                    src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?auto=format&fit=crop&w=800&q=80"
                    alt="Community"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Community</h3>
                  <p className="mt-2 text-white/80">Building a supportive environment for all members</p>
                </div>
              </div>
            </MotionFadeIn>

            <MotionFadeIn delay={0.3}>
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-[4/3]">
                  <LoadingImage
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
                    alt="Results"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Results</h3>
                  <p className="mt-2 text-white/80">Focused on helping you achieve your fitness goals</p>
                </div>
              </div>
            </MotionFadeIn>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <MotionFadeIn className="text-center space-y-4 mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Team</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Leadership</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              The passionate individuals behind FitLife's success
            </p>
          </MotionFadeIn>

          <div className="grid gap-8 md:grid-cols-2">
            <MotionSlideIn direction="left">
              <div className="flex flex-col md:flex-row gap-6 items-center rounded-lg border p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <LoadingImage
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
                    alt="John Davis"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">John Davis</h3>
                  <p className="text-primary font-medium">Founder & CEO</p>
                  <p className="mt-2 text-muted-foreground">
                    With over 15 years in the fitness industry, John founded FitLife with a vision to create a gym that
                    focuses on community and results.
                  </p>
                </div>
              </div>
            </MotionSlideIn>

            <MotionSlideIn direction="right">
              <div className="flex flex-col md:flex-row gap-6 items-center rounded-lg border p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <LoadingImage
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
                    alt="Amanda Chen"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Amanda Chen</h3>
                  <p className="text-primary font-medium">Head of Training</p>
                  <p className="mt-2 text-muted-foreground">
                    Amanda leads our team of trainers, bringing her expertise in exercise science and nutrition to
                    develop our comprehensive training programs.
                  </p>
                </div>
              </div>
            </MotionSlideIn>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-12 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <MotionFadeIn>
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary">
                  Our Achievements
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why We Stand Out</h2>
                <p className="text-muted-foreground">
                  At FitLife, we take pride in our accomplishments and the quality of service we provide to our members.
                  Here's what sets us apart from other fitness centers.
                </p>

                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <MotionFadeIn key={achievement} delay={index * 0.1}>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    </MotionFadeIn>
                  ))}
                </ul>

                <Button asChild className="mt-4">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </MotionFadeIn>

            <MotionFadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-lg z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg z-0"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <LoadingImage
                    src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1000&q=80"
                    alt="FitLife Achievement"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
            </MotionFadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <MotionFadeIn className="text-center space-y-4 mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Members Say</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Don't just take our word for it. Hear from our community of fitness enthusiasts.
            </p>
          </MotionFadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <MotionFadeIn key={testimonial.name} delay={index * 0.1}>
                <div className="rounded-lg border bg-background p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <LoadingImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground flex-grow">"{testimonial.content}"</p>
                  <div className="mt-4 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="inline-block">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </MotionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 md:py-24">
        <div className="container">
          <MotionFadeIn className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Ready to Join the FitLife Family?
            </h2>
            <p className="text-white/90 md:text-lg">
              Take the first step towards a healthier, stronger you. Join our community today and experience the FitLife
              difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" asChild className="group">
                <Link href="/pricing">
                  View Membership Options
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </MotionFadeIn>
        </div>
      </section>
    </>
  )
}

