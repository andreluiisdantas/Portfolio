import './Contact.css';
import Title from '../../Components/Title';

const Contact = () => {
    return(
        <div className='Contact'>
            <div className='Title'>
            <Title title="Vamos trabalhar juntos?"/>
            <p>Entre em contato comigo em caso de dúvidas ou oportunidades🚀</p>
                <div className='email'>
                    <img src='../../images/e-mail.png'/>
                    <h2>andreluissousaa10@gmail.com</h2>
                </div>
            </div>
        </div>
    );
}

export default Contact;