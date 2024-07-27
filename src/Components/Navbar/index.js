// Navbar.js
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Button from '../Button';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <Link to='#home'><h1><strong>André</strong> Dantas</h1></Link>
            <div className='Links'>
                <Link to='#home'>Página inicial</Link>
                <Link to='#about'>Sobre mim</Link>
                <Link to='#portfolio'>Portfólio</Link>
                <Link to='#contact'>Contato</Link>
                <a href='https://www.linkedin.com/in/andré-luis-sousa-dantas-11701329b/' target="_blank" rel="noopener noreferrer">
                    <img className='Midias' src='../../images/linkedin.png' alt='LinkedIn' />
                </a>
                <a href='https://github.com/andreluiisdantas' target="_blank" rel="noopener noreferrer">
                    <img className='Midias' src='../../images/github.png' alt='Github' />
                </a>
                <Button text="Entrar em contato" />
            </div>
        </div>
    );
}

export default Navbar;
