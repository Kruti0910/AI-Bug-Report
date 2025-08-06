import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bug, Brain, GitBranch, Shield, Zap, Users } from 'lucide-react'
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bug className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">BugTracker AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/report">
              <Button variant="outline">Report Bug</Button>
            </Link>
            <Link href="/dashboard">
              <Button>Admin Dashboard</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            AI-Powered Bug Management
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Intelligent Bug Reporting
            <span className="text-blue-600"> Made Simple</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Submit bug reports and let our AI automatically categorize, prioritize, and route them to the right team. 
            Powered by advanced NLP and machine learning models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/report">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Bug className="mr-2 h-5 w-5" />
                Report a Bug
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline">
                <Shield className="mr-2 h-5 w-5" />
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform streamlines bug reporting and management with cutting-edge technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Brain className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>AI Classification</CardTitle>
              <CardDescription>
                Automatically categorize bugs by type (UI, Backend, Performance) using advanced NLP models
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Zap className="h-12 w-12 text-orange-600 mb-4" />
              <CardTitle>Smart Prioritization</CardTitle>
              <CardDescription>
                ML algorithms analyze bug severity and assign priority levels (Low, Medium, High) automatically
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <GitBranch className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>CI/CD Integration</CardTitle>
              <CardDescription>
                Seamless integration with Jenkins, Docker, and Git for automated testing and deployment
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-300">Classification Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">3x</div>
              <div className="text-gray-300">Faster Resolution</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Automated Processing</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-gray-300">CI/CD Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Bug Management?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join teams already using AI to streamline their development workflow
          </p>
          <Link href="/report">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bug className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-semibold text-gray-900">BugTracker AI</span>
          </div>
          <p className="text-gray-600">
            AI-Powered Bug Reporting Platform with Full CI/CD Integration
          </p>
        </div>
      </footer>
    </div>
  )
}
