import React from 'react'
import { Button } from "@/components/ui/button"
import { MessageCircle as Discord } from 'lucide-react'

export default function CommunitySection() {
  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Join Our Community</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl mb-8 text-center">
            Be part of our growing ecosystem and help shape the future of Web3.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Button className="shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="mr-2" /> Twitter
            </Button>
            <Button className="shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="mr-2" /> GitHub
            </Button>
            <Button className="shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Discord className="mr-2" /> Discord
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black">
            <h3 className="text-2xl font-bold mb-4">Upcoming Events</h3>
            <ul className="list-disc list-inside">
              <li>Web3 Hackathon - June 15-17, 2024</li>
              <li>MentChain Conference - August 5-7, 2024</li>
              <li>Developer Meetup - Every last Thursday of the month</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}