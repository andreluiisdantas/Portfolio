import './Project.css';
import Button from '../Button';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Project = () => {
    const data = [
        {   id: '1', 
            image: '../../images/image.png',
            title: 'Projeto Organo',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s com o lançamento de folhas Letraset contendo trechos de Lorem Ipsum,e mais recentemente com softwares de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum',
            respository: 'https://www.youtube.com/watch?v=cux7yaycIzs&t=486s',
            deploy: 'https://www.figma.com/design/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?n',
            language1: '../../images/react.png',
            language2: '../../images/typescript.png',
            language3: '../../images/node-js.png',
        },

        {   id: '1', 
            image: '../../images/image.png',
            title: 'Projeto teste',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s com o lançamento de folhas Letraset contendo trechos de Lorem Ipsum,e mais recentemente com softwares de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum',
            respository: 'https://www.youtube.com/watch?v=cux7yaycIzs&t=486s',
            deploy: 'https://www.figma.com/design/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?n',
            language1: '../../images/react.png',
            language2: '../../images/typescript.png',
            language3: '../../images/node-js.png',
        },

        {   id: '1', 
            image: '../../images/image.png',
            title: 'Projeto teste 2',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s com o lançamento de folhas Letraset contendo trechos de Lorem Ipsum,e mais recentemente com softwares de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum',
            respository: 'https://www.youtube.com/watch?v=cux7yaycIzs&t=486s',
            deploy: 'https://www.figma.com/design/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?n',
            language1: '../../images/react.png',
            language2: '../../images/typescript.png',
            language3: '../../images/node-js.png',
        },

        {   id: '1', 
            image: '../../images/image.png',
            title: 'Projeto teste 2',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s com o lançamento de folhas Letraset contendo trechos de Lorem Ipsum,e mais recentemente com softwares de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum',
            respository: 'https://www.youtube.com/watch?v=cux7yaycIzs&t=486s',
            deploy: 'https://www.figma.com/design/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?n',
            language1: '../../images/react.png',
            language2: '../../images/typescript.png',
            language3: '../../images/node-js.png',
        },

        {   id: '1', 
            image: '../../images/image.png',
            title: 'Projeto teste 2',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s com o lançamento de folhas Letraset contendo trechos de Lorem Ipsum,e mais recentemente com softwares de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum',
            respository: 'https://www.youtube.com/watch?v=cux7yaycIzs&t=486s',
            deploy: 'https://www.figma.com/design/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?n',
            language1: '../../images/react.png',
            language2: '../../images/typescript.png',
            language3: '../../images/node-js.png',
        },
    ];

    return (
        <Swiper
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true, dynamicBullets: true, }}
            autoplay={{delay: 2500,disableOnInteraction: false,}}
            modules={[Autoplay, Navigation, Pagination]}
        >
            {data.map( (item) => (
                <SwiperSlide key={item.id} className='Sliders'>
                <div className='Project-Container'>
                    <div className='Slide'>
                        <div className='Image-container'>
                            <img className='Image-slide' src={item.image} alt='Project' />
                            <div className='Links-btn'>
                                <a href={item.respository} target='_blank'>
                                    <Button text="Acessar repositório"/>
                                </a>
                                <a href={item.deploy} target='_blank'>
                                    <Button text="Acessar site"/>
                                </a>
                            </div>
                        </div>
                        <div className='Project-description'>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <div className='Used-languages'>
                                <div><img src={item.language1} alt='React' /></div>
                                <div><img src={item.language2}  alt='TypeScript' /></div>
                                <div><img src={item.language3}  alt='Node.js' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            ))}
            
        </Swiper>
    );
}

export default Project;
