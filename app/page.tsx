"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, Instagram, Twitter, MessageCircle, Mail, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

const ApplicationForm = dynamic(() => import("./components/application-form"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="relative z-10 bg-gradient-to-r from-blue-900 to-purple-900 text-white px-8 py-6 rounded-xl border-2 border-yellow-400 shadow-2xl">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-lg font-bold">Setting sail...</span>
        </div>
      </div>
    </div>
  ),
})

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  )
}

// Enhanced Domain Card with more animations
function DomainCard({
  title,
  desc,
  position,
  icon,
}: {
  title: string
  desc: string
  position: "left" | "center" | "right"
  icon: string
}) {
  const [flipped, setFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative cursor-pointer group`}
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative transition-all duration-700 transform-gpu ${
          position === "center" ? "w-80 h-96 md:w-96 md:h-[28rem]" : "w-72 h-80 md:w-80 md:h-96"
        } ${isHovered ? "scale-105 rotate-2" : ""}`}
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : undefined,
        }}
      >
        {/* Glow effect */}
        <div
          className={`absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-xl transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />

        {/* Front Side */}
        <div
          className="absolute inset-0 rounded-lg shadow-2xl bg-cover border-2 border-yellow-300 overflow-hidden"
          style={{
            backgroundImage: `url('/vintage-paper-texture.png')`,
            backgroundSize: "cover",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/90 to-orange-100/90 rounded-lg" />

          {/* Animated border */}
          <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-border animate-pulse" />
          <div className="absolute inset-[2px] rounded-lg bg-gradient-to-br from-yellow-100/90 to-orange-100/90" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
            <div className="text-6xl mb-4 animate-bounce">{icon}</div>
            <h3 className="text-3xl md:text-4xl font-black text-center text-black tracking-wide drop-shadow-lg">
              {title}
            </h3>
            <div className="mt-4 text-sm text-black/70 font-semibold">Click to explore</div>
          </div>

          {/* Sparkle effects */}
          <div className="absolute top-4 right-4">
            <Sparkles className="text-yellow-500 animate-pulse" size={20} />
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 rounded-lg shadow-2xl border-2 border-yellow-400 p-6 text-black flex items-center justify-center text-center overflow-hidden"
          style={{
            backgroundImage: `url('/vintage-paper-texture.png')`,
            backgroundSize: "cover",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/90 to-yellow-100/90 rounded-lg" />
          <div className="relative z-10">
            <div className="text-4xl mb-4">{icon}</div>
            <p className="text-lg font-bold leading-relaxed">{desc}</p>
            <div className="mt-4 text-sm text-black/70 font-semibold">Click to return</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Timeline milestone component with enhanced animations
function TimelineMilestone({
  milestone,
  index,
  isVisible,
}: {
  milestone: any
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`relative group transition-all duration-700 ${
        milestone.position === "bottom" ? "lg:mt-24" : ""
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Connecting line for mobile */}
      {index < 5 && (
        <div className="absolute top-12 left-1/2 w-1 h-16 bg-gradient-to-b from-yellow-400 to-transparent lg:hidden" />
      )}

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Circle */}
      <div className="bg-gradient-to-br from-gray-900 to-black border-4 border-yellow-400 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative shadow-2xl">
        <span className="text-yellow-400 font-bold text-xl">{index + 1}</span>

        {/* Animated ring */}
        <div className="absolute inset-0 rounded-full border-2 border-yellow-400/50 animate-ping" />

        {/* Yellow indicator */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
          <span className="text-black text-xs font-bold">!</span>
        </div>
      </div>

      {/* Text */}
      <div className="text-center">
        <h3 className="font-bold text-lg mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
          {milestone.title}
        </h3>
        <p className="text-2xl font-black mb-2 text-yellow-400 group-hover:scale-110 transition-transform duration-300">
          {milestone.date}
        </p>
        <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{milestone.desc}</p>
      </div>

      {/* Enhanced Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="bg-gradient-to-r from-gray-900 to-black text-white p-4 rounded-xl text-sm whitespace-nowrap border-2 border-yellow-400 shadow-2xl">
          <div className="font-bold text-yellow-400 mb-1">{milestone.title}</div>
          <div>{milestone.desc}</div>
          {/* Arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-yellow-400" />
        </div>
      </div>
    </div>
  )
}

export default function RecruitmentPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [visibleMilestones, setVisibleMilestones] = useState<boolean[]>(new Array(6).fill(false))
  const timelineRef = useRef<HTMLDivElement>(null)

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Timeline visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleMilestones((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    const milestoneElements = document.querySelectorAll("[data-milestone]")
    milestoneElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

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

  // Preload the form component
  useEffect(() => {
    import("./components/application-form").catch(() => {})
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
      {/* Enhanced Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-md rounded-full px-8 py-4 border-2 border-cyan-400/50 w-[90%] max-w-6xl shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-cyan-400 drop-shadow-lg">C</span>
            <span className="text-white drop-shadow-lg">odeNex</span>
          </div>

          <div className="hidden md:flex space-x-12">
            {["About", "Domains", "Timeline", "Contact", "Register Now"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === "Register Now" ? "hero" : item.toLowerCase())}
                className="text-white hover:text-cyan-400 transition-all duration-300 font-medium text-lg relative group"
              >
                {item}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Enhanced Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-md rounded-2xl p-6 border-2 border-cyan-400/30 shadow-2xl">
            <div className="flex flex-col space-y-4">
              {["About", "Domains", "Timeline", "Contact", "Register Now"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item === "Register Now" ? "hero" : item.toLowerCase())}
                  className="text-white hover:text-cyan-400 transition-colors font-medium text-left py-2 px-4 rounded-lg hover:bg-white/10"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/hero-background.png')`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />

        <FloatingParticles />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-8 text-black tracking-wider drop-shadow-2xl animate-pulse">
            RECRUITMENT
          </h1>

          <div className="mb-12">
            <p className="text-3xl md:text-4xl mb-6 text-yellow-400 font-bold tracking-wide drop-shadow-lg animate-bounce">
              CLOSES IN
            </p>
            <div className="flex justify-center space-x-6 md:space-x-8 text-black">
              {[
                { value: timeLeft.days, label: "D" },
                { value: timeLeft.hours, label: "H" },
                { value: timeLeft.minutes, label: "M" },
                { value: timeLeft.seconds, label: "S" },
              ].map((time, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl md:text-6xl font-black bg-gradient-to-b from-black to-gray-800 bg-clip-text text-transparent drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {String(time.value).padStart(2, "0")}
                    {time.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            size="lg"
            onClick={() => setIsFormOpen(true)}
            className="bg-gradient-to-r from-black to-gray-800 text-white px-12 py-6 text-2xl font-bold rounded-full hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-yellow-400/50 hover:border-yellow-400"
          >
            <span className="flex items-center space-x-2">
              <span>APPLY NOW</span>
              <Sparkles className="animate-pulse" size={24} />
            </span>
          </Button>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/about-background.png')`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-12 text-white drop-shadow-2xl">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                ABOUT CODENEX
              </span>
            </h2>

            <div className="space-y-8">
              <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-semibold drop-shadow-lg bg-black/20 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                Welcome to CodeNex Club, where innovation meets adventure! Just like the Straw Hat Pirates, we're a crew
                of passionate developers, designers, and tech enthusiasts sailing through the digital seas of SRMIST.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-semibold drop-shadow-lg bg-black/20 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                Our mission is to explore new technologies, create amazing projects, and build a community where every
                member can achieve their dreams in the world of technology. Join our crew and embark on an epic journey!
              </p>
            </div>

            <div className="mt-12 relative">
              <img
                src="/standing-Luffy.png"
                alt="Standing Luffy"
                className="mx-auto w-64 md:w-80 lg:w-96 object-contain animate-float drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Domains Section */}
      <section id="domains" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/domains-background.png')`,
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-20 tracking-wider">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl">
              OUR DOMAINS
            </span>
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "CREATIVES",
                desc: "Designing posters, crafting stories, and bringing the Straw Hat spirit to life through art and creativity!",
                position: "left" as const,
                icon: "🎨",
              },
              {
                title: "TECHNICAL",
                desc: "Building websites, coding adventures, and keeping our ship's systems running with cutting-edge technology!",
                position: "center" as const,
                icon: "⚙️",
              },
              {
                title: "NON-TECH",
                desc: "Managing events, coordinating crews, and ensuring smooth sailing through leadership and organization!",
                position: "right" as const,
                icon: "📋",
              },
            ].map((domain, index) => (
              <DomainCard
                key={index}
                title={domain.title}
                desc={domain.desc}
                position={domain.position}
                icon={domain.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section id="timeline" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/timeline-background.png')`,
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />

        <div className="relative z-10 container mx-auto px-4" ref={timelineRef}>
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16">
            <span className="bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent drop-shadow-2xl">
              RECRUITMENT PROCESS TIMELINE
            </span>
          </h2>

          <div className="relative max-w-7xl mx-auto">
            {/* Enhanced Timeline Path */}
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
                  <div key={index} data-milestone data-index={index}>
                    <TimelineMilestone milestone={milestone} index={index} isVisible={visibleMilestones[index]} />
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
            ].map((social, index) => {
              const Icon = social.icon
              return (
                <a key={index} href={social.href} className="group relative" aria-label={social.label}>
                  <div className="text-white p-6 rounded-full hover:text-yellow-400 transition-all duration-300 transform group-hover:scale-125">
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    {social.label}
                  </span>
                </a>
              )
            })}
          </div>

          <footer className="text-white text-xl font-bold">@recruitment'25</footer>
        </div>
      </section>

      <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  )
}
