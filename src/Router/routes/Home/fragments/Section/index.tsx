import { ReactNode, useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

interface Props {
  left?: boolean
  right?: boolean
  bottom?: boolean
  children?: ReactNode
  className?: string
}

export default function ({
  left = false,
  right = false,
  bottom = false,
  children,
  className = ""
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  const xStart = left ? window.innerWidth : -window.innerWidth
  const xEnd = right ? window.innerWidth : -window.innerWidth
  const yStart = bottom ? window.innerHeight : -window.innerHeight
  const yEnd = bottom ? -window.innerHeight : window.innerHeight

  const xLeft = useTransform(
    [scrollYProgress, scrollY],
    ([_scrollYProgress, _scrollY]) => {
      const progress = _scrollYProgress as number

      const porcentaje = Math.trunc(progress * 100)

      const windowInnerWidth = window.innerWidth
      const windowInnerHeight = window.innerHeight

      if (porcentaje < 35) {
        return (
          ((porcentaje / 35) * 100 * windowInnerWidth) / 100 - windowInnerWidth
        )
      }

      const { current } = ref
      if (!current) return

      const currentOffsetTop = current.offsetTop
      const currentHeight = current.offsetHeight

      const gut = (_scrollY as number) + windowInnerHeight - 50
      const topElement = currentOffsetTop + currentHeight
      const topElementCustom = topElement * 1.06

      if (gut > topElementCustom) {
        const newX = gut - topElementCustom
        return newX > windowInnerWidth ? windowInnerWidth : newX
      }

      return 0
    }
  )

  const xRight = useTransform(
    [scrollYProgress, scrollY],
    ([_scrollYProgress, _scrollY]) => {
      const progress = _scrollYProgress as number

      const porcentaje = Math.trunc(progress * 100)

      const windowInnerWidth = window.innerWidth
      const windowInnerHeight = window.innerHeight

      const porcentajeDe = (num = 35) => Math.trunc((porcentaje / num) * 100)

      if (porcentaje <= 35) {
        const etwas = (porcentajeDe() * windowInnerWidth) / 100
        return windowInnerWidth - etwas
      }

      const { current } = ref
      if (!current) return

      const currentOffsetTop = current.offsetTop
      const currentHeight = current.offsetHeight

      const gut = (_scrollY as number) + windowInnerHeight - 50
      const topElement = currentOffsetTop + currentHeight
      const topElementCustom = topElement * 1.06

      if (gut > topElementCustom) {
        const newX = topElementCustom - gut
        return newX > windowInnerWidth ? +windowInnerWidth : +newX
      }

      return 0
    }
  )

  const yBottom = useTransform(
    [scrollYProgress, scrollY],
    ([_scrollYProgress, _scrollY]) => {
      const progress = _scrollYProgress as number

      const porcentaje = Math.trunc(progress * 100)

      const windowInnerHeight = window.innerHeight

      if (porcentaje < 35) {
        return (
          ((porcentaje / 35) * 100 * windowInnerHeight) / 100 -
          windowInnerHeight
        )
      }

      const { current } = ref
      if (!current) return

      const currentOffsetTop = current.offsetTop
      const currentHeight = current.offsetHeight

      const gut = (_scrollY as number) + windowInnerHeight - 50
      const topElement = currentOffsetTop + currentHeight
      const topElementCustom = topElement * 1.06

      if (gut > topElementCustom) {
        const newY = gut - topElementCustom
        return newY > windowInnerHeight ? windowInnerHeight : newY
      }

      return 0
    }
  )

  const yTop = useTransform(
    [scrollYProgress, scrollY],
    ([_scrollYProgress, _scrollY]) => {
      const progress = _scrollYProgress as number

      const porcentaje = Math.trunc(progress * 100)

      const windowInnerHeight = window.innerHeight

      const porcentajeDe = (num = 35) => Math.trunc((porcentaje / num) * 100)

      if (porcentaje <= 35) {
        const etwas = (porcentajeDe() * windowInnerHeight) / 100
        return windowInnerHeight - etwas
      }

      const { current } = ref
      if (!current) return

      const currentOffsetTop = current.offsetTop
      const currentHeight = current.offsetHeight

      const gut = (_scrollY as number) + windowInnerHeight - 50
      const topElement = currentOffsetTop + currentHeight
      const topElementCustom = topElement * 1.06

      if (gut > topElementCustom) {
        const newY = topElementCustom - gut
        return newY > windowInnerHeight ? +windowInnerHeight : +newY
      }

      return 0
    }
  )

  const xs = useSpring(left ? xLeft : xRight, {
    damping: 50,
    stiffness: 100
  })

  const ys = useSpring(!bottom ? yBottom : yTop, {
    damping: 50,
    stiffness: 100
  })

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={ref}
        className={"relative " + className}
        style={{
          x: bottom ? 0 : xs,
          y: bottom ? ys : 0
        }}
      >
        {children && children}
        {!children && <img src="/images/meditation.jpg" alt="Meditation" />}
      </motion.div>
    </div>
  )
}
