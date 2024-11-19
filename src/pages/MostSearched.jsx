import React from 'react'
import logos from '../assets/assets'
import Card from '../components/Card'


const MostSearched = () => {
    return (
        <div className='h-screen w-full p-12 mt-4'>
            <div className='flex justify-between items-center'>
                <h1 className='title text-white text-5xl'>The Most Searched Cars</h1>
            </div>

            <div className='flex justify-between my-10'>
                <div className="leftbtn text-white">
                    <button>New Cars</button>
                    <button>Used Cars</button>
                    <button>In Stock</button>
                </div>
                <div className="rightbtn">
                    <button className='bg-yellow-400 text-black font-medium text-md rounded-md'>View all</button>
                </div>
            </div>

            <div className='flex cardcont gap-6 w-full overflow-scroll'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='btnlr flex gap-1 py-10 font-extrabold text-2xl text-center text-white'>
                <button className='py-1 px-2 border rounded-lg border-white'>←</button>
                <button className='py-1 px-2 border rounded-lg border-white'>→</button>
            </div>
        </div>
    )
}

export default MostSearched