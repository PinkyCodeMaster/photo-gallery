import { Facebook, Instagram } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-navy py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-white mb-4 md:mb-0">&copy; 2024 Future & Jones. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-hot-pink">
                            <Facebook className="h-6 w-6" />
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="#" className="text-white hover:text-hot-pink">
                            <Instagram className="h-6 w-6" />
                            <span className="sr-only">Instagram</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}