import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex text-white justify-between'>
        <div className='logo text-3xl font-extrabold tracking-wider ml-4 mt-2'>
            <a href='/'>DealerShip</a>
        </div>
        <ul className='flex gap-8 justify-center items-center'>
            <li>Home</li>
            <li>About Us</li>
            <li>Inventory</li>
            <li>Services</li>
        </ul>

        <button className='bg-white h-8 rounded-lg text-black text-xs px-2 font-bold mr-2 ml-16'>Add Listing</button>
    </div>
  )
}

export default Navbar