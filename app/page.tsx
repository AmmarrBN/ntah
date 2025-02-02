"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import TextScramble from "@/components/TextScramble"
import FadeInWords from "@/components/FadeInWords"
import { useEffect, useState, useRef } from "react"
import { ArrowDown, Github, Twitter, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleScrollClick = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  if (!mounted) return null

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center">
        {/* HUD Elements */}
        <div className="fixed top-4 left-4 text-xs font-mono opacity-50">
          <div className="mb-1">SYS.STATUS: ONLINE</div>
          <div>LOC: 127.0.0.1</div>
        </div>

        <div className="fixed top-4 right-4 text-xs font-mono opacity-50">
          <div className="mb-1">{new Date().toLocaleTimeString()}</div>
          <div>SIGNAL: STRONG</div>
        </div>

        {/* Main Content */}
        <motion.div style={{ opacity }} className="text-center z-10 px-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mb-8">
            <div className="mb-8">
              <Image
                src="/placeholder.svg"
                alt="Ammar Burhanuddin Nafis"
                width={200}
                height={200}
                className="rounded-full mx-auto border-4 border-cyan-500"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <TextScramble text="Ammar Burhanuddin Nafis" color="#00ffff" />
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              <TextScramble text="Backend Developer" color="#ff00ff" delay={1000} />
            </p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
              <ArrowDown className="mx-auto w-6 h-6 animate-bounce cursor-pointer" onClick={handleScrollClick} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Grid Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-10">
          <div className="w-full h-full grid grid-cols-12 grid-rows-12">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-gray-700"></div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={scrollRef} className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="border-b-2 border-cyan-500 pb-2">About Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <FadeInWords text="I'm a passionate backend developer with expertise in building robust and scalable server-side applications." />
              <FadeInWords text="With a focus on creating efficient and secure APIs, I bring ideas to life through clean code and innovative solutions." />
              <FadeInWords text="My journey in tech started several years ago, and since then, I've worked with various technologies and frameworks to deliver high-quality software solutions." />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "AWS"].map((skill) => (
                <motion.div
                  key={skill}
                  className="p-4 border border-gray-700 rounded-lg text-center hover:border-cyan-500 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="border-b-2 border-pink-500 pb-2">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                  <p className="text-gray-400 mb-4">A brief description of the project and the technologies used.</p>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-gray-700 rounded text-sm">Node.js</span>
                    <span className="px-2 py-1 bg-gray-700 rounded text-sm">Express</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="border-b-2 border-cyan-500 pb-2">Contact</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center space-x-8 mb-12">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <Github className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <Twitter className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <Mail className="w-8 h-8" />
              </motion.a>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ammar Burhanuddin Nafis. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

