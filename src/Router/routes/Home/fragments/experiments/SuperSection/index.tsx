import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function ({ children, delay = 0, className }: any) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<any>(null)

  const sectionVariants = {
    hidden: {
      opacity: 0,
      x: -500,
      y: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: delay,
      },
    },
  }

  window.onscroll

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(([entry]) => {
      console.log(entry)
      if (entry.isIntersecting) {
        setIsVisible(true)
        // sectionObserver.disconnect()
      } else {
        setIsVisible(false)
      }
    }, {})

    sectionObserver.observe(sectionRef.current)

    return () => {
      sectionObserver.disconnect()
    }
  }, [])

  return (
    <motion.section
      className={`section ${isVisible ? "section-visible" : ""} ${className}`}
      variants={sectionVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      ref={sectionRef}
    >
      {children}
    </motion.section>
  )
}
