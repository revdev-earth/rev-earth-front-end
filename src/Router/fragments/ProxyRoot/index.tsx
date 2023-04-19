import { Outlet } from "react-router-dom"
import Backgrund from "../Backgrund"
import Footer from "../Footer"
import Header from "../Header"
// import { AnimatePresence } from "framer-motion"

export default () => (
  <>
    <Header />
    <Backgrund />
    {/* <AnimatePresence> */}
    <div
      className={`
                      flex items-center justify-center
                      min-h-screen min-w-screen 
                      bg-stone-50 dark:bg-slate-950
                      text-slate-950 dark:text-stone-100
        `}
    >
      <Outlet />
    </div>
    {/* </AnimatePresence> */}
    <Footer />
  </>
)
