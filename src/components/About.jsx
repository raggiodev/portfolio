import { motion } from "framer-motion";
import Cursor from "./Cursor";
import { useTranslation } from "react-i18next";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay },
  }),
};

const About = () => {
  const { t } = useTranslation();

  return (
    <motion.article id="about" initial="hidden" whileInView="visible">
      <motion.h4 custom={0.8} variants={textVariants}>
        {t("hi")}
      </motion.h4>
      <motion.h1 custom={1.2} variants={textVariants}>
        Raggio Fernando Andres
      </motion.h1>
      <motion.h2 custom={1.6} variants={textVariants}>
        {t("full_stack")}
      </motion.h2>
      <Cursor />
    </motion.article>
  );
};

export default About;
