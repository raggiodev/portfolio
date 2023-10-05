// import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      {/* <Header/> */}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainLayout;