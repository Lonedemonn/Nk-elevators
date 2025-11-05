"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [fieldFocus, setFieldFocus] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 md:py-40 bg-gradient-to-b from-background to-muted/20 transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-down" : "opacity-0"}`}>
          <span className="inline-block text-secondary text-sm font-semibold tracking-widest uppercase mb-4">
            Let's Connect
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 hover:text-secondary transition-colors duration-500">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-secondary/50 mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
            Have questions? Our team is ready to help you with your elevator needs
          </p>
        </div>

        <div
          className={`max-w-2xl mx-auto bg-card/30 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-border/40 hover:border-secondary/50 transition-all duration-500 hover:shadow-3xl ${
            isVisible ? "animate-scale-in" : "opacity-0"
          }`}
        >
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/40 text-green-300 rounded-lg animate-slide-down backdrop-blur-sm">
              <span className="text-green-400">✓</span> Thank you! We'll contact you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`transition-all duration-500 ${fieldFocus === "name" ? "scale-102" : ""}`}>
                <label className="block text-sm font-semibold text-foreground mb-2 hover:text-secondary transition-colors duration-500">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFieldFocus("name")}
                  onBlur={() => setFieldFocus(null)}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-border/50 rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-500 hover:border-secondary/50 cursor-text backdrop-blur-sm"
                />
              </div>
              <div className={`transition-all duration-500 ${fieldFocus === "email" ? "scale-102" : ""}`}>
                <label className="block text-sm font-semibold text-foreground mb-2 hover:text-secondary transition-colors duration-500">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFieldFocus("email")}
                  onBlur={() => setFieldFocus(null)}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-border/50 rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-500 hover:border-secondary/50 cursor-text backdrop-blur-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`transition-all duration-500 ${fieldFocus === "phone" ? "scale-102" : ""}`}>
                <label className="block text-sm font-semibold text-foreground mb-2 hover:text-secondary transition-colors duration-500">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFieldFocus("phone")}
                  onBlur={() => setFieldFocus(null)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 border border-border/50 rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-500 hover:border-secondary/50 cursor-text backdrop-blur-sm"
                />
              </div>
              <div className={`transition-all duration-500 ${fieldFocus === "subject" ? "scale-102" : ""}`}>
                <label className="block text-sm font-semibold text-foreground mb-2 hover:text-secondary transition-colors duration-500">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFieldFocus("subject")}
                  onBlur={() => setFieldFocus(null)}
                  required
                  className="w-full px-4 py-3 border border-border/50 rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-500 hover:border-secondary/50 cursor-pointer backdrop-blur-sm"
                >
                  <option value="">Select a subject</option>
                  <option value="installation">Installation</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="repair">Emergency Repair</option>
                  <option value="modernization">Modernization</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className={`transition-all duration-500 ${fieldFocus === "message" ? "scale-102" : ""}`}>
              <label className="block text-sm font-semibold text-foreground mb-2 hover:text-secondary transition-colors duration-500">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFieldFocus("message")}
                onBlur={() => setFieldFocus(null)}
                required
                placeholder="Tell us about your elevator needs..."
                rows={5}
                className="w-full px-4 py-3 border border-border/50 rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-500 hover:border-secondary/50 resize-none cursor-text backdrop-blur-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground font-bold py-4 rounded-full hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-2 group hover:scale-105 active:scale-95 cursor-pointer hover:animate-pulse-ring transform"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
              Send Message
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground text-center">
              Or reach out directly:{" "}
              <a
                href="mailto:info@nkelevators.com"
                className="font-semibold text-secondary hover:text-secondary/80 hover:scale-110 inline-block transition-all duration-500 cursor-pointer underline-animate"
              >
                info@nkelevators.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
