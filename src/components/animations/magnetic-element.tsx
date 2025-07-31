import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface MagneticElementProps {
  children: React.ReactNode
  className?: string
  strength?: number
  restoreSpeed?: number
}

export function MagneticElement({ 
  children, 
  className = '',
  strength = 0.3,
  restoreSpeed = 0.15
}: MagneticElementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength
    
    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 30,
        restSpeed: restoreSpeed 
      }}
    >
      {children}
    </motion.div>
  )
}