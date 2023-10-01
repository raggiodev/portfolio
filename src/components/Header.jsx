import {Link} from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <img src="" alt="" />
        <h3>Fernando Andres Raggio</h3>
      </Link>
      <Navbar />
    </header>
  )
}

export default Header;