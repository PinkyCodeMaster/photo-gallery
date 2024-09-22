import Hero from '@/components/Hero'
import PhotoGallery from '@/components/PhotoGallery'
import Guestbook from '@/components/Guestbook'
import ThankYou from '@/components/ThankYou'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PhotoGallery />
      <Guestbook />
      <ThankYou />
      <Footer />
    </main>
  )
}