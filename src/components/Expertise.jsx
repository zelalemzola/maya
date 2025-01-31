import { ChartColumn, Contact, HousePlus, Megaphone, MessageSquareText, Scale } from 'lucide-react'
import React from 'react'

const Expertise = () => {
  return (
    <div className='h-full md:h-screen py-10 md:pt-10 flex flex-col items-center'>
        <p className="py-2 px-4 rounded-full bg-transparent border-secondary border-2 w-fit mx-auto">Our Services</p>
      <h1 className='text-3xl md:text-5xl font-bold text-center pt-5'>
        Highlights Of Our Real-estate <br />Expertise
      </h1>

      {/* Centering container */}
      <div className="flex flex-col items-center justify-center gap-10 w-full mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
          <div className="bg-zinc-600 shadow-xl p-5 flex flex-col gap-3 w-[90%] md:w-[25%] rounded-2xl ">
            <p className="text-xl text-secondary"> <ChartColumn /></p>
            <p className="font-bold text-xl text-secondary">Market Analysis</p>
            <p className="text-md">In-depth understanding of market trends to guide pricing and strategy </p>
          </div>
          <div className="bg-zinc-600 shadow-xl p-5 flex flex-col gap-3 w-[90%] md:w-[25%] rounded-2xl ">
            <p className="text-xl text-secondary"> <HousePlus /></p>
            <p className="font-bold text-xl text-secondary">Property Valuation</p>
            <p className="text-md">Accurate assessments to determine the true value of your favorite apartment/villa/office</p>
          </div>
          <div className="bg-zinc-600 shadow-xl p-5 flex flex-col gap-3 w-[90%] md:w-[25%] rounded-2xl ">
            <p className="text-xl text-secondary"> <Scale /></p>
            <p className="font-bold text-xl text-secondary">Legal Assistance</p>
            <p className="text-md">Helping clients navigate the complexities of legal paperwork to ensure a smooth transaction</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
          <div className="bg-zinc-600 shadow-xl p-5 flex flex-col gap-3 w-[90%] md:w-[25%] rounded-2xl ">
            <p className="text-xl text-secondary"><Contact /></p>
            <p className="font-bold text-xl text-secondary">Post-Sale Support</p>
            <p className="text-md">Providing assistance even after the sale, ensuring clients feel supported</p>
          </div>
          <div className="bg-zinc-600 shadow-xl p-5 flex flex-col gap-3 w-[90%] md:w-[25%] rounded-2xl ">
            <p className="text-xl text-secondary"><MessageSquareText /></p>
            <p className="font-bold text-xl text-secondary">Negotiation Skills</p>
            <p className="text-md">Expert negotiators securing the best deals, ensuring fair pricing, and favorable terms.</p>
          </div>
          <div className="bg-zinc-600 shadow-xl p-5 flex flex-col gap-3 w-[90%] md:w-[25%] rounded-2xl ">
            <p className="text-xl text-secondary"><Megaphone /></p>
            <p className="font-bold text-xl text-secondary">Tailored Marketing Plans</p>
            <p className="text-md">Developing customized strategies to showcase properties and attract buyers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expertise
