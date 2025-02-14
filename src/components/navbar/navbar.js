import React from 'react'
import { Link } from 'react-scroll';

//links do navbar a serem renderizados.
const linkItems = [
  { to: "summary", label: "Apresentação"},
  { to: "projects", label: "Projetos"},
  { to: "skills", label: "Habilidades"},
  { to: "contact", label: "Contato"},
];

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src='images/logo.svg' alt="Logo" />
      <div className='navbar__Itens'>
        {linkItems.map((item) => (
          <Link key={item.to} to={item.to} smooth={true} duration={500}>
            {item.label}
          </Link> 
        ))}
      </div>
    </nav>
  );
};

export default Navbar;