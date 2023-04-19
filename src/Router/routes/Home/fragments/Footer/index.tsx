import {
  useState,
  useEffect,
  useRef,
  ReactPortal,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment
} from "react"
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
        h-screen p-24
        ${isVisible ? "footer-visible" : ""}      `}
      variants={footerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      ref={footerRef}
    >
      {/* Contenido del Footer */}
      <TopFooter blocks={data.dataTop} />
      <BottomFooter {...data.dataBottom} />
    </motion.footer>
  )
}

import { Link, To } from "react-router-dom"
import data from "./footer.json"

const BottomFooter = ({ copy, links }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <div className="md:order-2">
        <p className="mb-4 md:mb-0 text-base">{copy}</p>
      </div>
      <div className="md:order-1">
        <ul className="flex flex-wrap -mb-3">
          {links.map((link: any, index: any) => (
            <li key={index} className="mb-3 md:mr-6">
              {link.href.indexOf("http") > -1 ? (
                <a
                  href={link.href}
                  className="text-base font-medium text-secondary hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="text-base font-medium text-secondary hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const TopFooter = ({ blocks }: any) => {
  return (
    <div>
      {blocks.map(
        (
          block: {
            title:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined
            links: any[]
          },
          index: Key | null | undefined
        ) => (
          <div key={index} className="mb-10 md:mb-0">
            <h3 className="text-base font-medium text-secondary uppercase mb-3">
              {block.title}
            </h3>
            <ul className="list-none">
              {block.links.map(
                (
                  link: {
                    href: string[] | To | undefined
                    name:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | ReactFragment
                      | null
                      | undefined
                  },
                  index: Key | null | undefined
                ) => (
                  <li key={index} className="mb-2">
                    {link.href?.indexOf("http") > -1 ? (
                      <a
                        href={link.href}
                        className="text-base text-secondary hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-base text-secondary hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>
        )
      )}
    </div>
  )
}
