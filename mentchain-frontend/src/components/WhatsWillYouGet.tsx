import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Users, Coins } from 'lucide-react'

const features = [
  { icon: Shield, title: "Enhanced Security", description: "State-of-the-art blockchain security for your assets" },
  { icon: Zap, title: "Lightning Fast", description: "Rapid transactions and responsive dApps" },
  { icon: Users, title: "Community Driven", description: "Join a thriving ecosystem of developers and users" },
  { icon: Coins, title: "Token Economics", description: "Innovative tokenomics for sustainable growth" },
]

export default function WhatYouGetSection() {
  return (
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">What Will You Get?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black">
              <CardHeader>
                <feature.icon className="w-12 h-12 mb-4 text-black" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
  )
}