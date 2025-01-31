import { Gem } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Why = () => {
  return (
    <div className='h-full md:h-screen py-10 md:pt-10 flex flex-col'>
         <h1 className='text-3xl md:text-5xl font-bold text-center md:pt-5'>
         Why Choose Us?
      </h1>
        <div className="flex flex-col-reverse items-center md:flex-row px-4  pt-10 md:pt-20">
            <div className="flex flex-col gap-4 ">
                <div className="flex flex-col items-center gap-3">
                    <h2 className="flex items-center gap-2 font-bold text-2xl text-secondary"><Gem />Exclusive Developer Deals</h2>
                    <p className="text-lg text-center md:text-start md:w-[45%]">Get first-hand access to premium properties directly from trusted developers.</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <h2 className="flex items-center gap-2 font-bold text-2xl text-secondary"><Gem />Tailored Property Matches </h2>
                    <p className="text-lg text-center md:text-start md:w-[45%]">We find homes and investments that align perfectly with your needs.</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <h2 className="flex items-center gap-2 font-bold text-2xl text-secondary"><Gem />Seamless Buying Process </h2>
                    <p className="text-lg text-center md:text-start md:w-[45%]"> From inquiry to keys, we handle every step with transparency and expertise.</p>
                </div>
                
            </div>
             <div className="">
          <Image src='/mhero.png' alt='hero image' width={920} height={920} className='scale-[70%] md:scale-[100%] -my-10 md:my-0'/>
            
        </div>
        </div>
       
    </div>
  )
}

export default Why