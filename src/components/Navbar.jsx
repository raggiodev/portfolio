// import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a className="link" to="/#about">
            About
          </a>
        </li>
        <li>
          <a className="link" to="/#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="link" to="/#experience">
            Experience
          </a>
        </li>
        <li>
          <a className="link" to="/#education">
            Education
          </a>
        </li>
        <li>
          <a className="link" to="/#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="link" to="/#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;