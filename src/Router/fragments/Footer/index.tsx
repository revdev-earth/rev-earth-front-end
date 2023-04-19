import { useState, useEffect, useRef, Key } from "react"
import { motion } from "framer-motion"

export default function () {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<any>(null)

  const footerVariants = {
    hidden: {
      y: "50%",
      opacity: 0
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  useEffect(() => {
    const footerObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        footerObserver.disconnect()
      }
    }, {})

    footerObserver.observe(footerRef.current)

    return () => {
      footerObserver.disconnect()
    }
  }, [])

  return (
    <motion.footer
      className={` footer 
        pt-24 p-12 md:p-24 md:gap-16
        ${isVisible ? "footer-visible" : ""}     
        flex md:flex-row flex-col md:items-end justify-between
        min-h-screen  `}
      variants={footerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      ref={footerRef}
    >
      <TopFooter />
      <BottomFooter />
    </motion.footer>
  )
}

import { Link } from "react-router-dom"
import data from "./footer"

const TopFooter = () => {
  const blocks = data.dataTop

  return (
    <div className="flex flex-1 flex-col gap-3">
      {blocks.map((block: any, index: number) => (
        <Foot {...{ block, index }} />
      ))}
    </div>
  )
}

const Foot = ({ index, block }: any) => (
  <div key={index} className="flex flex-col gap-2">
    <h3 className="text-base font-medium text-secondary uppercas">
      {block.title}
    </h3>

    <ul className="list-none">
      {block.links.map((link: any, index: number) => (
        <Li {...{ link, index }} />
      ))}
    </ul>
  </div>
)

const BottomFooter = () => {
  const { copy, links } = data.dataBottom

  return (
    <div className="flex flex-1 justify-between md:flex-row flex-col md:gap-32">
      <ul className="flex flex-col ">
        {links.map((link: any, index: any) => (
          <Li {...{ link, index }} />
        ))}
      </ul>

      <p className="whitespace-nowrap">{copy}</p>
    </div>
  )
}

const Li = ({ index, link }: any) => (
  <li key={index}>
    {link.href && (
      <a
        href={link.href}
        className="text-base text-secondary hover:text-primary transition-colors duration-200 whitespace-nowrap"
      >
        {link.name}
      </a>
    )}
    {link.to && (
      <Link
        to={link.to}
        className="text-base text-secondary hover:text-primary transition-colors duration-200 whitespace-nowrap"
      >
        {link.name}
      </Link>
    )}
  </li>
)
