import {Outlet} from "react-router-dom";

import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Outlet/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default MainLayout;
