import About from "@/components/About";
import CTA from "@/components/CTA";
import Expertise from "@/components/Expertise";
import FAQ from "@/components/Faq";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import Why from "@/components/Why";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-full w-full">
      <Hero/>
      <Expertise/>
      <About/>
      <Why/>
      <FAQ/>
      
    </div>
  );
}
