import React from 'react'

const Footer = () => {
    return (
        <div className='bg-white relative text-black h-96 w-full p-14 rounded-t-xl py-20'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='title text-2xl font-bold mb-4'>DEALERSHIP</h1>
                    <ul>
                        <li>Book your free consultation now!</li>
                        <li>(954) 699-0699</li>
                        <li>1324 SE 17th st</li>
                        <li>Fort Lauderdale, FL 33316</li>
                    </ul>
                </div>

                <div>
                    <h1 className='title text-2xl font-bold mb-4'>Menu</h1>
                    <ul>
                        <li>Homw</li>
                        <li>About us</li>
                        <li>Inventory</li>
                        <li>Services</li>
                    </ul>
                </div>

                <div>
                    <h1 className='title text-2xl font-bold mb-4'>Fast Links</h1>
                    <ul>
                        <li>Book</li>
                        <li>Privacy Policy</li>
                        <li>Contact us</li>
                        <li>My account</li>
                    </ul>
                </div>

                <div className='flex flex-col items-center gap-4'>
                    <div className=' text-right mb-6'>
                        <h1 className='title text-2xl font-bold mb-4'>Subscribe to our newsletter</h1>
                        <p className='text-sm text-right'>Stay up-to-date with latest news, promotions and exclusive offers!</p>
                    </div>

                    <div className=" bg-gray-300 flex items-center gap-2 rounded-md">
                        <input
                            type="text"
                            placeholder="Email"
                            className="bg-gray-300 flex-1 p-2 border border-gray-400 rounded-md "
                        />
                        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex justify-between  font-bold'>
                <p className='text-sm  absolute bottom-10'>Copyright @ Peeyush Chandra Das. || All Rights Reserved.</p>
                <div className="absolute bottom-10 right-14 flex gap-4 text-white font-extrabold text-center">
                    <p className='bg-black rounded-full h-10 w-10 p-2'>📸</p>
                    <p className='bg-black rounded-full h-10 w-10 p-2'>X</p>
                    <p className='bg-black rounded-full h-10 w-10 p-2'>f</p>
                </div>
            </div>
        </div>
    )
}

export default Footer