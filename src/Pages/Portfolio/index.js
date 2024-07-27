// Portfolio.js
import React from 'react';
import './Portfolio.css';
import Title from '../../Components/Title';
import Project from '../../Components/Project';

const Portfolio = () => {
    return (
        <div className='Portfolio'>
            <div id='portfolio-overview' className='Title'>
                <Title title="Portfólio."/>
            </div>
            
            <hr/>

            <div id='front-end' className='Function'>
                <div className='Front-end'>
                    <h1>Desenvolvedor Front-end:</h1>
                </div>

                <div className='Text'>
                    <p>
                        É responsável pela parte visual e interativa de um site ou aplicativo da web. 
                        Eles trabalham com tecnologias como HTML, CSS e JavaScript para criar interfaces de usuário atraentes e funcionais que são executadas no navegador.
                    </p>
                </div>
            </div>

            <hr/>

            <div id='projects' className='Projects'>
                <Project/>
            </div>
        </div>
    );
}

export default Portfolio;
