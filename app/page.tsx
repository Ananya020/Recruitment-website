"use client"

import { useState, useEffect } from "react"
import { Menu, X, Instagram, Twitter, MessageCircle, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RecruitmentPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date("2025-08-29T23:59:59").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-md rounded-full px-8 py-4 border border-gray-700/50 w-[90%] max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-cyan-400">C</span>
            <span className="text-white">odeNex</span>
          </div>

          <div className="hidden md:flex space-x-12">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-cyan-400 transition-colors font-medium text-lg"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("domains")}
              className="text-white hover:text-cyan-400 transition-colors font-medium text-lg"
            >
              Domains
            </button>
            <button
              onClick={() => scrollToSection("timeline")}
              className="text-white hover:text-cyan-400 transition-colors font-medium text-lg"
            >
              Timeline
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-cyan-400 transition-colors font-medium text-lg"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white hover:text-cyan-400 transition-colors font-medium text-lg"
            >
              Register Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-md rounded-2xl p-4 border border-gray-700/50">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-cyan-400 transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("domains")}
                className="text-white hover:text-cyan-400 transition-colors font-medium text-left"
              >
                Domains
              </button>
              <button
                onClick={() => scrollToSection("timeline")}
                className="text-white hover:text-cyan-400 transition-colors font-medium text-left"
              >
                Timeline
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-cyan-400 transition-colors font-medium text-left"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("hero")}
                className="text-white hover:text-cyan-400 transition-colors font-medium text-center"
              >
                Register Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/hero-background.png')`,
          }}
        />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-8 text-black tracking-wider">
            RECRUITMENT
          </h1>

          <div className="mb-12">
            <p className="text-3xl md:text-4xl mb-6 text-black font-bold tracking-wide">CLOSES IN</p>
            <div className="flex justify-center space-x-6 md:space-x-8 text-black">
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-black">{String(timeLeft.days).padStart(2, "0")}D</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-black">{String(timeLeft.hours).padStart(2, "0")}H</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-black">{String(timeLeft.minutes).padStart(2, "0")}M</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-black">{String(timeLeft.seconds).padStart(2, "0")}S</div>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-black text-white px-12 py-6 text-2xl font-bold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            APPLY NOW
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/about-background.png')`,
          }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-12 text-black font-bold">ABOUT CODENEX</h2>
            <p className="text-xl md:text-2xl leading-relaxed text-black/90 mb-8 font-bold">
              Welcome to CodeNex Club, where innovation meets adventure! Just like the Straw Hat Pirates, we're a crew
              of passionate developers, designers, and tech enthusiasts sailing through the digital seas of SRMIST.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed text-black/90 font-bold">
              Our mission is to explore new technologies, create amazing projects, and build a community where every
              member can achieve their dreams in the world of technology. Join our crew and embark on an epic journey!
            </p>
            <img
              src="/standing-Luffy.png"
              alt="Standing Luffy"
              className="mx-auto mt-10 w-64 md:w-80 lg:w-96 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Domains Section */}
<section
  id="domains"
  className="relative min-h-screen flex items-center justify-center overflow-hidden"
