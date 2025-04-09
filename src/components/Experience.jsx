import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const experiences = [
  {
    id: "meraki",
    title: "Meraki - Marketing y Comunicación",
    role: "Co-Fundador & Desarrollador Web",
    date: "2023 - Actualidad",
    description: "merakiDescription",
  },
  {
    id: "saintotte",
    title: "Despachos Saintotte",
    role: "Asistente Técnico en Comercio Internacional",
    date: "2022 - Actualidad",
    description: "saintotteDescription",
  },
  {
    id: "freelance",
    title: "Desarrollador Web Freelance",
    role: "Frontend Developer",
    date: "2020 - Actualidad",
    description: "freelanceDescription",
  },
];

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="experience-section">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("experience")}
      </motion.h2>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="experience-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{t(exp.title)}</h3>
            <p className="role">{t(exp.role)}</p>
            <p className="date">{exp.date}</p>
            <p className="description">{t(exp.description)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

/*
const Experience = () => {
  return (
    <>
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
      <h2>Experiencia Laboral</h2>
      <div>
        <h3>Capacitador Desarrollo Web</h3>
        <p>En Innova Libres - 2024 - actual</p>
        <p>Instructor de un curso de desarrollo web con Vite + React + JavaScript. Implementación de metodologías modernas como pair-programming y uso de IA en desarrollo.</p>
      </div>
      <div>
        <h3>Mentor Programación</h3>
        <p>Club Chicas Programadoras - 2025 - actual</p>
        <p>Acompañamiento proceso aprenzidaje. Flexibilidad y adaptabilidad con los contenidos. Guía en desarrollo web; SPA y primeros pasos con Inteligencia Artificial</p>
      </div>
      <div>
        <h3>Subgerente y Director de Tecnologías</h3>
        <p>MERAKI - Agencia y Consultora de Comunicación Estratégica</p>
        <p>Liderazgo local en tecnología actual, gestión de RRHH y contabilidad en microempresa. Responsable del desarrollo de soluciones tecnológicas; diseño y desarrollo de sitios webs simples y complejos y transformación digital. Galardonados con el sello: Hecho en Libres.</p>
      </div>
      <div>
        <h3>Desarrollador Web Front End</h3>
        <p>KUROBA - Enero 2023 - Diciembre 2023</p>
        <p>Diseño e implementación de interfaz de usuario para aplicaciones web. Colaboración en integración con backend y optimización de código.</p>
      </div>
      <div>
        <h3>Freelancer - Full Stack Web Developer</h3>
        <p>2020 - Actual</p>
        <p>Desarrollo aplicaciones y sitios webs para clietes locales, trabajé con internacionales de forma tercerizada</p>
      </div>
    </>
  );
};
export default Experience;
*/