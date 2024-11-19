import './App.css'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Hero from './pages/Hero'
import MostSearched from './pages/MostSearched'
import Offers from './pages/Offers'

function App() {

  return (
    <div className='bg-[#131313] h-full w-full py-4'>
      <Hero />
      <Offers />
      <MostSearched />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
