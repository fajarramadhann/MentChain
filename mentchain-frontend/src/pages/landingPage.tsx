import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WalletSelector } from "@/components/WalletSelector"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-purple-400 text-white">
      <header className="container mx-auto p-4">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">MentChAIn</h1>
          <div className="space-x-4">
            <a className="text-white">About us</a>
            <a className="text-white">Community</a>
            <WalletSelector />
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-customPurple font-archivo text-5xl font-extrabold text-shadow-custom text-stroke">
        MentChAIn
      </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          <span className="italic">MentChain</span> is an AI-powered career guidance platform designed to provide personalized career advice through advanced AI technology and tokenized interactions.
        </p>
        <Button size="lg" className="bg-purple-700 text-white">
          Get Started
        </Button>

        <section className="mt-32">
          <h3 className="text-4xl font-bold mb-12 drop-shadow-lg">What's Will You Get</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-100 text-gray-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">career guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>You will get direction regarding your desired career.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-100 text-gray-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">learning path</CardTitle>
              </CardHeader>
              <CardContent>
                <p>You will get a learning path to achieve your desired career.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-100 text-gray-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">community</CardTitle>
              </CardHeader>
              <CardContent>
                <p>You will get a learning path to achieve your desired career.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}