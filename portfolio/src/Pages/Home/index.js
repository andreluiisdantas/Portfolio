import './Home.css'
import Button from '../../Components/Button';
import Slider from '../../Components/Slider';

const Home = () => {
    return(
        <div className='Home'>
            <div className='About-me'>
            <h2>Olá eu sou o André</h2>
            <h1>Desenvolvedor <br/> Front-end e Mobile</h1>
            <Button text="Vamos conversar"/>
            </div>
            <Slider/>
        </div>
    )
}

export default Home