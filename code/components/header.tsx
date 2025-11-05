"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-700 ${
        isScrolled
          ? "bg-primary/80 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-primary/40 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 animate-slide-down">
          <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/70 rounded-lg flex items-center justify-center font-bold text-lg hover:shadow-2xl hover:animate-glow transition-all duration-500 cursor-pointer transform hover:scale-110">
            NK
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl hover:text-secondary transition-all duration-500 underline-animate">
              NK Elevators
            </span>
            <span className="text-xs text-primary-foreground/70">Premium Solutions</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Why Us", "Location", "Contact"].map((item, idx) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="hover:text-secondary transition-colors duration-500 relative group cursor-pointer text-sm font-medium"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <span className="underline-animate">{item}</span>
            </a>
          ))}
          <button className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground font-semibold px-6 py-2.5 rounded-full hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:animate-pulse-ring active:scale-95 cursor-pointer">
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden transition-transform duration-500 hover:scale-125 active:scale-90 cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="animate-flip-in" /> : <Menu size={24} className="animate-flip-in" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-xl border-t border-border/50 animate-slide-down">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {["Services", "Why Us", "Location", "Contact"].map((item, idx) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-secondary transition-all duration-500 py-2 hover:translate-x-3 font-medium"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
