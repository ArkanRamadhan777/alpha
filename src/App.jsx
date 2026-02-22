import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App
