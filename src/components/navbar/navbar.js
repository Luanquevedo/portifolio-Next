import React from 'react'
import './index.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src='images/logo.svg'/>
        <div className='navbar__Itens'>
            <a href=''>Apresentação</a>
            <a href=''>Projetos</a>
            <a href=''>Habilidades</a>
            <a href=''>Contato</a>
        </div>
    </nav>
  )
}

export default Navbar