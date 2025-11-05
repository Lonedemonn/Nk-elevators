import AnimatedBackground from "@/components/animated-background"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import MapSection from "@/components/map-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />

      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <MapSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
