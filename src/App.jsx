import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Products from './components/Products'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
