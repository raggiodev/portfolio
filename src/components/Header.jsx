import {Link} from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <img src="" alt="" />
        <h4>JoeTheorium</h4>
      </Link>
      <Navbar />
    </header>
  )
}

export default Header;