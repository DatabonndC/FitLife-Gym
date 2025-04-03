export default function Head() {
  return (
    <>
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />

      {/* Preload critical hero image */}
      <link
        rel="preload"
        href="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1920&q=80"
        as="image"
      />
    </>
  )
}

