import { useState, useEffect } from "react"

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

export default function useRandomString(length: number) {
  const [randomString, setRandomString] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      let result = ""
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      }
      setRandomString(result)
    }, 100)

    return () => clearInterval(interval)
  }, [length])

  return randomString
}

