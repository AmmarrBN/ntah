"use client"

import { motion } from "framer-motion"

interface FadeInWordsProps {
  text: string
}

export default function FadeInWords({ text }: FadeInWordsProps) {
  const words = text.split(" ")

  return (
    <div>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

