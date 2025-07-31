import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

interface AdvancedScrollProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'flip' | 'blur'
  delay?: number
  duration?: number
  stagger?: number
}

export function AdvancedScroll({ 
  children, 
  className = '', 
  animation = 'fadeUp',
  delay = 0,
  duration = 0.8,
  stagger = 0
}: AdvancedScrollProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const animations = {
    fadeUp: {
      initial: { y: 60, opacity: 0 },
      animate: { y: 0, opacity: 1 }
    },
    fadeLeft: {
      initial: { x: -60, opacity: 0 },
      animate: { x: 0, opacity: 1 }
    },
    fadeRight: {
      initial: { x: 60, opacity: 0 },
      animate: { x: 0, opacity: 1 }
    },
    scale: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 }
    },
    flip: {
      initial: { rotateX: 90, opacity: 0 },
      animate: { rotateX: 0, opacity: 1 }
    },
    blur: {
      initial: { filter: 'blur(20px)', opacity: 0 },
      animate: { filter: 'blur(0px)', opacity: 1 }
    }
  }

  const selectedAnimation = animations[animation]

  return (
    <motion.div
      ref={ref}
      initial={selectedAnimation.initial}
      animate={isInView ? selectedAnimation.animate : selectedAnimation.initial}
      transition={{
        duration,
        delay: delay + stagger,
        ease: [0.25, 0.25, 0, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function NumberCounter({ 
  end, 
  duration = 2, 
  prefix = '', 
  suffix = '',
  className = ''
}: {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useSpring(count, { duration: duration * 1000 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      count.set(end)
    }
  }, [isInView, end, count])

  useEffect(() => {
    return rounded.on('change', (latest) => {
      setDisplayValue(Math.round(latest))
    })
  }, [rounded])

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}

export function ParallaxElement({ 
  children, 
  speed = 0.5,
  className = ''
}: {
  children: React.ReactNode
  speed?: number
  className?: string
}) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div 
      className={className}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  )
}