import { motion } from "framer-motion"
import { useState, memo, useEffect } from "react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { useLocation } from "react-router-dom"

import LineaRev from "./LineaRev"
import Languages from "./Languages"

import Switch from "./Switch"
import theme from "theme"

const headerVariants = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
}

export default memo(() => {
  const location = useLocation()

  const isRoot = location.pathname === "/"

  const [isScrolledDown, setIsScrolledDown] = useState(false)
  const [affterlimit, setaffterlimit] = useState(false)

  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  )

  useEffect(() => {
    !isRoot && setaffterlimit(true)
    isRoot && setaffterlimit(false)
  }, [isRoot])

  useScrollPosition(
    ({ prevPos, currPos }: any) => {
      if (!isRoot) return
      const Limit = (vh / 10) * 9
      const isDown = currPos.y < prevPos.y
      const execcedLimit = Math.abs(currPos.y) > Limit

      if (isDown !== isScrolledDown) setIsScrolledDown(isDown)
      if (execcedLimit !== affterlimit) setaffterlimit(execcedLimit)
    },
    [isScrolledDown, isRoot],
    undefined,
    false,
    300
  )

  const [isDark, setIsDark] = useState(theme.isDark())

  return (
    <motion.header
      className="fixed flex-col w-full z-10"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="flex justify-between p-5 pb-0">
        <Switch
          label={"theme"}
          checked={isDark}
          onChange={newChecked => {
            newChecked ? theme.setDarkTheme() : theme.setLightTheme()
            setIsDark(newChecked)
          }}
        />
        <Languages />
      </div>
      <LineaRev isDark={isDark} />
    </motion.header>
  )
})
