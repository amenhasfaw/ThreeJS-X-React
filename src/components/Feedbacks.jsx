import { motion } from "framer-motion"
import { Wrapper } from "../HOC"
import { testimonials } from "../constants"
import { styles } from "../style"
import { fadeIn, textVariant } from "../utils/motion"


const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-20px">
      <div className="bg-tertiary rounded-2xl min-h-[300px]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h3 className={styles.sectionHeadText}>Work Experience</h3>
      </motion.div>
      </div>
    </div>
  )
}

export default Wrapper(Feedbacks,"")