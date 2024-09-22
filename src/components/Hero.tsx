'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center">
      <Image
        src="https://utfs.io/f/jQ7UdARCEtub35JsuQy0i5UFSCkenw7omHTE8g4P02JqQ9dt"
        alt="Future and Jones on their wedding day"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-navy bg-opacity-50" />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Thank You</h1>
        <p className="text-xl md:text-2xl mb-8 text-white">For celebrating with us on September 21, 2024</p>
        <div className="space-x-4">
          <Button
            className="bg-hot-pink hover:bg-hot-pink/90 text-white"
            onClick={() => scrollToSection('photo-gallery')}
          >
            View Photos
          </Button>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-navy"
            onClick={() => scrollToSection('guestbook')}
          >
            Leave a Message
          </Button>
        </div>
      </div>
    </section>
  )
}