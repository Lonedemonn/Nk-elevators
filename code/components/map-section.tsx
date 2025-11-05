"use client"

import { useState, useRef, useEffect } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function MapSection() {
  const [visibleInfo, setVisibleInfo] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleInfo([0, 1, 2, 3])
            observer.unobserve(entry.target)
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

  const infoItems = [
    {
      icon: MapPin,
      label: "Address",
      content: ["123 Elevator Street", "Tech Plaza, New Delhi", "India - 110001"],
    },
    {
      icon: Phone,
      label: "Phone",
      content: ["+91 98765 43210"],
      href: "tel:+919876543210",
    },
    {
      icon: Mail,
      label: "Email",
      content: ["info@nkelevators.com"],
      href: "mailto:info@nkelevators.com",
    },
    {
      icon: Clock,
      label: "Hours",
      content: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM", "24/7 Emergency Service"],
    },
  ]

  return (
    <section ref={sectionRef} id="location" className="py-20 md:py-40 bg-muted/30 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-down">
          <span className="inline-block text-secondary text-sm font-semibold tracking-widest uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 hover:text-secondary transition-colors duration-500">
            Visit Our Office
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-secondary/50 mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">Find us easily at our headquarters</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 animate-slide-in-left">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-96 md:h-full min-h-[400px] hover:shadow-3xl transition-all duration-500 hover:scale-105 transform-gpu group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-secondary/10"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.816521342846!2d77.1025!3d28.7041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04c1f5555555%3A0x5555555555555555!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            {infoItems.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className={`group bg-card/50 backdrop-blur-xl p-6 rounded-2xl border border-border/30 hover:border-secondary/50 hover:bg-card/80 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                    visibleInfo.includes(idx) ? "animate-scale-in opacity-100" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary/30 group-hover:animate-glow transition-all duration-500">
                      <Icon className="w-6 h-6 text-secondary group-hover:scale-125 transition-transform duration-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2 group-hover:text-secondary transition-colors duration-500">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-medium group-hover:text-secondary transition-colors duration-500 underline-animate"
                        >
                          {item.content[0]}
                        </a>
                      ) : (
                        <div className="space-y-1">
                          {item.content.map((line, i) => (
                            <p
                              key={i}
                              className="text-foreground font-medium group-hover:text-secondary/90 transition-colors duration-500"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
