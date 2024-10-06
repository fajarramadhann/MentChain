import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Lightbulb, Users, Star } from 'lucide-react'

const aboutSections = [
  { icon: Target, title: "Our Mission", content: "To revolutionize the web with decentralized technologies" },
  { icon: Lightbulb, title: "Our Impact", content: "Empowering users and developers worldwide" },
  { icon: Users, title: "Our Approach", content: "Community-driven development and open-source collaboration" },
  { icon: Star, title: "Our Team", content: "A diverse group of experts passionate about Web3" },
]

export default function AboutUsSection() {
  return (
    <section id="about" className="py-36">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutSections.map((section, index) => (
            <Card key={index} className="shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black">
              <CardHeader>
                <section.icon className="w-12 h-12 mb-4" />
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}