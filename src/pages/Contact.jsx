import React from 'react'
import india from '../assets/india.png'

const Contact = () => {
    return (
        <div className='h-screen w-full p-20 flex'>
            <div className="left w-[60%]">
                <h1 className='title text-white text-6xl text-left'>Start your journey with us today.</h1>
                <p className='w-[60%] my-10 text-gray-400'>Visit our showroom to experience our wide selection of vehicles and top-notch customer
                    service. Prefer to shop online? Browse our inventory, schedule a test drive, or get pre-
                    approved for financing right from the comfort of your home.</p>

                <button className='py-2 px-6 bg-yellow-300 rounded-md text-black font-medium'>Contact us →</button>

                <div className='bg-zinc-700 mt-16 p-4 text-white flex flex-col justify-center w-80 rounded-xl'>
                    <p className='p-4 border-b border-gray-400'>Open Hours</p>
                    <div className='flex justify-between p-4 text-sm'>
                        <div>
                            <p className='text-zinc-400'>WEEKDAYS</p>
                            <p>8:30 AM - 9:30 PM</p>
                        </div>
                        <div>
                            <p className='text-zinc-400'>WEEKDAYS</p>
                            <p>8:30 AM - 9:30 PM</p>
                        </div>
                    </div>
                </div>

            </div>


            <div className="right flex flex-col gap-6">
                <div className='h-[82%] w-full p-2 overflow-hidden  bg-zinc-800 rounded-xl'>
                    <img src={india} alt="" className='h-[100vh] object-left-bottom' />
                </div>

                <div className='contact-btn flex'>
                    <button>📧  info@dealership.com</button>
                    <button>📞  +1 234 567 8900</button>
                </div>
            </div>

        </div>
    )
}

export default Contact