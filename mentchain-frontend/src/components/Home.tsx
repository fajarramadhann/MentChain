import React from 'react'
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

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
          <Link className={buttonVariants({ variant: "default" })} to={"/chat"}>
            launch Ment.AI
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}