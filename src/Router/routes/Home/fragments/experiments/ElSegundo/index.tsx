import { useCallback, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { debounce } from "lodash"

interface Props {
  left?: boolean
  right?: boolean
  bottom?: boolean
}

export default function ({
  left = false,
  right = false,
  bottom = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [x, setX] = useState(-window.innerWidth)

  const track = useCallback(() => {
    const current = ref.current
    if (!current) return

    const scroll = () => {
      const windowScrollY = window.scrollY
      const windowInnerHeight = window.innerHeight

      const currentOffsetTop = current.offsetTop
      const currentHeight = current.offsetHeight
      const Y_elemento = windowScrollY + windowInnerHeight

      if (Y_elemento <= currentOffsetTop) return
      if (Y_elemento >= currentOffsetTop + currentHeight) return

      console.log({ Y_elemento, currentOffsetTop })

      const windowInnerWidth = window.innerWidth

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
      const posicionLeft = posicionXFinal - windowInnerWidth
      const posicionRight = posicionXFinal + windowInnerWidth

      const nuevaPosicionXFinal = left
        ? posicionLeft
        : right
          ? posicionRight
          : posicionLeft
      setX(nuevaPosicionXFinal)
    }

    const debounceScroll = debounce(scroll, 5, {
      leading: false,
      trailing: true,
    })

    scroll()

    document.addEventListener("scroll", debounceScroll)

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
