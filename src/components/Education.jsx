import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const studies = [
  {
    id: 1,
    titleKey: "certWeb",
    institution: "Argentina Programa (BA Multiplica)",
    year: "2023",
  },
  {
    id: 2,
    titleKey: "certCyber",
    institution: "Google - Coursera",
    year: "2025",
  },
  {
    id: 3,
    titleKey: "tecComex",
    institution: "ISFD Paso de los Libres",
    year: "2020",
  },
  {
    id: 4,
    titleKey: "tecInformatica",
    institution: "ISFD Paso de los Libres",
    year: "2019",
  },
  {
    id: 5,
    titleKey: "secundario",
    institution: "Escuela Técnica Amalia del Valle Herrera de Aguirre",
    year: "2016",
  }
];

const Education = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="education"
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">{t("education")}</h2>
      <div className="education-list">
        {studies.map(({ id, titleKey, institution, year }) => (
          <motion.div
            key={id}
            className="education-item"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{t(`educationTitles.${titleKey}`)}</h3>
            <p className="education-sub">
              {institution} · <span>{year}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
