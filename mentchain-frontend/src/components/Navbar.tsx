import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { buttonVariants } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { WalletSelector } from './WalletSelector'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex justify-center">
      <nav className="sticky rounded top-0 z-10 p-2 mt-4">
        <div className="flex items-center justify-between">
          {/* <div className="text-2xl font-bold mr-8 text-white">MentChain</div> */}
          <img src="/images/mentchain-1.png" alt="MentChain Logo" className="w-32 mr-8" />
          <div className="hidden md:flex space-x-4 mr-8">
            <Link className={buttonVariants({ variant: "neutral", size: "sm" })} to={"/"}>Home</Link>
            <Link className={buttonVariants({ variant: "neutral", size: "sm" })} to={"/about"}>About Us</Link>
            <Link className={buttonVariants({ variant: "neutral", size: "sm" })} to={"/community"}>Community</Link>
          </div>
          <div className="flex items-center">
            <WalletSelector />
            <button 
              className="md:hidden ml-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-2">
            <Link className={buttonVariants({ variant: "neutral" })} to={"/"}>Home</Link>
            <Link className={buttonVariants({ variant: "neutral" })} to={"/about"}>About Us</Link>
            <Link className={buttonVariants({ variant: "neutral" })} to={"/community"}>Community</Link>
          </div>
        )}
      </nav>
    </div>
  )
}