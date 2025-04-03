import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users } from "lucide-react"
import { MotionFadeIn } from "@/components/motion-fade-in"
import { LoadingImage } from "@/components/loading-image"

const classes = [
  {
    title: "HIIT Training",
    description: "High-intensity interval training to maximize calorie burn and improve cardiovascular fitness.",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=800&q=80",
    instructor: "Sarah Johnson",
    schedule: "Mon, Wed, Fri - 6:00 AM",
    capacity: "20 spots",
  },
  {
    title: "Yoga Flow",
    description: "Dynamic yoga sequences focusing on strength, flexibility, and mindfulness.",
    image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&w=800&q=80",
    instructor: "Michael Chen",
    schedule: "Tue, Thu - 7:30 AM",
    capacity: "15 spots",
  },
  {
    title: "Strength Training",
    description: "Build muscle and increase strength with our comprehensive weight training program.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    instructor: "David Smith",
    schedule: "Mon, Wed, Fri - 5:30 PM",
    capacity: "12 spots",
  },
  {
    title: "Spin Class",
    description: "High-energy indoor cycling class set to motivating music.",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
    instructor: "Emma Wilson",
    schedule: "Tue, Thu - 6:00 PM",
    capacity: "18 spots",
  },
  {
    title: "Boxing",
    description: "Learn boxing techniques while getting a full-body workout.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80",
    instructor: "James Rodriguez",
    schedule: "Mon, Wed - 7:00 PM",
    capacity: "15 spots",
  },
  {
    title: "Pilates",
    description: "Core-strengthening exercises focusing on flexibility and posture.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    instructor: "Lisa Anderson",
    schedule: "Tue, Thu - 9:00 AM",
    capacity: "12 spots",
  },
]

export default function ClassesPage() {
  return (
    <>
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <LoadingImage
            src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?auto=format&fit=crop&w=1920&q=80"
            alt="Classes Background"
            fill
            className="object-cover brightness-25"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10">
          <MotionFadeIn className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Our Classes</h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-lg">
              Choose from a variety of classes designed to help you reach your fitness goals. Led by expert instructors
              in a motivating environment.
            </p>
          </MotionFadeIn>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {classes.map((classItem, index) => (
              <MotionFadeIn key={classItem.title} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-lg border bg-background transition-all duration-300 hover:shadow-lg">
                  <div className="aspect-video overflow-hidden">
                    <LoadingImage
                      src={classItem.image}
                      alt={classItem.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{classItem.title}</h3>
                    <p className="mt-2 text-muted-foreground">{classItem.description}</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-2 h-4 w-4" />
                        Instructor: {classItem.instructor}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        {classItem.schedule}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        {classItem.capacity}
                      </div>
                    </div>
                    <Button className="mt-6 w-full transition-transform duration-300 hover:scale-105" asChild>
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </div>
                </div>
              </MotionFadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

