"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative bg-gradient-to-b from-primary via-primary/95 to-primary/90 text-primary-foreground pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        ></div>
        <div
          className="absolute -bottom-10 left-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            animationDelay: "2s",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-12">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`mb-6 transition-all duration-1000 ${
              isVisible ? "animate-slide-down" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block text-secondary text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-in">
              Welcome to Excellence
            </span>
          </div>

          <h1
            className={`text-6xl md:text-8xl font-bold mb-8 text-balance transition-all duration-1000 leading-tight ${
              isVisible ? "animate-slide-down" : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            NK Elevators
          </h1>

          <p
            className={`text-xl md:text-2xl text-primary-foreground/80 mb-6 text-pretty transition-all duration-1000 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "300ms" }}
          >
            Your Trusted Partner for Complete Elevator Solutions
          </p>

          <p
            className={`text-lg md:text-xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto transition-all duration-1000 leading-relaxed ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "500ms" }}
          >
            Professional installation, maintenance, and repair services for all types of elevators with cutting-edge
            technology and expert support.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
              isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: "700ms" }}
          >
            <button className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground hover:shadow-2xl font-bold px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 hover:animate-pulse-ring active:scale-95 cursor-pointer transform">
              Get A Quote
            </button>
            <button className="border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-bold px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 hover:border-secondary active:scale-95 cursor-pointer backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${
          isVisible ? "animate-bounce-smooth" : "opacity-0"
        }`}
        style={{ animationDelay: "1200ms" }}
      >
        <ChevronDown className="w-6 h-6 text-secondary animate-float opacity-60" />
      </div>
    </section>
  )
}
