import Button from '../Button';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <a href='#'><h1><strong>André</strong> Dantas</h1></a>
            <div className='Links'>
                <a href='#'>Página inicial</a>
                <a href='#'>Sobre mim</a>
                <a href='#'>Portfólio</a>
                <a href='https://www.linkedin.com/in/andré-luis-sousa-dantas-11701329b/' target="_blank"><img className='Midias' src='../../images/linkedin.png' alt='LinkedIn'></img></a>
                <a href='https://github.com/andreluiisdantas' target="_blank"><img className='Midias' src='../../images/github.png' alt='Github'></img></a>
                <Button text="Entrar em contato"/>
            </div>
        </div>
    );
}

export default Navbar;
