import { motion, AnimatePresence } from "framer-motion"
import { ReactNode } from "react"

const ModalContainer = ({ children }: any) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 z-50"
  >
    {children}
  </motion.div>
)

const ModalContent = ({ children }: any) => (
  <motion.div
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -50, opacity: 0 }}
    className={` absolute bg-white rounded-lg shadow-lg p-6 inset-5 md:inset-20 overflow-x-auto  `}
  >
    {children}
  </motion.div>
)

const CustomModal = ({
  isOpen,
  children
}: {
  isOpen: boolean
  children: ReactNode
}) => (
  <AnimatePresence>
    {isOpen && (
      <ModalContainer>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    )}
  </AnimatePresence>
)

export default CustomModal
