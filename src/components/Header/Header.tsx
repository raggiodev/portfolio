import React from 'react';

interface Header {
  clickLogo: () => void;
}

const Header: React.FC<Header> = ({ clickLogo }) => {
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
