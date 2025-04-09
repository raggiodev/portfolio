import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="contact"
      className="section contact-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">{t("contact")}</h2>
      <div className="contact-container">
        <div className="contact-text">
          <p>{t("contactText.p1")}</p>
          <p>{t("contactText.p2")}</p>
          <p>{t("contactText.p3")}</p>
        </div>
        <div className="contact-image">
          <img
            src="/images/fer-profile.jpg"
            alt={t("contactAlt")}
            className="profile-img"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
