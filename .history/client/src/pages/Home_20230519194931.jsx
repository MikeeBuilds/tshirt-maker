import { motion, AnimatePresence } from "framer-motion"
import {useSnapshot} from "valtio"
import state from "../store"
import { CustomButton } from "../components"

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from "../config/motion"

const Home = () => {
  const snapshot = useSnapshot(state)

  return (
    <AnimatePresence>
      {snapshot.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img 
            src="./threejs.png"
            alt="three.js logo"
            className="w-8 h-8 object-contain"

            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LETS <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div 
              {...headContentAnimation}
              className="flex flex-col gap-5">
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new
                customization tool. <strong>Unleash your imagination</strong>
                {" "} and define your own style.
              </p>

              <CustomButton
              
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home