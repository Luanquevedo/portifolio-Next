import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src='images/logo.svg' alt="Logo" />
      <div className='navbar__Itens'>
        <Link to="summary" smooth={true} duration={500}>Apresentação</Link>
        <Link to="projects" smooth={true} duration={500}>Projetos</Link>
        <Link to="skills" smooth={true} duration={500}>Habilidades</Link>
        <Link to="contact" smooth={true} duration={500}>Contato</Link>
      </div>
    </nav>
  );
};

export default Navbar;