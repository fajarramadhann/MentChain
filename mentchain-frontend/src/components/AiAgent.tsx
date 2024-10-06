import React, { useState, useCallback, KeyboardEvent } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Loader2 } from 'lucide-react'

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = useCallback(async () => {
    if (input.trim() && !isLoading) {
      const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input.trim() }
      setMessages(prev => [...prev, userMessage])
      setInput('')
      setIsLoading(true)

      try {
        // Simulating API call to AI backend
        await new Promise(resolve => setTimeout(resolve, 1000))
        const aiMessage: Message = { id: (Date.now() + 1).toString(), role: 'ai', content: `AI response to: ${input}` }
        setMessages(prev => [...prev, aiMessage])
      } catch (error) {
        console.error('Failed to get AI response:', error)
        // Optionally, add an error message to the chat
      } finally {
        setIsLoading(false)
      }
    }
  }, [input, isLoading])

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }
  }

  return (
      <Card className="max-w-4xl mx-auto h-[calc(100vh-200px)] flex flex-col border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <CardHeader>
          <CardTitle>Chat with MentChAIn</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow overflow-hidden">
          <ScrollArea className="h-full">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-4 p-2 rounded ${
                  message.role === 'user' ? 'bg-[#ffd93d] ml-auto' : 'bg-[#4ecdc4]'
                } max-w-[80%] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
              >
                {message.content}
              </div>
            ))}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <div className="flex w-full space-x-2">
            <Input 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyPress={handleKeyPress}
              placeholder="Type your message..." 
              className="flex-grow border-2 border-black"
              disabled={isLoading}
            />
            <Button 
              onClick={handleSend} 
              className="bg-[#ff6b6b] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                'Send'
              )}
            </Button>
          </div>
        </CardFooter>
      </Card>
  )
}

export default Chat