"use client"

import { useEffect, useState } from "react"

interface TextScrambleProps {
  text: string
  delay?: number
  color?: string
}

export default function TextScramble({ text, delay = 800, color = "cyan" }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("")
  const chars = "!<>-_\\/[]{}—=+*^?#________"

  useEffect(() => {
    let iteration = 0
    const finalText = text
    let timeout: NodeJS.Timeout

    const scramble = () => {
      if (iteration >= finalText.length) {
        return
      }

      let newText = ""
      for (let i = 0; i < finalText.length; i++) {
        if (i < iteration) {
          newText += finalText[i]
        } else if (i === iteration) {
          newText += chars[Math.floor(Math.random() * chars.length)]
        } else {
          newText += chars[Math.floor(Math.random() * chars.length)]
        }
      }

      setDisplayText(newText)
      iteration++

      timeout = setTimeout(scramble, delay / text.length)
    }

    scramble()
    return () => clearTimeout(timeout)
  }, [text, delay])

  return (
    <span
      className={`font-mono tracking-wider`}
      style={{
        textShadow: `0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color}`,
        color: "white",
      }}
    >
      {displayText}
    </span>
  )
}

