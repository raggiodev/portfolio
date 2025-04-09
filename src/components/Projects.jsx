import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Meraki Agencia",
    tech: ["React", "Vite", "Marketing", "Diseño UX"],
    link: "https://merakiestrategia.com",
    translationKey: "meraki",
  },
  {
    id: 2,
    name: "Turim Eventos",
    tech: ["WordPress", "Elementor", "WooCommerce", "MemberPress"],
    link: "https://turimeventos.com",
    translationKey: "turim",
  },
  {
    id: 3,
    name: "Juego de Anuncios (en desarrollo)",
    tech: ["Unity", "C#", "Ilustración", "Mobile"],
    link: "#",
    translationKey: "juegoAnuncios",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="projects"
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">{t("projects")}</h2>
      <div className="projects-grid">
        {projects.map(({ id, name, tech, link, translationKey }) => (
          <motion.div
            key={id}
            className="project-card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>{name}</h3>
            <p>{t(`projectDescriptions.${translationKey}`)}</p>
            <ul className="tech-list">
              {tech.map((stack, index) => (
                <li key={index}>{stack}</li>
              ))}
            </ul>
            {link !== "#" && (
              <a href={link} target="_blank" rel="noopener noreferrer">
                {t("viewProject")}
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;

/*
const Projects = () => {
  return (
      <projects>
      <div>
      <div>
        <img src="" alt="Captura pantalla proyecto 1 que te lleva al repo de código del mismo" />
        <h2>Project 1</h2>
        <p>Lorem Ipsum</p>
      </div>
      <div>
        <img src="" alt="Captura pantalla proyecto 2 que te lleva al repo de código del mismo" />
        <h2>Project 2</h2>
        <p>Lorem Ipsum</p>
      </div>
      <div>
        <img src="" alt="Captura pantalla proyecto 3 que te lleva al repo de código del mismo" />
        <h2>Project 3</h2>
        <p>Lorem Ipsum</p>
      </div>
      <div>
        <img src="" alt="Captura pantalla proyecto 4 que te lleva al repo de código del mismo" />
        <h2>Project 4</h2>
        <p>Lorem Ipsum</p>
      </div>
      </div>
      </projects>
  )
}
export default Projects;
*/