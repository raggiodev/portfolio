import React from 'react';

interface NavBar {
  clickLogo: () => void;
}

const Header: React.FC<NavBar> = ({ clickLogo }) => {
  return (
    <header>
      <div onClick={clickLogo}>JoeTheorium</div>
      <nav>
        <button>Home</button>
        <button>About me</button>
        <button>Skills</button>
        <button>Projects</button>
        <button>Blog</button>
        <button>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
