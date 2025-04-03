import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { MotionFadeIn } from "@/components/motion-fade-in"
import { LoadingImage } from "@/components/loading-image"

const trainers = [
  {
    name: "John Smith",
    role: "Head Trainer",
    specialties: ["Strength Training", "HIIT", "Nutrition"],
    bio: "With over 10 years of experience, John specializes in strength training and high-intensity workouts. Certified in nutrition and sports medicine.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Sarah Johnson",
    role: "Yoga Instructor",
    specialties: ["Yoga", "Pilates", "Meditation"],
    bio: "Sarah brings 8 years of yoga teaching experience. Her classes focus on mindfulness, flexibility, and strength building through traditional practices.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Fitness Coach",
    specialties: ["Cardio", "Weight Loss", "Group Training"],
    bio: "Michael is passionate about helping clients achieve their weight loss goals through effective cardio and strength training programs.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Emma Wilson",
    role: "Personal Trainer",
    specialties: ["Personal Training", "Boxing", "Functional Training"],
    bio: "Emma specializes in one-on-one training sessions, helping clients build strength and improve their overall fitness level.",
    image: "https://images.unsplash.com/photo-1609899537878-88d5ba429bdb?auto=format&fit=crop&w=600&q=80",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },
]

export default function TrainersPage() {
  return (
    <>
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <LoadingImage
            src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1920&q=80"
            alt="Trainers Background"
            fill
            className="object-cover brightness-25"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10">
          <MotionFadeIn className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Meet Our Trainers
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-lg">
              Our certified trainers are here to help you achieve your fitness goals. Get personalized attention and
              expert guidance.
            </p>
          </MotionFadeIn>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {trainers.map((trainer, index) => (
              <MotionFadeIn key={trainer.name} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-lg border bg-background p-6 text-center transition-all duration-300 hover:shadow-lg">
                  <div className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full">
                    <LoadingImage
                      src={trainer.image}
                      alt={trainer.name}
                      width={160}
                      height={160}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{trainer.name}</h3>
                  <p className="mt-1 text-sm text-primary">{trainer.role}</p>
                  <div className="mt-3">
                    <div className="flex flex-wrap justify-center gap-2">
                      {trainer.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="rounded-full bg-secondary px-3 py-1 text-xs transition-colors duration-300 hover:bg-primary hover:text-white"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{trainer.bio}</p>
                  <div className="mt-6 flex justify-center space-x-4">
                    <Link
                      href={trainer.social.facebook}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href={trainer.social.instagram}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href={trainer.social.twitter}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                  <Button className="mt-6 w-full transition-transform duration-300 hover:scale-105" asChild>
                    <Link href="/contact">Book a Session</Link>
                  </Button>
                </div>
              </MotionFadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