>
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: `url('/domains-background.png')`,
    }}
  />

  <div className="relative z-10 container mx-auto px-4">
    <h2 className="text-5xl md:text-7xl font-black text-center mb-20 text-white tracking-wider">
      OUR DOMAINS
    </h2>

    <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto">
      {[
        {
          title: "CREATIVES",
          desc: "Designing posters, crafting stories, and bringing the Straw Hat spirit to life!",
          position: "left",
        },
        {
          title: "TECHNICAL",
          desc: "Building websites, coding adventures, and keeping our ship’s systems running.",
          position: "center",
        },
        {
          title: "NON-TECH",
          desc: "Managing events, coordinating crews, and ensuring smooth sailing.",
          position: "right",
        },
      ].map((domain, index) => {
        const [flipped, setFlipped] = useState(false);

        return (
          <div
            key={index}
            className={`relative cursor-pointer perspective`}
            onClick={() => setFlipped(!flipped)}
          >
            <div
              className={`relative w-72 h-80 md:w-80 md:h-96 transition-transform duration-700 transform-style-preserve-3d ${
                domain.position === "center"
                  ? "md:w-96 md:h-[28rem]"
                  : ""
              } ${flipped ? "rotate-y-180" : ""}`}
            >
              {/* Front Side */}
              <div
                className="absolute inset-0 rounded-lg shadow-2xl bg-cover bg-yellow-100/80 border border-yellow-300 backface-hidden"
                style={{
                  backgroundImage: `url('/vintage-paper-texture.png')`,
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute inset-0 bg-yellow-100/80 rounded-lg" />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <h3 className="text-3xl md:text-4xl font-black text-center text-black tracking-wide">
                    {domain.title}
                  </h3>
                </div>
              </div>

              {/* Back Side */}
              <div
                className="absolute inset-0 rounded-lg shadow-2xl bg-yellow-200 border border-yellow-400 p-6 text-black flex items-center justify-center text-center transform rotate-y-180 backface-hidden"
                style={{
                  backgroundImage: `url('/vintage-paper-texture.png')`,
                  backgroundSize: "cover",
                }}
              >
                <p className="text-lg font-semibold">{domain.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>

  <style jsx>{`
    .perspective {
      perspective: 1000px;
    }
    .transform-style-preserve-3d {
      transform-style: preserve-3d;
    }
    .backface-hidden {
      backface-visibility: hidden;
    }
    .rotate-y-180 {
      transform: rotateY(180deg);
    }
  `}</style>
</section>


      
      {/* Timeline Section */}
<section
  id="timeline"
  className="relative min-h-screen flex items-center justify-center overflow-hidden"
>
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: `url('/timeline-background.png')`,
    }}
  />

  <div className="relative z-10 container mx-auto px-4">
    <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-white">
      RECRUITMENT PROCESS TIMELINE
    </h2>

    <div className="relative max-w-7xl mx-auto">
      {/* Timeline Path */}
      <div className="relative">
        

        {/* Timeline Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
          {[
            { title: "Application starts", date: "19.08.25", desc: "Registration opens", position: "top" },
            { title: "Application close", date: "29.08.25", desc: "Last day to apply", position: "bottom" },
            { title: "Task Assignment", date: "01.09.25", desc: "Tasks distributed", position: "top" },
            { title: "Task Submission", date: "06.09.25", desc: "Submit your work", position: "bottom" },
            { title: "Interview", date: "08.09.25", desc: "Face-to-face round", position: "top" },
            { title: "Result", date: "10.09.25", desc: "Final announcement", position: "bottom" },
          ].map((milestone, index) => (
            <div
              key={index}
              className={`relative group ${milestone.position === "bottom" ? "lg:mt-24" : ""}`}
            >
              {/* Circle */}
              <div className="bg-black/90 border-4 border-yellow-400 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                <span className="text-yellow-400 font-bold text-xl">{index + 1}</span>
                {/* Yellow indicator */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black text-xs font-bold">!</span>
                </div>
              </div>

              {/* Text */}
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2 text-white">{milestone.title}</h3>
                <p className="text-2xl font-black mb-2 text-white">{milestone.date}</p>
                <p className="text-sm text-gray-300">{milestone.desc}</p>
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/90 text-white p-3 rounded-lg text-sm whitespace-nowrap border border-yellow-400">
                  {milestone.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/contact-background.png')`,
          }}
        />

        {/* Large background text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-[8rem] md:text-[12rem] lg:text-[20rem] font-black text-white/20 select-none tracking-wider">
            CODENEX
          </h2>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-yellow-400 tracking-wider">CONNECT WITH US</h2>

          <div className="flex justify-center space-x-12 md:space-x-16 mb-20">
            {[
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: MessageCircle, href: "#", label: "WhatsApp" },
              { icon: Mail, href: "#", label: "Email" },
              { icon: Phone, href: "#", label: "Phone" },
            ].map((social, index) => (
              <a key={index} href={social.href} className="group relative" aria-label={social.label}>
                <div className="text-white p-6 rounded-full hover:text-yellow-400 transition-all duration-300 transform group-hover:scale-125">
                  <social.icon size={48} strokeWidth={1.5} />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          <footer className="text-white text-xl font-bold">@recruitment'25</footer>
        </div>
      </section>
    </div>
  )
}