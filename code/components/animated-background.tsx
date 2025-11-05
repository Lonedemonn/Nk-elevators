"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY

      // Update particle positions based on mouse movement for parallax effect
      const particles = document.querySelectorAll(".bg-particle")
      particles.forEach((particle, index) => {
        const depth = (index + 1) * 0.05
        const x = (mouseX.current / window.innerWidth) * 20 * depth
        const y = (mouseY.current / window.innerHeight) * 20 * depth
        ;(particle as HTMLElement).style.transform = `translate(${x}px, ${y}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="animated-background">
      <div className="bg-gradient-animated" />

      <div className="bg-particle particle-1" />
      <div className="bg-particle particle-2" />
      <div className="bg-particle particle-3" />

      <div className="bg-particle particle-4" />
      <div className="bg-particle particle-5" />

      <div className="particle-glow glow-1" />
      <div className="particle-glow glow-2" />
      <div className="particle-glow glow-3" />
      <div className="particle-glow glow-4" />

      <div className="grid-overlay" />

      <div className="shimmer-overlay" />

      <div className="wave-overlay" />
      <div className="wave-overlay wave-overlay-2" />
    </div>
  )
}
