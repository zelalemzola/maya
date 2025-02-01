import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BlurFade } from './ui/blur-fade'

const Footer = () => {
  return (
    <div className='px-5 md:px-20 flex  flex-col gap-10 py-10'>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
            <div className="flex flex-col gap-3">
               <BlurFade delay={0.55} inView>
              <div className="flex items-center gap-2 ">
               
                <Image src='/mlogo.png' alt='logo' width={60} height={60}/><p className='text-2xl text-secondary'>Maya</p></div>
                </BlurFade>
                <BlurFade delay={0.65} inView>
                <h2 className="text-2xl md:text-3xl font-bold ">Building, Tommorow, Today!</h2>
                </BlurFade>
            </div>
            <div className="flex flex-col gap-3">
              <BlurFade delay={0.75} inView>
                <div className="flex items-center gap-3 text-zinc-400"><Mail className='text-secondary'/> mayaproperties@gmail.com</div>
                </BlurFade>
                <BlurFade delay={0.85} inView>
                <div className="flex items-center gap-3 text-zinc-400"><Phone className='text-secondary'/>+251912026258</div>
            </BlurFade>
            </div>

        </div>
        <hr/>
        <div className="flex items-center flex-col md:flex-row gap-4 md:gap-0 md:justify-between">
            <div className="flex items-center flex-row flex-wrap gap-4">
              <BlurFade delay={0.95} inView>
                <Link href='/' className='hover:text-secondary'>Home</Link>
                </BlurFade>
                <BlurFade delay={1.05} inView>
                <Link href='/services' className='hover:text-secondary'>Our Service</Link>
                </BlurFade>
                <BlurFade delay={1.15} inView>
                <Link href='/about' className='hover:text-secondary'>About Us</Link>
                </BlurFade>
                <BlurFade delay={1.25} inView>
                <Link href='/properties' className='hover:text-secondary'>Properties</Link>
                </BlurFade>
                <BlurFade delay={1.35} inView>
                <Link href='https://t.me/+251912026258' className='hover:text-secondary'>Contact Us</Link>
                </BlurFade>
            </div>
            <BlurFade delay={1.05} inView>
            <p className="">&copy; Copyright 2025. All Rights Reserved</p>
            </BlurFade>
        </div>
        </div>
  )
}

export default Footer