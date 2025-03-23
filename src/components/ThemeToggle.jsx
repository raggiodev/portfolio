import { useTheme } from "../hooks/useTheme";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      className="theme-toggle"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </motion.button>
  );
};
