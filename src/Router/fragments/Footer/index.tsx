import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import data from "./footer"
import Fade from "react-reveal/Fade"

interface Block {
  title: string
  links: LinkProps[]
}

interface LinkProps {
  name: string
  href?: string
  to?: string
}

const Footer = () => (
  <Fade>
    <div
      className={`footer pt-24 p-12 md:p-24 md:gap-16 
        flex md:flex-row flex-col md:items-end justify-between 
      `}
    >
      <TopFooter />
      <BottomFooter />
    </div>
  </Fade>
)

const TopFooter = () => {
  const blocks: Block[] = data.dataTop

  return (
    <div className="flex flex-1 flex-col gap-3">
      {blocks.map((block: Block, index: number) => (
        <Foot key={index} block={block} />
      ))}
    </div>
  )
}

const Foot = ({ block }: { block: Block }) => (
  <div className="flex flex-col gap-2">
    <h3 className="text-base font-medium text-secondary uppercase">
      {block.title}
    </h3>
    <ul className="list-none">
      {block.links.map((link: LinkProps, index: number) => (
        <Li key={index} link={link} />
      ))}
    </ul>
  </div>
)

const BottomFooter = () => {
  const { copy, links }: { copy: string; links: LinkProps[] } = data.dataBottom

  return (
    <div className="flex flex-1 justify-between md:flex-row flex-col md:gap-32">
      <ul className="flex flex-col">
        {links.map((link: LinkProps, index: number) => (
          <Li key={index} link={link} />
        ))}
      </ul>
      <p className="whitespace-nowrap">{copy}</p>
    </div>
  )
}

const Li = ({ link }: { link: LinkProps }) => (
  <li>
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

export default Footer
