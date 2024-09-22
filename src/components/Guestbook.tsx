'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Guestbook() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the message to your backend
        console.log('Submitted:', { name, message })
        setName('')
        setMessage('')
    }

    return (
        <section className="py-16 bg-navy">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-8">Leave a Message</h2>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                    <Input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="bg-white text-navy"
                    />
                    <Textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="bg-white text-navy"
                    />
                    <Button type="submit" className="w-full bg-hot-pink hover:bg-hot-pink/90">
                        Send Message
                    </Button>
                </form>
            </div>
        </section>
    )
}