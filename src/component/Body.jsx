import React from 'react'
import imageBg from '../assets/images/imageBg.png';

const Body = () => {
    return (
        <section className="bg-hero-image w-full h-screen bg-no-repeat bg-cover flex justify-center" >
            <div className='flex justify-center flex-col items-center w-1/2 gap-20'>
                <h1 className='text-white text-7xl font-extrabold'>You got the travel plans, we got the travel vans.</h1>
                <div className="gap-10 flex-col flex">
                    <p className="text-white text-3xl ">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                    <button className="bg-orange-300 w-full py-4 rounded-md text-white font-bold text-1xl">Find your van</button>
                </div>
            </div>
        </section >
    )
}

export default Body
