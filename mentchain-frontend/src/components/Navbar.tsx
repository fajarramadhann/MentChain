import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import mentchainLogo from '../assets/mentchain-logo.png'

import { WalletSelector } from './WalletSelector'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-mainAccent sticky top-0 z-10 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">MentChain</div>
        <div className="hidden md:flex space-x-4">
          <Button variant="neutral" className="hover:underline">Home</Button>
          <Button variant="neutral" className="hover:underline">About Us</Button>
          <Button variant="neutral" href="#community" className="hover:underline">Community</Button>
        </div>
        {/* <Button className="hidden md:block">Connect Wallet</Button> */}
        <WalletSelector />
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#community" className="hover:underline">Community</a>
          <Button className="w-full mt-2">Connect Wallet</Button>
        </div>
      )}
    </nav>
  )
}