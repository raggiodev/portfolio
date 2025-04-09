import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const navbarVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const linkVariant = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const Navbar = () => {
  const { t } = useTranslation();
  const links = ["about", "experience", "projects", "skills", "education", "contact"];

  return (
    <motion.nav variants={navbarVariant} initial="hidden" animate="visible">
      <ul>
        {links.map((link, i) => (
          <motion.li key={link} custom={i} variants={linkVariant}>
            <a className="link" href={`/#${link}`}>
              {t(link)}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
