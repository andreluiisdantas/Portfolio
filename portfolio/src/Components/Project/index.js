import './Project.css';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../Button';
register();

const data = [
    { 
        id: '1', 
        image: 'https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-powder-smoke-colorful-background-image_2164096.jpg',
        name: 'Projeto 1',
        descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        icones: '../../images/react-icon.png',
        link: 'link do github'
    },
    { 
        id: '2', 
        image: 'https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-smoke-clouds-abstract-colorful-background-image_2164061.jpg',
        name: 'Projeto 2',
        descricao: 'descrição do projeto',
        icones: 'link dos ícones',
        link: 'link do github'
    },
    { 
        id: '3', 
        image: 'https://t3.ftcdn.net/jpg/06/33/38/46/360_F_633384696_Jz7VVSzl9kIAgXgd0KtuA33x6Y3j2uLD.jpg',
        name: 'Projeto 3',
        descricao: 'descrição do projeto',
        icones: 'link dos ícones',
        link: 'link do github'
    },
];

const Project = () => {

    return (
        <div className="Projects">
            <h1>Meus Projetos</h1>
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} className='Slides-Projects'>
                        <div className='Slide'>
                            <div className='Slide-image'>
                                <img
                                    src={item.image}
                                    alt="Slider"
                                    className='Slide-item'
                                />
                            </div>

                            <div className='Slide-description'>
                                <h1>{item.name}</h1>
                                <h2>{item.descricao}</h2>
                                <img src={item.icones} alt="Ícones"/>
                            </div>
                        </div>
                        <div className='btn-slide'>
                            <Button text="Acessar"/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Project;
