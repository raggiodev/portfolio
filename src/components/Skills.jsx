import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";

const skills = [
  { id: "html", name: "HTML5", icon: <FaHtml5 className="icon html" /> },
  { id: "css", name: "CSS3", icon: <FaCss3Alt className="icon css" /> },
  { id: "javascript", name: "JavaScript", icon: <FaJs className="icon js" /> },
  { id: "react", name: "React", icon: <FaReact className="icon react" /> },
  { id: "node", name: "Node.js", icon: <FaNodeJs className="icon node" /> },
  { id: "git", name: "Git", icon: <FaGitAlt className="icon git" /> },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills-section">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("skills")}
      </motion.h2>

      <motion.div
        className="skills-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            className="skill"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {skill.icon}
            <span>{t(skill.id)}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
