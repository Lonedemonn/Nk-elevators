"use client"

import { Wrench, Zap, Hammer, Shield, Clock, Headphones } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const servicesData = [
  {
    icon: Wrench,
    title: "Installation",
    description: "Professional elevator installation with latest technology and safety standards",
  },
  {
    icon: Clock,
    title: "Regular Maintenance",
    description: "Scheduled maintenance programs to keep your elevators running smoothly",
  },
  {
    icon: Hammer,
    title: "Emergency Repair",
    description: "24/7 emergency repair services to minimize downtime",
  },
  {
    icon: Zap,
    title: "Modernization",
    description: "Upgrade your existing elevators with modern features and efficiency",
  },
  {
    icon: Shield,
    title: "Safety Compliance",
    description: "Ensure full compliance with all safety and regulatory requirements",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Expert technical support and consultation available anytime",
  },
]

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            servicesData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => (prev.includes(index) ? prev : [...prev, index]))
              }, index * 120)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-40 bg-muted/50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-slide-down">
          <span className="inline-block text-secondary text-sm font-semibold tracking-widest uppercase mb-4">
            Our Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 hover:text-secondary transition-colors duration-500">
            Comprehensive Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-secondary/50 mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
            Complete elevator solutions tailored to your specific needs with professional expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden transition-all duration-700 ${
                visibleCards.includes(index) ? "animate-scale-in-staggered opacity-100" : "opacity-0 scale-75"
              }`}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-xl rounded-2xl border border-border/30 group-hover:border-secondary/50 transition-all duration-500"></div>

              <div className="relative p-8 h-full flex flex-col">
                {/* Icon container with glow effect */}
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-secondary/40 group-hover:to-secondary/20 transition-all duration-500 group-hover:animate-glow">
                  <service.icon className="text-secondary w-8 h-8 group-hover:scale-125 transition-transform duration-500" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-secondary transition-colors duration-500 group-hover:translate-x-1">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed flex-grow group-hover:text-foreground/80 transition-colors duration-500">
                  {service.description}
                </p>

                {/* Underline animation */}
                <div className="mt-6 w-0 h-1 bg-secondary rounded-full group-hover:w-12 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
