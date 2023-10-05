import {motion} from "framer-motion";
import Cursor from "./Cursor";

const About = () => {
  return (
    <motion.article id='about' whileInView={"visible"}>
      <motion.h4
      initial={{
        opacity: 0,
        x: -50,
      }}
      variants={{
        visible: {
        opacity: 1,
        x: 0,
        transition:{
          duration: 1,
          delay: 0.8,
        }}
      }}
      >Hi, my name is</motion.h4>
      <motion.h1
      initial={{
        opacity: 0,
        x: -50,
      }}
      variants={{
        visible: {
        opacity: 1,
        x: 0,
        transition:{
          duration: 1,
          delay: 1.2,
        }}
      }}
      >Fernando Andres Raggio</motion.h1>
      <motion.h2
      initial={{
        opacity: 0,
        x: -50,
      }}
      variants={{
        visible: {
        opacity: 1,
        x: 0,
        transition:{
          duration: 1,
          delay: 1.6,
        }}
      }}
      >Full Stack Developer</motion.h2>
      <Cursor/>
    </motion.article>
  )
}

export default About;