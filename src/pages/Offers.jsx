import React, { useEffect } from 'react'
import logos from '../assets/assets'
import boxImg from '../assets/wallpaperflare.com_wallpaper.jpg'
import boxTwoImg from '../assets/Lamborghini-Urus-removebg.png'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const Offers = () => {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".box",
      { y: 200, opacity: 0 },
      {
        y: 0, 
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".box",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".icons",
      {x:200, opacity: 0.1},
      {
        y: 0, // End position: On-screen
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger:"0.2",
        scrollTrigger: {
          trigger: ".icons",
          start: "bottom 80%",
          // scrub:0.1 // Trigger when `.box` is 80% into the viewport
        },
      }
    )
  }, []);
  
  return (
    <div className='h-screen w-full text-white overflow-hidden '>
      <div className='p-2 offer mb-4'>
        <div className='flex justify-evenly gap-28 h-40 w-44 '>
          <img className='icons' src={logos.porsLogo} alt="" />
          <img className='icons' src={logos.lamLogo} alt="" />
          <img className='icons' src={logos.nissanLogo} alt="" />
          <img className='icons' src={logos.ferrariLogo} alt="" />
          <img className='icons' src={logos.cooperLogo} alt="" />
          <img className='icons' src={logos.audiLogo} alt="" />
        </div>
      </div>
      <div className="flex">
        <div className="h-full w-full flex flex-col justify-center items-center p-14">
          <div>
            <h1 className='title text-white text-6xl text-left'>What we offer</h1>
            <p className='w-[60%] my-10 text-gray-400'>Get the best value for your vehicle with our transparent
              and straightforward selling process</p>
            <div className='flex gap-12 leading-[7vh] border-b border-black'>
              <ol>
                <li className='border-b border-gray-600'><span className='mr-20 text-gray-500'>01</span>We are the US's largest provider, with more patrols in more places</li>
                <li className='border-b border-gray-600'><span className='mr-20 text-gray-500'>02</span>You get 24/7 roadside assistance</li>
                <li className='border-b border-gray-600'><span className='mr-20 text-gray-500'>03</span>We fix 4 out of 5 cars at the roadside</li>
              </ol>
            </div>
            <button className='py-2 mt-8 px-6 bg-yellow-400 rounded-md text-black font-medium'>Explore more</button>
          </div>
        </div>

        <div className="w-full  p-6 box">
          <div className='flex gap-4'>
            <div className="box-1 bg-slate-600 relative text-white rounded-xl h-[65vh] w-[50%] overflow-hidden">
              <img src={boxImg} alt="" className='h-full w-full opacity-80 object-cover object-center'/>
              <div className='absolute top-6 left-10'>
                <h1 className='text-3xl title'>Supercars</h1>
                <p className='font-medium'>Explore the world of supercars in our showroom.</p>
              </div>
            </div>
            <div className="box-2 p-3 rounded-xl relative bg-gradient-to-br from-yellow-600/90 to-yellow-800 h-80 w-[40%]">
            <img src={boxTwoImg} alt="" className='h-full w-full  object-contain object-bottom'/>
            <div className='absolute top-10 left-6 text-white'>
                <h1 className='text-3xl title'>500 +</h1>
                <p className='font-medium text-md'>Cars of different brands.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers