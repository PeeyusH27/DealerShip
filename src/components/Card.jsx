import React, { useEffect } from 'react'
import lambo from '../assets/Lamborghini-PNG-Isolated-Photo.png'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const Card = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
          ".cards",
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power1",
            stagger: 0.5,
            scrollTrigger: {
              trigger: ".cards",
              start: "top 50%",
              end:"top 70%",
              scrub:1,
            },
          }
        );
    }, []);

    return (
        <div className=' card bg-zinc-700 rounded-xl p-1 overflow-hidden text-white cursor-pointer cards'>
            <div className='p-1 bg-zinc-800 rounded-xl'>
                <img src={lambo} alt="" className='rounded-xl h-48 ' />
            </div>
            <div className='p-4'>
                <div className="details leading-1 border-b border-gray-500">
                    <h1 className="text-xl font-semibold">
                        Lamborghini
                    </h1>
                    <p className='text-gray-400 text-sm'>Gurugram, India</p>
                </div>

                <div className="specs flex justify-between p-6 border-b border-gray-500">
                    <p>25/Kmpl</p>
                    <p>Petrol</p>
                    <p>Manual</p>
                </div>

                <div className="price flex justify-between items-center p-2">
                    <div className="left">
                        <p className='text-sm text-gray-500 line-through'>$24000</p>
                        <h1 className='text-lg text-white font-medium'>$20000</h1>
                    </div>
                    <a href="/" className='text-yellow-500 font-md'>View details</a>
                </div>
            </div>
        </div>
    )
}

export default Card