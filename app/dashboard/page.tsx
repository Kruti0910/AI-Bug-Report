"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Bug, Search, Filter, Eye, Calendar, User, AlertTriangle, CheckCircle, Clock } from 'lucide-react'
import Link from "next/link"

// Mock data for demonstration
const mockBugs = [
  {
    id: "BUG-001",
    title: "Login button not responding on the mobile",
    description: "The login button becomes unresponsive on mobile devices after multiple taps",
    category: "UI/Frontend",
    severity: "High",
    status: "Open",
    reporter: "john.doe@company.com",
    assignee: "jane.smith@company.com",
    createdAt: "2024-01-15",
    environment: "Production",
    confidence: 92
  },
  {
    id: "BUG-002",
    title: "API response timeout on user profile",
    description: "User profile API calls are timing out after 30 seconds of time",
    category: "Backend",
    severity: "Medium",
    status: "In Progress",
    reporter: "alice.johnson@company.com",
    assignee: "bob.wilson@company.com",
    createdAt: "2024-01-14",
    environment: "Staging",
    confidence: 88
  },
  {
    id: "BUG-003",
    title: "Dashboard loading performance issue",
    description: "Dashboard takes more than 10 seconds to load with large datasets",
    category: "Performance",
    severity: "Medium",
    status: "Resolved",
    reporter: "charlie.brown@company.com",
    assignee: "diana.prince@company.com",
    createdAt: "2024-01-13",
    environment: "Production",
    confidence: 95
  },
  {
    id: "BUG-004",
    title: "Form validation error messages",
    description: "Error messages are not displaying correctly for form validation",
    category: "UI/Frontend",
    severity: "Low",
    status: "Open",
    reporter: "eve.adams@company.com",
    assignee: null,
    createdAt: "2024-01-12",
    environment: "Development",
    confidence: 78
  }
]

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [filterSeverity, setFilterSeverity] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredBugs = mockBugs.filter(bug => {
    const matchesSearch = bug.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bug.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === "all" || bug.category === filterCategory
    const matchesSeverity = filterSeverity === "all" || bug.severity === filterSeverity
    const matchesStatus = filterStatus === "all" || bug.status === filterStatus
    
    return matchesSearch && matchesCategory && matchesSeverity && matchesStatus
  })

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High": return "bg-red-100 text-red-800 border-red-200"
      case "Medium": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Low": return "bg-green-100 text-green-800 border-green-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-blue-100 text-blue-800 border-blue-200"
      case "In Progress": return "bg-orange-100 text-orange-800 border-orange-200"
      case "Resolved": return "bg-green-100 text-green-800 border-green-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open": return <AlertTriangle className="h-4 w-4" />
      case "In Progress": return <Clock className="h-4 w-4" />
      case "Resolved": return <CheckCircle className="h-4 w-4" />
      default: return <Bug className="h-4 w-4" />
    }
  }

  const stats = {
    total: mockBugs.length,
    open: mockBugs.filter(bug => bug.status === "Open").length,
    inProgress: mockBugs.filter(bug => bug.status === "In Progress").length,
    resolved: mockBugs.filter(bug => bug.status === "Resolved").length
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Bug className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">BugTracker AI</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/report">
              <Button>
                <Bug className="mr-2 h-4 w-4" />
                Report Bug
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Bug Dashboard</h1>
          <p className="text-gray-600">Monitor and manage bug reports with AI-powered insights</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Bugs</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
                </div>
                <Bug className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Open</p>
                  <p className="text-3xl font-bold text-blue-600">{stats.open}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">In Progress</p>
                  <p className="text-3xl font-bold text-orange-600">{stats.inProgress}</p>
                </div>
                <Clock className="h-8 w-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Resolved</p>
                  <p className="text-3xl font-bold text-green-600">{stats.resolved}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search bugs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="UI/Frontend">UI/Frontend</SelectItem>
                  <SelectItem value="Backend">Backend</SelectItem>
                  <SelectItem value="Performance">Performance</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterSeverity} onValueChange={setFilterSeverity}>
                <SelectTrigger>
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severities</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Open">Open</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>

              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("")
                  setFilterCategory("all")
                  setFilterSeverity("all")
                  setFilterStatus("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Bug List */}
        <Card>
          <CardHeader>
            <CardTitle>Bug Reports ({filteredBugs.length})</CardTitle>
            <CardDescription>
              AI-categorized and prioritized bug reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Reporter</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>AI Confidence</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBugs.map((bug) => (
                    <TableRow key={bug.id}>
                      <TableCell className="font-mono text-sm">{bug.id}</TableCell>
                      <TableCell className="max-w-xs">
                        <div className="truncate font-medium">{bug.title}</div>
                        <div className="text-sm text-gray-500 truncate">{bug.description}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{bug.category}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getSeverityColor(bug.severity)}>
                          {bug.severity}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(bug.status)}>
                          <span className="flex items-center gap-1">
                            {getStatusIcon(bug.status)}
                            {bug.status}
                          </span>
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {bug.reporter.split('@')[0]}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {bug.createdAt}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <div className="w-12 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${bug.confidence}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-600">{bug.confidence}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
