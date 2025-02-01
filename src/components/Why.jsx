import { Gem } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { BlurFade } from './ui/blur-fade'

const Why = () => {
  return (
    <div className='h-full md:h-screen py-10 md:pt-10 flex flex-col md:my-20'>
        <BlurFade delay={0.55} inView>
         <h1 className='text-3xl md:text-5xl font-bold text-center md:pt-5'>
         Why Choose Us?
      </h1>
      </BlurFade>
        <div className="flex flex-col-reverse items-center md:flex-row px-4  pt-10 md:pt-20">
            <div className="flex flex-col gap-4 ">
              
                <div className="flex flex-col items-center gap-3">
                  <BlurFade delay={0.65} inView>
                    <h2 className="flex items-center gap-2 font-bold text-2xl text-secondary"><Gem />Exclusive Developer Deals</h2>
                   </BlurFade>
                  
                    <p className="text-lg text-center md:text-start md:w-[45%]"> <BlurFade delay={0.75} inView> Get first-hand access to premium properties directly from trusted developers. </BlurFade></p>
                  
               </div>
                <div className="flex flex-col items-center gap-3">
                  <BlurFade delay={0.85} inView>
                    <h2 className="flex items-center gap-2 font-bold text-2xl text-secondary"><Gem />Tailored Property Matches </h2>
                   </BlurFade>
                  
                    <p className="text-lg text-center md:text-start md:w-[45%]"> <BlurFade delay={0.95} inView> We find homes and investments that align perfectly with your needs.</BlurFade></p>
                  
                </div>
                <div className="flex flex-col items-center gap-3">
                  <BlurFade delay={1.05} inView>
                    <h2 className="flex items-center gap-2 font-bold text-2xl text-secondary"><Gem />Seamless Buying Process </h2>
                    </BlurFade>
                  
                    <p className="text-lg text-center md:text-start md:w-[45%]">  <BlurFade delay={1.15} inView> From inquiry to keys, we handle every step with transparency and expertise.</BlurFade></p>
                    
                </div>
                
            </div>
             <div className="">
              <BlurFade delay={0.65} inView>
          <Image src='/mhero.png' alt='hero image' width={920} height={920} className='scale-[70%] md:scale-[100%] -my-10 md:my-0'/>
            </BlurFade>
        </div>
        </div>
       
    </div>
  )
}

export default Why