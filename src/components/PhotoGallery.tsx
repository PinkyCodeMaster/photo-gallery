'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { photos, Photo } from '@/data/photos'

export default function PhotoGallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index)
  }

  const closeDialog = () => {
    setSelectedPhotoIndex(null)
  }

  const navigatePhoto = useCallback((direction: 'prev' | 'next') => {
    if (selectedPhotoIndex === null) return
    const newIndex = direction === 'prev'
      ? (selectedPhotoIndex - 1 + photos.length) % photos.length
      : (selectedPhotoIndex + 1) % photos.length
    setSelectedPhotoIndex(newIndex)
  }, [selectedPhotoIndex])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    if (isLeftSwipe) {
      navigatePhoto('next')
    } else if (isRightSwipe) {
      navigatePhoto('prev')
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        navigatePhoto('prev')
      } else if (e.key === 'ArrowRight') {
        navigatePhoto('next')
      } else if (e.key === 'Escape') {
        closeDialog()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [navigatePhoto])

  return (
    <section id="photo-gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-navy mb-8">Our Wedding Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo: Photo, index: number) => (
            <div
              key={photo.key}
              className="relative aspect-square cursor-pointer group"
              onClick={() => handlePhotoClick(index)}
            >
              <Image
                src={photo.url}
                alt={photo.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-hot-pink bg-opacity-0 group-hover:bg-opacity-20 transition-opacity rounded-lg" />
            </div>
          ))}
        </div>
      </div>
      <Dialog open={selectedPhotoIndex !== null} onOpenChange={closeDialog}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] w-full h-full p-0" >
          <div
            className="relative w-full h-full flex items-center justify-center bg-black"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {selectedPhotoIndex !== null && (
              <div className="relative w-full h-full">
                <Image
                  src={photos[selectedPhotoIndex].url}
                  alt={photos[selectedPhotoIndex].name}
                  layout="fill"
                  objectFit="contain"
                  className="max-w-full max-h-full"
                />
              </div>
            )}

            <Button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 z-10"
              onClick={() => navigatePhoto('prev')}
            >
              <ChevronLeft size={24} />
            </Button>
            <Button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 z-10"
              onClick={() => navigatePhoto('next')}
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}