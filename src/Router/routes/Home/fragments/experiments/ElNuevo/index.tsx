import { useCallback, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function () {
  const ref = useRef<HTMLDivElement>(null)
  const [x, setX] = useState(-window.innerWidth)

  const track = useCallback(() => {
    const current = ref.current
    if (!current) return

    const scroll = () => {
      const windowScrollY = window.scrollY
      const windowInnerHeight = window.innerHeight

      const currentOffsetTop = current.offsetTop
      const Y_elemento = windowScrollY + windowInnerHeight
      console.log({ Y_elemento, currentOffsetTop })

      if (Y_elemento <= currentOffsetTop) return
      const windowInnerWidth = window.innerWidth

      const currentHeight = current.offsetHeight
      const posicionInicialElemento = currentOffsetTop - windowInnerHeight
      const distanciaRecorrida = windowScrollY - posicionInicialElemento
      const porcentajeRecorrido = (distanciaRecorrida / currentHeight) * 100
      const nuevaPosicionX = (porcentajeRecorrido * windowInnerWidth) / 100
      const nuevaPosicionXLimitada = nuevaPosicionX * 2
      const posicionXFinal =
        nuevaPosicionXLimitada < 0
          ? 0
          : nuevaPosicionXLimitada > windowInnerWidth
          ? windowInnerWidth
          : nuevaPosicionXLimitada
      const nuevaPosicionXFinal = posicionXFinal - windowInnerWidth
      setX(nuevaPosicionXFinal)
    }

    document.addEventListener("scroll", scroll)

    return () => {
      window.removeEventListener("scroll", scroll)
    }
  }, [])

  useEffect(track, [track])

  return (
    <motion.div ref={ref} animate={{ x, y: 0 }}>
      <img src="/images/meditation.jpg" alt="Meditation" />
    </motion.div>
  )
}
