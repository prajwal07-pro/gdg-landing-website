// src/App.jsx
import './i18n'
import './styles/global.css'

import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import CommunityValues from './components/CommunityValues'
import Events from './components/Events'
import Projects from './components/Projects'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Technologies />
        <CommunityValues />
        <Events />
        <Projects />
        <Highlights />
      </main>
      <Footer />
    </>
  )
}
