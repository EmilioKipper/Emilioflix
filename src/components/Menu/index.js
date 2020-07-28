import React from 'react';

import Logo from '../../assets/EMILIOFLIX.png'
import './Menu.css';
import { Button } from '../ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} className="Logo" alt="EMILIOFLIX" />
      </a>

      <Button as="a" href="/" className="ButtonLink">
        Novo video
      </Button>
    </nav>
  )
}

export default Menu;