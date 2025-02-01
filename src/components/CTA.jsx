import React from 'react'
import { MoveRight } from 'lucide-react';
import Link from 'next/link'
import { BlurFade } from './ui/blur-fade';
const CTA = () => {
  return (
    <div className='flex flex-col gap-4 px-5 md:mx-20 my-10 rounded-b-2xl py-20 items-center justify-center text-white bg-gradient-to-t from-secondary via-[#B8860B] to-black'>
       <BlurFade delay={0.55} inView>
      <p className="py-2 px-4 rounded-full bg-transparent border-white border-2 w-fit mx-auto">Ready To transform Your Ideas?</p>
      </BlurFade>
      <BlurFade delay={0.65} inView>
      <h1 className='text-3xl md:text-5xl font-bold'>Speak To Our Friendly Sales Team Today</h1>
     </BlurFade>
     <BlurFade delay={0.75} inView>
      <p className="text-lg text-center">Discover tailored solutions and expert advice designed to meet your unique needs. We're here to provide guidance and support every step of the way</p>
      </BlurFade>
      <BlurFade delay={0.85} inView>
      <Link href='https://t.me/+251912026258' className='bg-white text-black hover:bg-zinc-400 px-4 py-2 rounded-full shadow-md hover:shadow-2xl flex items-center gap-2'>Contact Us<MoveRight /></Link>
      </BlurFade>
    </div>
  )
}

export default CTA