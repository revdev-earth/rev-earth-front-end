import { motion } from "framer-motion"

interface Props {
  title?: string
  img?: {
    alt: string
    src: string
  }
}

const introVariants = {
  hidden: {
    opacity: 0,
    scale: 1.2,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
}

export default function ({
  title = "Rev Earth",
  img = {
    alt: "Milky",
    src: "images/milky.jpg",
  },
}: Props) {
  return (
    <motion.div
      className={`h-screen relative overflow-x-hidde`}
      variants={introVariants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 100,
      }}
    >
      <img
        alt={img.alt}
        src={img.src}
        className="h-full w-full object-cover object-center filter brightness-80%"
      />
      <div className="absolute bottom-20 left-20 font-bold">
        {title && <h2 className="text-3xl text-white">{title}</h2>}
      </div>
    </motion.div>
  )
}
