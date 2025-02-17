import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { color } from "framer-motion";

const projetos = [
  { id: 1, title: 'Partnership', tecnology: "Tecnologias Utilizadas: Next.js, React.js, Html, Tailwind css, Typescript", description: 'Projeto realizado com intuito de captar candidatos paraplataforma de beneficios partnership', link: 'https://swiperjs.com/swiper-api#modules', image: '/images/plugow.svg' },
  { id: 2, title: 'Brazilian Hands', tecnology: "Tecnologias Utilizadas: React.js, Sass, Html, Javascript, MongoDB, Node.js, Express.js", description: 'Projeto realizado para captação de clietes e colaboradores para serviçoes domiciliares prestados na irlanda com prestadores brasileiros', link: 'https://swiperjs.com/swiper-api#modules', image: '/images/brazilian.svg' },
  { id: 3, title: 'Morais & Ribeiro', tecnology: "Tecnologias Utilizadas: Next.js, React.js, Sass, Html, Javascript, Bootstrap", description: 'Projeto para divulgação do escritorio de advocatica e captação de possiveis clientes', link: 'https://swiperjs.com/swiper-api#modules', image: '/images/morais.svg' },
  { id: 4, title: 'Innovar', tecnology: "Tecnologias Utilizadas: React.js, Sass, Html, Javascript", description: 'Projeto de captação para potenciais clientes para a empresa', link: 'https://swiperjs.com/swiper-api#modules', image: '/images/innovar.svg' },
];

export default function Carousel() {
  return (
    <div className="container">
      <div className='container__Text'>
        <h2>PROJETOS RECENTES</h2>
        <p>|</p>
        <a>Visualizar mais</a>
      </div>
      <Swiper
        slidesPerView={2}
        modules={[Pagination, Autoplay]}
        pagination
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        speed={700}>
        {projetos.map((item) => (
          <SwiperSlide key={item.id} >
            <div className="container__Carrousel">
              <h3>{item.title}</h3>
              <div className="container__Carrousel__Content">
                <div className="container__Carrousel__Content__Img">
                  <img src={item.image}
                    alt={item.title}
                    className='slide__item' />
                </div>
                <div className="container__Carrousel__Content__Text">
                  <h3 >{item.tecnology}</h3>
                  <p>{item.description}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">Ver mais</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
      <div className="container__Carousel">
      </div>


    </div>
  );
}
