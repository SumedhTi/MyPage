import { useState, useEffect } from 'react'

interface ScrambleTextProps {
  text: string
  className?: string
  trigger?: boolean
  speed?: number
}

export function ScrambleText({ text, className = '', trigger = true, speed = 50 }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(false)

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

  useEffect(() => {
    if (!trigger) return

    setIsScrambling(true)
    let iteration = 0
    
    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index]
            }
            if (char === ' ') return ' '
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join('')
      )

      if (iteration >= text.length) {
        clearInterval(interval)
        setIsScrambling(false)
      }

      iteration += 1/3
    }, speed)

    return () => clearInterval(interval)
  }, [text, trigger, speed])

  return (
    <span className={`${className} ${isScrambling ? 'text-glow' : ''}`}>
      {displayText}
    </span>
  )
}