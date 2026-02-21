import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { FeaturesBar } from './components/FeaturesBar'
import { AboutUs } from './components/AboutUs'
import { Services } from './components/Services'
import { ConsumablesB2B } from './components/ConsumablesB2B'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { Location } from './components/Location'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background font-display text-foreground selection:bg-primary selection:text-white">
      <Navigation />

      <main>
        <Hero />
        <FeaturesBar />
        <AboutUs />
        <Services />
        <ConsumablesB2B />
        <Portfolio />
        <Testimonials />
        <Location />
      </main>

      <Footer />
    </div>
  )
}

export default App
