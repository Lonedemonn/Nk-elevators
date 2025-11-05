"use client"

import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const footerLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ]

  const services = ["Installation", "Maintenance", "Emergency Repair", "Modernization"]

  return (
    <footer className="bg-primary text-primary-foreground transition-all duration-300 border-t border-border/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-2 mb-4 hover:translate-x-2 transition-transform duration-500">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/70 rounded-lg flex items-center justify-center font-bold hover:animate-glow transition-all duration-500 cursor-pointer">
                NK
              </div>
              <h3 className="font-bold text-lg hover:text-secondary transition-colors duration-500">NK Elevators</h3>
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Your trusted partner for comprehensive elevator solutions and exceptional service.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "facebook" },
                { icon: Linkedin, label: "linkedin" },
                { icon: Twitter, label: "twitter" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 bg-secondary/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-all duration-500 hover:scale-125 hover:animate-glow cursor-pointer transform"
                  onMouseEnter={() => setHoveredSocial(label)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <Icon className="w-5 h-5 hover:text-primary transition-colors duration-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-down" style={{ animationDelay: "100ms" }}>
            <h4 className="font-bold text-lg mb-6 hover:text-secondary transition-colors duration-500">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li
                  key={link.label}
                  className="hover:translate-x-2 transition-transform duration-500 group"
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors duration-500 flex items-center gap-2 group cursor-pointer"
                  >
                    {link.label}
                    <ArrowRight
                      className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                        hoveredLink === link.label ? "translate-x-2" : ""
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-slide-down" style={{ animationDelay: "200ms" }}>
            <h4 className="font-bold text-lg mb-6 hover:text-secondary transition-colors duration-500">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={service}
                  className="hover:translate-x-2 transition-transform duration-500 group"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-secondary transition-colors duration-500 flex items-center gap-2 cursor-pointer"
                  >
                    {service}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-right">
            <h4 className="font-bold text-lg mb-6 hover:text-secondary transition-colors duration-500">Contact</h4>
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text: "123 Elevator Street, Tech Plaza, New Delhi - 110001",
                },
                { icon: Phone, text: "+91 98765 43210", href: "tel:+919876543210" },
                {
                  icon: Mail,
                  text: "info@nkelevators.com",
                  href: "mailto:info@nkelevators.com",
                },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <a
                    key={idx}
                    href={item.href || "#"}
                    className="flex gap-3 hover:translate-x-2 transition-transform duration-500 group cursor-pointer"
                  >
                    <Icon className="w-5 h-5 flex-shrink-0 text-secondary group-hover:scale-125 transition-transform duration-500" />
                    <span className="text-primary-foreground/70 group-hover:text-secondary transition-colors duration-500 text-sm leading-relaxed">
                      {item.text}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Footer divider and bottom section */}
        <div className="border-t border-primary-foreground/10 pt-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} NK Elevators. All rights reserved. | Domain: nkelevators.com
            </p>
            <div className="flex gap-6 justify-center md:justify-end">
              {["Privacy Policy", "Terms of Service"].map((link, idx) => (
                <a
                  key={link}
                  href="#"
                  className="text-primary-foreground/60 hover:text-secondary text-sm transition-all duration-500 cursor-pointer hover:scale-110"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
