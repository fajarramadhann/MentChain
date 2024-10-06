import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function HomeSection() {
  return (
    <section id="home" className="my-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI-Powered Career Guidance Platform
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
          <span className="bold">MentChain</span> is an AI-powered career guidance platform designed to provide personalized career advice through advanced AI technology and tokenized interactions.
            </p>
          <Button className="text-lg px-8 py-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            launch Ment.AI
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}