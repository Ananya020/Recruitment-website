"use client"

import type React from "react"

import { useState } from "react"
import { X, Anchor, Ship } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { createApplicant } from "@/lib/utils"

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
    subDomain: "",
    motivation: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => {
      const newData = { ...prev, [field]: value };
      
      // Clear subDomain if domain changes to non-technical
      if (field === "domain" && value !== "technical") {
        newData.subDomain = "";
      }
      
      return newData;
    });
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setErrorMessage(null);
  setSuccessMessage(null);
  setShowPopup(false);

  // Frontend validation
  if (formData.domain === "technical" && !formData.subDomain) {
    setErrorMessage("Please select a technical sub-domain.");
    setShowPopup(true);
    return;
  }

  setIsSubmitting(true);
  try {
    const result = await createApplicant(formData);
    setSuccessMessage("Application submitted successfully! 🏴‍☠️");
    setErrorMessage(null);
    setShowPopup(true);
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
      subDomain: "",
      motivation: "",
    });
    // Optionally close modal after a short delay
    setTimeout(() => {
      setSuccessMessage(null);
      setShowPopup(false);
      onClose();
    }, 2000);
  } catch (error: any) {
    let message = error instanceof Error ? error.message : "Unknown error";
    setErrorMessage(message);
    setSuccessMessage(null);
    setShowPopup(true);
  } finally {
    setIsSubmitting(false);
  }
};

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-black via-black to-black rounded-2xl border-4 border-yellow-400 shadow-2xl">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center rounded-2xl"
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

        {/* Recruitment Closed Message */}
        <div className="relative z-10 p-12 text-center">
          <div className="bg-black/30 rounded-xl p-8 border border-yellow-400/30">
            <Ship className="text-yellow-400 mx-auto mb-6" size={64} />
            <h3 className="text-4xl font-black text-yellow-400 mb-4">🏴‍☠️ RECRUITMENTS CLOSED! 🏴‍☠️</h3>
            <p className="text-xl text-white mb-6">
              Thank you for your interest in joining the CodeNex crew!
            </p>
            <p className="text-lg text-yellow-400 font-semibold mb-4">
              "The sea is vast, and there's always more to discover!" - Monkey D. Luffy
            </p>
            <p className="text-white/70">
              We have received an overwhelming response and our recruitment process is now complete. 
              Keep an eye out for future opportunities to join our adventure!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
