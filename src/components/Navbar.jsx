import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className='link' to='/home#'>Home</NavLink>
        </li>
        <li>
          <NavLink className='link' to='/home#about'>About</NavLink>
        </li>
        <li>
          <NavLink className='link' to='/home#experience'>Experience</NavLink>
        </li>
        <li>
          <NavLink className='link' to='/home#skills'>Skills</NavLink>
        </li>
        <li>
          <NavLink className='link' to='/home#education'>Education</NavLink>
        </li>
        <li>
          <NavLink className='link' to='/home#projects'>Projects</NavLink>
        </li>
        <li>
          <NavLink className='link' to='/home#contact'>Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;