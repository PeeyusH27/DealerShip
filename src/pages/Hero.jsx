import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import lambo from '../assets/Side-View-Lamborghini-Car-PNG-Photos.png';
import location from '../assets/location.png'
import { gsap } from "gsap";

const Hero = () => {

  useEffect(() => {
    // GSAP Animation
    gsap.fromTo(
      ".car-main",
      { x: window.innerWidth },
      {
        x: 0,
        duration: 1.5,
        ease: "power1.inOut",
        delay: 0.1,
      }
    );
  
    // GSAP Animation for '.hero-title'
    gsap.fromTo(
      ".hero-title",
      { x: -window.innerWidth },
      {
        x: 0,
        duration: 1.8,
        ease: "power2.out",
      }
    );
  }, []);


  return (
    <div className='h-screen mx-4'>
      <div className='bg-gradient-to-br from-gray-700/40 via-slate-300/40 to-gray-400/30 h-[95vh] w-full rounded-xl p-3'>
        <Navbar />
        <div className=' h-[90%] m-6 flex flex-col items-center gap-6'>

          {/* TITLE */}
          <h1 className='hero-title text-[80px] text-white mt-10'>Find Your Dream Car</h1>

          {/* OPTIONS */}
          <div className='list bg-white/20 flex justify-around rounded-xl overflow-hidden mb-2'>
            <select name="cars" id="cars">
              <option value="volvo">Used Cars</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select name="cars" id="cars">
              <option value="volvo">Any Makes</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select name="cars" id="cars">
              <option value="volvo">Any Models</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select name="cars" id="cars">
              <option value="volvo">All Pricing</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <button className='bg-yellow-500 px-5 m-1 rounded-lg'>Search</button>
          </div>
          {/* IMAGE */}
          <div className='h-[50%] w-[60%] flex justify-center overflow-hidden '>
            <img src={lambo} alt="Lamborghini Urus" className='h-full w-full car-main' />
          </div>
        </div>

        <div className='text-white flex flex-wrap w-[18vw] absolute left-14 bottom-16'>
          <p className='text-sm'>At DealershiFX were committed to providing an
            exceptional experience that meets
            your unique needs.
          </p>
        </div>

        <div className='bg-white rounded-xl p-4 flex flex-wrap w-[15vw] absolute right-10 bottom-16'>
          <div className='flex justify-center items-center gap-2 px-6'>
            <img src={location} alt='location logo'  className='h-8'/>
            <a href="/" className='text-sm underline'>view on the map</a>
          </div>
          <p className='text-sm mt-2 border-t-2'>2356 Oakwood Drive, Suite 18,
          San Francisco, California 94111, US
          </p>
        </div>

      </div>
    </div>
  )
}

export default Hero
