"use client"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-8 text-neon-pink"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.form
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input type="text" id="name" className="w-full p-2 bg-gray-700 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input type="email" id="email" className="w-full p-2 bg-gray-700 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea id="message" rows={4} className="w-full p-2 bg-gray-700 rounded"></textarea>
          </div>
          <button
            type="submit"
            className="bg-neon-blue text-gray-900 px-6 py-3 rounded-full hover:bg-neon-pink transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}

