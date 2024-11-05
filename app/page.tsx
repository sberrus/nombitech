import React from 'react'
import Header from './components/Header'
import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'
import CTASection from './sections/CTASection'
import FooterSection from './sections/FooterSection'
import TeamSection from './sections/TeamSection'

const Home = () => {
  return (
    <>
      {/* header */}
      <Header />
      {/* hero section */}
      <HeroSection />
      {/* services section */}
      <ServicesSection />
      {/* team section */}
      <TeamSection />
      {/* CTA */}
      <CTASection />
      {/* Footer */}
      <FooterSection />
    </>
  )
}

export default Home