"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false); // State to control Sheet
  const router = useRouter(); 

  // Function to close the sheet and navigate
  const handleNavigate = (href) => {
    setOpen(false); // Close the sheet
    router.push(href); // Navigate to the page
  };

  return (
    <div className="z-20 w-full py-3 fixed flex items-center justify-between px-4 md:px-20">
      <div className="flex items-center gap-2">
        <Image src="/mlogo.png" alt="logo" width={60} height={60} />
        <p className="text-2xl text-secondary">Maya</p>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">
        <Link href="/" className="hover:text-secondary">Home</Link>
        <Link href="/about" className="hover:text-secondary">About Us</Link>
        <Link href="/services" className="hover:text-secondary">Services</Link>
        <Link href="/properties" className="hover:text-secondary">Properties</Link>
      </div>

      <div className="hidden md:flex">
        <Link href="https://t.me/+251912026258" className="bg-secondary text-black hover:bg-secondary px-4 py-2 rounded-full shadow-md hover:shadow-2xl">
          Contact Us
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <AlignJustify className="h-8 w-8 text-secondary" />
          </SheetTrigger>
          <SheetContent side="bottom" className="bg-zinc-800">
            <SheetHeader>
              <SheetTitle className="text-lg text-secondary">Menu</SheetTitle>
              <SheetDescription>
                <div className="flex flex-col gap-4 items-center">
                  <button onClick={() => handleNavigate('/')} className="hover:text-secondary text-lg">Home</button>
                  <button onClick={() => handleNavigate('/about')} className="hover:text-secondary text-lg">About Us</button>
                  <button onClick={() => handleNavigate('/services')} className="hover:text-secondary text-lg">Services</button>
                  <button onClick={() => handleNavigate('/properties')} className="hover:text-secondary text-lg">Properties</button>
                  <a href="https://t.me/+251912026258" className="bg-secondary text-black hover:bg-secondary text-lg px-4 py-2 rounded-full shadow-md hover:shadow-2xl">
                    Contact Us
                  </a>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
