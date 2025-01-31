import { ArrowUpRight} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='h-full md:h-screen py-10'>
        <p className="py-2 px-4 rounded-full bg-transparent border-secondary border-2 w-fit mx-auto">Providing Modern & lasting projects</p>
        <div className="pt-7 flex items-center flex-col md:flex-row px-10 ">
            <div className="flex flex-col gap-3 items-start">
                <p className="text-xl text-secondary">Maya</p>
                <h1 className="text-3xl md:text-5xl font-bold">FIND YOUR DREAM HOME WITH US</h1>
                <p className=" border-t-0 border-b-0 border-r-0 border-secondary border-l-4 px-2 py-2 md:py-4 capitalize text-xl md:text-3xl">Designing your next chapter</p>
                <p className="text-xl">Where Dreams Become Homes/Offices, Transforming Visions<br/> Into Vibrant Living/Working Spaces</p>
                <div className="flex items-center flex-wrap gap-4 pt-3">
                    <Link href='/projects' className='bg-white py-2 px-4 text-black rounded-full flex items-center gap-2 font-medium'>Explore Projects<ArrowUpRight /></Link>
                    <Link href='https://:t.me/+251912026258' className='bg-secondary text-black hover:bg-secondary px-4 py-2 rounded-full shadow-md hover:shadow-2xl '>Contact Us</Link>

                </div>
            
            </div>
            <div className='flex justify-center '>
                    <Image src='/mhero.png' alt='hero image' width={920} height={920} className='scale-[70%] md:scale-[100%]'/>
                </div>
        </div>
    </div>
  )
}

export default Hero