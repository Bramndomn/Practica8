import { AboutSection } from '@/components/about-section'
import { BuffetSection } from '@/components/buffet-section'
import { Hero } from '@/components/hero'
import { LocationSection } from '@/components/location-section'
import { ReservationSection } from '@/components/reservation-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <BuffetSection />
      <ReservationSection />
      <LocationSection />
    </>
  )
}
