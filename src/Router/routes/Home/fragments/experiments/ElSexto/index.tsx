import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

import "./style.css"

interface Props {
  left?: boolean
  right?: boolean
  bottom?: boolean
}

export default function ({
  left = false,
  right = false,
  bottom = false
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  const xsss = useTransform(
    [scrollYProgress, scrollY],
    ([_scrollYProgress, _scrollY]) => {
      //
      const porcentaje = Math.trunc((_scrollYProgress as number) * 100)

      const windowInnerWidth = window.innerWidth
      const windowInnerHeight = window.innerHeight

      if (porcentaje < 35) {
        return (
          ((porcentaje / 35) * 100 * windowInnerWidth) / 100 - windowInnerWidth
        )
      }

      // if (porcentaje > 90) {
      //   const cienPorciento = ((porcentaje - 90) / 10) * 100
      //   return (cienPorciento * windowInnerWidth) / 100
      // }
      const { current } = ref
      if (!current) return
      const currentOffsetTop = current.offsetTop
      const currentHeight = current.offsetHeight

      const gut = (_scrollY as number) + windowInnerHeight - 50
      const topElement = currentOffsetTop + currentHeight

      if (gut > topElement) {
        const newX = gut - topElement
        return newX > windowInnerWidth ? windowInnerWidth : newX
      }

      return 0
    }
  )

  const xs = useSpring(xsss, {
    damping: 50,
    stiffness: 400
  })

  return (
    <motion.div
      ref={ref}
      className="relative"
      style={{
        x: xs
      }}
    >
      <figure className="progress absolute z-10">
        <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
      </figure>
      <img src="/images/meditation.jpg" alt="Meditation" />
    </motion.div>
  )
}
