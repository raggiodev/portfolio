import {motion} from "framer-motion";

const Section = (props) => {
  const {children} = props;

  return (
    <motion.section
    initial={{
      opacity: 0,
      y: 50,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition:{
        duration: 1,
        delay: 0.6,
      }
    }}
    >
      {children}
    </motion.section>
  )
}

export default Section;