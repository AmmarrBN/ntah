"use client"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-8 text-neon-pink"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-xl mb-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm a cyberpunk-inspired developer with a passion for creating futuristic and neon-lit web experiences. With a
          background in both front-end and back-end technologies, I strive to push the boundaries of what's possible in
          web development.
        </motion.p>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          My skills include React, Node.js, and cutting-edge web technologies that bring cyberpunk visions to life.
        </motion.p>
      </div>
    </section>
  )
}

