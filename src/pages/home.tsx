import { AboutSection } from '@/components/about-section'
import { BuffetSection } from '@/components/buffet-section'
import { Hero } from '@/components/hero'
import { LocationSection } from '@/components/location-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <BuffetSection />
      <LocationSection />
    </>
  )
}
