"use client"
import { motion } from "framer-motion"
import useRandomString from "../hooks/useRandomString"

export default function Hero() {
  const randomString = useRandomString(5)

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <motion.h1
          className="text-6xl font-bold mb-4 text-neon-blue"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to My Cyberpunk Portfolio
        </motion.h1>
        <motion.p
          className="text-2xl mb-8 text-neon-pink"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {randomString}
        </motion.p>
        <motion.a
          href="#about"
          className="bg-neon-blue text-gray-900 px-6 py-3 rounded-full hover:bg-neon-pink transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore
        </motion.a>
      </div>
    </section>
  )
}

