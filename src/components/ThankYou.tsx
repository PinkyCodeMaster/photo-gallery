import { Button } from '@/components/ui/button'
import { Facebook, Instagram } from 'lucide-react'

export default function ThankYou() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-navy mb-4">Thank You</h2>
                <p className="text-lg text-navy mb-8 max-w-2xl mx-auto">
                    We are overwhelmed with gratitude for all the love and support we received on our special day.
                    Thank you for being a part of our journey and for making our wedding truly unforgettable.
                </p>
                <div className="md:flex space-y-6 md:space-y-0 justify-center md:space-x-4">
                    <Button variant="outline" className="text-navy border-navy hover:bg-navy hover:text-white">
                        <Facebook className="mr-2 h-4 w-4" />
                        Share on Facebook
                    </Button>
                    <Button variant="outline" className="text-navy border-navy hover:bg-navy hover:text-white">
                        <Instagram className="mr-2 h-4 w-4" />
                        Share on Instagram
                    </Button>
                </div>
            </div>
        </section>
    )
}