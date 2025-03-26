import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        <li>
          <a className="link" href="/#about">
            {t("about")}
          </a>
        </li>
        <li>
          <a className="link" href="/#skills">
            {t("skills")}
          </a>
        </li>
        <li>
          <a className="link" href="/#experience">
            {t("experience")}
          </a>
        </li>
        <li>
          <a className="link" href="/#education">
            {t("education")}
          </a>
        </li>
        <li>
          <a className="link" href="/#projects">
            {t("projects")}
          </a>
        </li>
        <li>
          <a className="link" href="/#contact">
            {t("contact")}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
