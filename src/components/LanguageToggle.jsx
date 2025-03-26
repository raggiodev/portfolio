import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang); 
  };

  return (
    <div className="language-toggle">
      <button onClick={() => changeLanguage("en")}>🇺🇸🗽</button>
      <button onClick={() => changeLanguage("es")}>🇪🇸⚡</button>
      <button onClick={() => changeLanguage("pt")}>🇧🇷🪇</button>
    </div>
  );
};

export default LanguageToggle;
