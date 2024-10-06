import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MessageSquare } from 'lucide-react'
// import Link from 'next/link'

const CTASection: React.FC = () => {
  return (
    <section className="mt-32">
      <div className="container mx-auto px-4">
        <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">Ready to Chat with MentChAIn?</h2>
                <p className="text-xl mb-6">
                  Experience the future of AI conversation. Our advanced AI is ready to assist you, learn from you, and engage in meaningful dialogue.
                </p>
                <Button asChild className="text-xl px-6 py-8 bg-[#ffd93d] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                  <a href="/chat">
                    Start Chatting Now <ArrowRight className="ml-2 h-6 w-6" />
                  </a>
                </Button>
              </div>
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-[#4ecdc4] rounded-full border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                  <MessageSquare className="w-32 h-32 text-black" />
                </div>
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-[#ff6b6b] text-black text-xl font-bold py-2 px-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  AI Powered
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CTASection