import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export default function () {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
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
    stiffness: 400,
  })

  return (
    <motion.div
      ref={ref}
      className="relative"
      style={{
        x: xs,
      }}
    >
      <img src="/images/meditation.jpg" alt="Meditation" />
    </motion.div>
  )
}
