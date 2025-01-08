"use client"

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name && email && message) {
      const mailtoLink = `mailto:kartikmalviya30@gmail.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`
      window.location.href = mailtoLink
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-h-svh my-auto sm:py-14 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-purple-800">
              Thank You!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600">
              Your message has been sent. We&apos;ll get back to you soon!
            </p>
            <Button
              className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-h-svh sm:py-14 my-auto flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-purple-800">
            Contact Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1"
                placeholder="Your message here..."
                rows={4}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              <Mail className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
