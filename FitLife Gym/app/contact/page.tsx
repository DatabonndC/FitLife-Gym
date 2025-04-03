import { Suspense, lazy } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { MotionFadeIn } from "@/components/motion-fade-in"
import { LoadingImage } from "@/components/loading-image"

// Lazy load the contact form component
const ContactForm = lazy(() => import("@/components/contact/contact-form"))

const CONTACT_IMAGES = {
  hero: "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?q=80&w=2070",
  exterior: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075",
  interior: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070",
}

export default function ContactPage() {
  return (
    <>
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <LoadingImage
            src={CONTACT_IMAGES.hero}
            alt="Contact Background"
            fill
            className="object-cover brightness-25"
            priority
            sizes="100vw"
            quality={75}
          />
        </div>
        <div className="container relative z-10">
          <MotionFadeIn className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Contact Us</h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-lg">
              Have a question? We're here to help. Send us a message and we'll respond as soon as possible.
            </p>
          </MotionFadeIn>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <MotionFadeIn>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Location</h3>
                    <p className="text-sm text-muted-foreground">
                      123 Fitness Street
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </MotionFadeIn>

              <MotionFadeIn delay={0.1}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-sm text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>
              </MotionFadeIn>

              <MotionFadeIn delay={0.2}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">info@fitlife.com</p>
                  </div>
                </div>
              </MotionFadeIn>

              <div className="grid gap-6 mt-8">
                <MotionFadeIn delay={0.3}>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <LoadingImage
                      src={CONTACT_IMAGES.exterior}
                      alt="Gym Exterior"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={75}
                    />
                  </div>
                </MotionFadeIn>

                <MotionFadeIn delay={0.4}>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <LoadingImage
                      src={CONTACT_IMAGES.interior}
                      alt="Gym Interior"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={75}
                    />
                  </div>
                </MotionFadeIn>
              </div>
            </div>

            <Suspense fallback={<FormSkeleton />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}

function FormSkeleton() {
  return (
    <div className="space-y-6">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="h-5 w-20 bg-muted animate-pulse rounded" />
          <div className="h-10 w-full bg-muted animate-pulse rounded" />
        </div>
      ))}
      <div className="h-[150px] w-full bg-muted animate-pulse rounded" />
      <div className="h-10 w-full bg-muted animate-pulse rounded" />
    </div>
  )
}

