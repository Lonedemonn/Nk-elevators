"use client"

import { CheckCircle2 } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const reasons = [
  "Industry experts with 20+ years experience",
  "Licensed and certified professionals",
  "24/7 emergency response team",
  "Latest technology and equipment",
  "Competitive pricing with transparent quotes",
  "Full warranty on all services",
  "Customer satisfaction guaranteed",
  "Compliance with all safety standards",
]

export default function WhyChooseUs() {
  const [checkedItems, setCheckedItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reasons.forEach((_, index) => {
              setTimeout(() => {
                setCheckedItems((prev) => (prev.includes(index) ? prev : [...prev, index]))
              }, index * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="why-us" className="py-20 md:py-40 bg-background transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <span className="inline-block text-secondary text-sm font-semibold tracking-widest uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight hover:text-secondary transition-colors duration-500">
              The Best Choice for Your Elevators
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-secondary to-secondary/50 rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We're committed to providing the highest quality elevator services with exceptional customer support. Our
              team of experienced professionals ensures your elevators operate safely and efficiently.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    checkedItems.includes(index) ? "animate-slide-in-left opacity-100" : "opacity-0 translate-x-10"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5 hover:scale-150 transition-transform duration-500 cursor-pointer animate-glow" />
                  <span className="text-foreground font-medium group-hover:text-secondary transition-colors duration-500 hover:text-secondary cursor-pointer">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-3xl blur-3xl animate-glow"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 cursor-pointer transform-gpu group">
              <img
                src="/professional-elevator-technician.jpg"
                alt="Professional elevator service"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
