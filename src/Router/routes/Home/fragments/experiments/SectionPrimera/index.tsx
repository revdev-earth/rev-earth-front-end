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

  useEffect(() => {
    // const sectionObserver = new IntersectionObserver(([entry]) => {
    //   if (entry.isIntersecting) {
    //     setIsVisible(true)
    //     sectionObserver.disconnect()
    //   }
    // }, {})

    // sectionObserver.observe(sectionRef.current)

    // Agregar un manejador de eventos de desplazamiento a la sección
    const handleScroll = () => {
      const sectionHeight = sectionRef.current.clientHeight
      const scrollPosition = sectionRef.current.scrollTop
      const scrollPercent = (scrollPosition / sectionHeight) * 100

      let message = ""
      if (scrollPosition <= 0) {
        message = "👆🏻 You're at the top of the section!"
      } else if (scrollPercent >= 50 && scrollPercent < 100) {
        message = "🤔 You're at the middle of the section!"
      } else if (
        scrollPosition + sectionRef.current.offsetHeight >=
        sectionHeight
      ) {
        message = "👇🏻 You've reached the bottom of the section!"
      }

      console.log(message)
    }

    sectionRef.current.addEventListener("scroll", handleScroll)

    return () => {
      // sectionObserver.disconnect()
      // Eliminar el manejador de eventos de desplazamiento cuando el componente se desmonta
      sectionRef.current.removeEventListener("scroll", handleScroll)
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
