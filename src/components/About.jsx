import { ArrowUpRight} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className='h-full md:h-screen py-10'>
        <p className="py-2 px-4 rounded-full bg-transparent border-secondary border-2 w-fit mx-auto">About Us</p>
        <div className="pt-7 flex items-center flex-col-reverse md:flex-row-reverse px-10  ">
            <div className="flex flex-col gap-3 items-start flex-1">
                <p className="text-xl text-secondary">Maya</p>
                
                <p className=" border-t-0 border-b-0 border-r-0 border-secondary border-l-4 px-2 py-2 md:py-4 capitalize text-xl md:text-3xl">We are more than just real estate agents</p>
                <p className="text-xl  text-justify">
                    we are your trusted partners in property investment. Our mission is to connect buyers with the finest properties from top developers, ensuring every client finds a place that truly feels like home or the perfect investment. With a passion for real estate and a commitment to excellence, we simplify the process, making buying, selling, and investing a seamless and rewarding experience.
                </p>
                <div className="flex items-center flex-wrap gap-4 pt-3">
                    <Link href='/projects' className='bg-white py-2 px-4 text-black rounded-full flex items-center gap-2 font-medium'>Explore Projects<ArrowUpRight /></Link>
                    <Link href='https://:t.me/+251912026258' className='bg-secondary text-black hover:bg-secondary px-4 py-2 rounded-full shadow-md hover:shadow-2xl '>Contact Us</Link>

                </div>
            
            </div>
            <div className=' flex-1'>
                    <Image src='/hand.png' alt='hero image' width={560} height={560} className='scale-[60%] md:scale-[100%] -my-20 md:mt-0'/>
                </div>
        </div>
    </div>
  )
}

export default About