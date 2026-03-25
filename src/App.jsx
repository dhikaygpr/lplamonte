import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import ValueSection from './components/ValueSection'
import CompareSection from './components/CompareSection'
import SystemSection from './components/SystemSection'
import PackageSection from './components/PackageSection'
import TestimonialSection from './components/TestimonialSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './index.css'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const update = () => {
      const els = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale'
      )
      els.forEach((el) => observer.observe(el))
    }

    update()
    const timer = setTimeout(update, 500)
    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ValueSection />
        <CompareSection />
        <SystemSection />
        <PackageSection />
        <TestimonialSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
