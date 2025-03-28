import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
    >
      <motion.a 
        href="/" 
        className="logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
      >
        <h1 className="favicon"></h1>
        <h4>raggiodev</h4>
      </motion.a>
      <Navbar />
    </motion.header>
  );
};

export default Header;
