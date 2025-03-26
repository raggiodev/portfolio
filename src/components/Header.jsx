// import {Link} from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <a to='/' className='logo'>
        <h1 className='favicon'></h1>
        <h4>raggiodev</h4>
      </a>
      <Navbar/>
    </header>
  )
}

export default Header;
