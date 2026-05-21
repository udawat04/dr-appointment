import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { HeroSection } from '../components/home/HeroSection'
import { FeaturesSection } from '../components/home/FeaturesSection'
import { HowItWorksSection } from '../components/home/HowItWorksSection'
import { SpecialtiesSection } from '../components/home/SpecialtiesSection'
import { DoctorsSection } from '../components/home/DoctorsSection'
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection'
import { TestimonialsSection } from '../components/home/TestimonialsSection'
import { StatsSection } from '../components/home/StatsSection'
import { FaqSection } from '../components/home/FaqSection'
import { CtaSection } from '../components/home/CtaSection'

export function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SpecialtiesSection />
        <DoctorsSection />
        <StatsSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
