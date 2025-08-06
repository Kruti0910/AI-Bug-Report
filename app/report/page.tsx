"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Bug, ArrowLeft, Send, CheckCircle, Brain, Zap } from 'lucide-react'
import Link from "next/link"

export default function ReportBugPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    stepsToReproduce: "",
    expectedBehavior: "",
    actualBehavior: "",
    environment: "",
    priority: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [aiPrediction, setAiPrediction] = useState<{
    category: string
    severity: string
    confidence: number
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate AI processing
    setTimeout(() => {
      setAiPrediction({
        category: "UI/Frontend",
        severity: "Medium",
        confidence: 87
      })
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <nav className="border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Bug className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">BugTracker AI</span>
            </Link>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Bug Report Submitted!</h1>
            <p className="text-gray-600 mb-8">
              Your bug report has been successfully submitted and processed by our AI system.
            </p>

            {aiPrediction && (
              <Card className="mb-8 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-600" />
                    AI Analysis Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Category:</span>
                    <Badge variant="secondary">{aiPrediction.category}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Severity:</span>
                    <Badge className={
                      aiPrediction.severity === "High" ? "bg-red-100 text-red-800" :
                      aiPrediction.severity === "Medium" ? "bg-yellow-100 text-yellow-800" :
                      "bg-green-100 text-green-800"
                    }>
                      {aiPrediction.severity}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Confidence:</span>
                    <span className="text-sm text-gray-600">{aiPrediction.confidence}%</span>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="flex gap-4 justify-center">
              <Link href="/report">
                <Button variant="outline">Report Another Bug</Button>
              </Link>
              <Link href="/dashboard">
                <Button>View Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Bug className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">BugTracker AI</span>
          </Link>
          <Link href="/">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Report a Bug</h1>
            <p className="text-gray-600">
              Provide detailed information about the bug you encountered. Our AI will automatically categorize and prioritize it.
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bug className="h-5 w-5 text-blue-600" />
                Bug Report Form
              </CardTitle>
              <CardDescription>
                Fill out the form below with as much detail as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Bug Title *</Label>
                  <Input
                    id="title"
                    placeholder="Brief description of the bug"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the bug in detail..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="steps">Steps to Reproduce</Label>
                    <Textarea
                      id="steps"
                      placeholder="1. Go to...&#10;2. Click on...&#10;3. See error"
                      rows={3}
                      value={formData.stepsToReproduce}
                      onChange={(e) => handleInputChange("stepsToReproduce", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="environment">Environment</Label>
                    <Select onValueChange={(value) => handleInputChange("environment", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select environment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="production">Production</SelectItem>
                        <SelectItem value="staging">Staging</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="testing">Testing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expected">Expected Behavior</Label>
                    <Textarea
                      id="expected"
                      placeholder="What should have happened?"
                      rows={2}
                      value={formData.expectedBehavior}
                      onChange={(e) => handleInputChange("expectedBehavior", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="actual">Actual Behavior</Label>
                    <Textarea
                      id="actual"
                      placeholder="What actually happened?"
                      rows={2}
                      value={formData.actualBehavior}
                      onChange={(e) => handleInputChange("actualBehavior", e.target.value)}
                    />
                  </div>
                </div>

                <Alert>
                  <Brain className="h-4 w-4" />
                  <AlertDescription>
                    Our AI will automatically analyze your bug report to determine the category (UI, Backend, Performance) 
                    and severity level (Low, Medium, High) using advanced NLP models.
                  </AlertDescription>
                </Alert>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Zap className="mr-2 h-4 w-4 animate-spin" />
                      Processing with AI...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Bug Report
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
