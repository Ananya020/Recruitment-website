"use client"

import type React from "react"

import { useState } from "react"
import { X, Anchor, Ship } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface ApplicationFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function ApplicationForm({ isOpen, onClose }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    srmEmail: "",
    personalEmail: "",
    phoneNumber: "",
    yearOfStudy: "",
    course: "",
    specialization: "",
    regNo: "",
    domain: "",
    motivation: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('http://localhost:5000/api/applicants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit application')
      }

      const result = await response.json()
      console.log("Form submitted successfully:", result)
      alert("Application submitted successfully! Welcome aboard, future crew member! 🏴‍☠️")

      // Reset form
      setFormData({
        name: "",
        srmEmail: "",
        personalEmail: "",
        phoneNumber: "",
        yearOfStudy: "",
        course: "",
        specialization: "",
        regNo: "",
        domain: "",
        motivation: "",
      })
      
      onClose()
    } catch (error) {
      console.error('Error submitting application:', error)
      alert('Failed to submit application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 rounded-2xl border-4 border-yellow-400 shadow-2xl">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage: `url('/hero-background.png')`,
          }}
        />

        {/* Header */}
        <div className="relative z-10 p-6 border-b-2 border-yellow-400/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Ship className="text-yellow-400" size={32} />
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white">JOIN THE CREW</h2>
                <p className="text-yellow-400 font-bold">CodeNex Recruitment Application</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-yellow-400 transition-colors p-2 rounded-full hover:bg-white/10"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative z-10 p-6 space-y-6">
          {/* Personal Information Section */}
          <div className="bg-black/30 rounded-xl p-6 border border-yellow-400/30">
            <div className="flex items-center space-x-2 mb-4">
              <Anchor className="text-yellow-400" size={20} />
              <h3 className="text-xl font-bold text-yellow-400">PERSONAL INFORMATION</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-white font-semibold">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="mt-1 bg-white/10 border-yellow-400/50 text-white placeholder:text-gray-300 focus:border-yellow-400"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="phoneNumber" className="text-white font-semibold">
                  Phone Number *
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  className="mt-1 bg-white/10 border-yellow-400/50 text-white placeholder:text-gray-300 focus:border-yellow-400"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <Label htmlFor="srmEmail" className="text-white font-semibold">
                  SRM Email *
                </Label>
                <Input
                  id="srmEmail"
                  type="email"
                  required
                  value={formData.srmEmail}
                  onChange={(e) => handleInputChange("srmEmail", e.target.value)}
                  className="mt-1 bg-white/10 border-yellow-400/50 text-white placeholder:text-gray-300 focus:border-yellow-400"
                  placeholder="yourname@srmist.edu.in"
                />
              </div>

              <div>
                <Label htmlFor="personalEmail" className="text-white font-semibold">
                  Personal Email *
                </Label>
                <Input
                  id="personalEmail"
                  type="email"
                  required
                  value={formData.personalEmail}
                  onChange={(e) => handleInputChange("personalEmail", e.target.value)}
                  className="mt-1 bg-white/10 border-yellow-400/50 text-white placeholder:text-gray-300 focus:border-yellow-400"
                  placeholder="your.email@gmail.com"
                />
              </div>
            </div>
          </div>

          {/* Academic Information Section */}
          <div className="bg-black/30 rounded-xl p-6 border border-yellow-400/30">
            <div className="flex items-center space-x-2 mb-4">
              <Anchor className="text-yellow-400" size={20} />
              <h3 className="text-xl font-bold text-yellow-400">ACADEMIC INFORMATION</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="regNo" className="text-white font-semibold">
                  Registration Number *
                </Label>
                <Input
                  id="regNo"
                  type="text"
                  required
                  value={formData.regNo}
                  onChange={(e) => handleInputChange("regNo", e.target.value)}
                  className="mt-1 bg-white/10 border-yellow-400/50 text-white placeholder:text-gray-300 focus:border-yellow-400"
                  placeholder="RA2211003XXXXX"
                />
              </div>

              <div>
                <Label htmlFor="yearOfStudy" className="text-white font-semibold">
                  Year of Study *
                </Label>
                <Select value={formData.yearOfStudy} onValueChange={(value) => handleInputChange("yearOfStudy", value)}>
                  <SelectTrigger className="mt-1 bg-white/10 border-yellow-400/50 text-white focus:border-yellow-400">
                    <SelectValue placeholder="Select your year" />
                  </SelectTrigger>
                  <SelectContent className="bg-blue-900 border-yellow-400">
                    <SelectItem value="1st" className="text-white hover:bg-yellow-400/20">
                      1st Year
                    </SelectItem>
                    <SelectItem value="2nd" className="text-white hover:bg-yellow-400/20">
                      2nd Year
                    </SelectItem>
                    <SelectItem value="3rd" className="text-white hover:bg-yellow-400/20">
                      3rd Year
                    </SelectItem>
                    <SelectItem value="4th" className="text-white hover:bg-yellow-400/20">
                      4th Year
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="course" className="text-white font-semibold">
                  Course *
                </Label>
                <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                  <SelectTrigger className="mt-1 bg-white/10 border-yellow-400/50 text-white focus:border-yellow-400">
                    <SelectValue placeholder="Select your course" />
                  </SelectTrigger>
                  <SelectContent className="bg-blue-900 border-yellow-400">
                    <SelectItem value="btech" className="text-white hover:bg-yellow-400/20">
                      B.Tech
                    </SelectItem>
                    <SelectItem value="bca" className="text-white hover:bg-yellow-400/20">
                      BCA
                    </SelectItem>
                    <SelectItem value="mtech" className="text-white hover:bg-yellow-400/20">
                      M.Tech
                    </SelectItem>
                    <SelectItem value="mca" className="text-white hover:bg-yellow-400/20">
                      MCA
                    </SelectItem>
                    <SelectItem value="other" className="text-white hover:bg-yellow-400/20">
                      Other
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="specialization" className="text-white font-semibold">
                  Specialization *
                </Label>
                <Input
                  id="specialization"
                  type="text"
                  required
                  value={formData.specialization}
                  onChange={(e) => handleInputChange("specialization", e.target.value)}
                  className="mt-1 bg-white/10 border-yellow-400/50 text-white placeholder:text-gray-300 focus:border-yellow-400"
                  placeholder="e.g., Computer Science, IT, etc."
                />
              </div>
            </div>
          </div>

          {/* Domain Selection Section */}
          <div className="bg-black/30 rounded-xl p-6 border border-yellow-400/30">
            <div className="flex items-center space-x-2 mb-4">
              <Anchor className="text-yellow-400" size={20} />
              <h3 className="text-xl font-bold text-yellow-400">CHOOSE YOUR ADVENTURE</h3>
            </div>

            <div>
              <Label htmlFor="domain" className="text-white font-semibold">
                Preferred Domain *
              </Label>
              <Select value={formData.domain} onValueChange={(value) => handleInputChange("domain", value)}>
                <SelectTrigger className="mt-1 bg-white/10 border-yellow-400/50 text-white focus:border-yellow-400">
                  <SelectValue placeholder="Select your domain" />
                </SelectTrigger>
                <SelectContent className="bg-blue-900 border-yellow-400">
                  <SelectItem value="technical" className="text-white hover:bg-yellow-400/20">
                    <div className="flex items-center space-x-2">
                      <span>⚙️</span>
                      <span>TECHNICAL - Development, Programming, AI</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="creatives" className="text-white hover:bg-yellow-400/20">
                    <div className="flex items-center space-x-2">
                      <span>🎨</span>
                      <span>CREATIVES - Design, UI/UX, Graphics</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="non-tech" className="text-white hover:bg-yellow-400/20">
                    <div className="flex items-center space-x-2">
                      <span>📋</span>
                      <span>NON-TECH - Management, Marketing, Content</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-4">
              <Label htmlFor="motivation" className="text-white font-semibold">
                Why do you want to join CodeNex? *
              </Label>
              <Textarea
                id="motivation"
                required
                value={formData.motivation}
                onChange={(e) => handleInputChange("motivation", e.target.value)}
                className="mt-1 bg-white/10 border-yellow-400/50 text-white placeholder:text-gray-300 focus:border-yellow-400 min-h-[100px]"
                placeholder="Tell us about your passion for technology and what you hope to achieve with CodeNex..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-yellow-400 text-black px-12 py-4 text-xl font-black rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  <span>SETTING SAIL...</span>
                </div>
              ) : (
                "🏴‍☠️ JOIN THE CREW!"
              )}
            </Button>
          </div>

          {/* Footer Message */}
          <div className="text-center pt-4">
            <p className="text-yellow-400 font-semibold">
              "The sea is vast, and there's always more to discover!" - Monkey D. Luffy
            </p>
            <p className="text-white/70 text-sm mt-2">
              Your application will be reviewed by our crew. We'll contact you soon!
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
