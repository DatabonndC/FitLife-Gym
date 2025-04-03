import { Skeleton } from "@/components/ui/skeleton"

export default function ContactLoading() {
  return (
    <>
      <div className="relative h-[300px] bg-muted">
        <div className="container relative z-10 py-24">
          <div className="text-center space-y-4">
            <Skeleton className="h-12 w-[300px] mx-auto" />
            <Skeleton className="h-6 w-[500px] mx-auto" />
          </div>
        </div>
      </div>

      <div className="container py-12 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            {/* Contact Info Skeletons */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-lg" />
                <div>
                  <Skeleton className="h-5 w-24 mb-1" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            ))}

            {/* Image Skeletons */}
            <div className="grid gap-6 mt-8">
              {[...Array(2)].map((_, i) => (
                <Skeleton key={i} className="aspect-video w-full rounded-lg" />
              ))}
            </div>
          </div>

          {/* Form Skeleton */}
          <div className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
            <Skeleton className="h-[150px] w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>
    </>
  )
}

