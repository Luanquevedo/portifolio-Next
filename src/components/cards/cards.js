import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { color } from "framer-motion";

const projetos = [
  { id: 1, title: 'Partnership', tecnology: "Tecnologias Utilizadas: Next.js, React.js, Html, Tailwind css, Typescript", description: 'Desenvolvimento de um projeto para captar candidatos para a plataforma de benefícios Partnership, conectando profissionais a oportunidades exclusivas.', link: 'https://plugowtech.vercel.app/', image: '/images/plugow.svg' },
  { id: 2, title: 'Brazilian Hands', tecnology: "Tecnologias Utilizadas: React.js, Sass, Html, Javascript, MongoDB, Node.js, Express.js", description: 'Desenvolvimento de uma plataforma para conectar clientes e prestadores de serviços domiciliares na Irlanda, facilitando a captação de profissionais qualificados e garantindo um atendimento eficiente.', link: 'https://swiperjs.com/swiper-api#modules', image: '/images/brazilian.svg' },
  { id: 3, title: 'Morais & Ribeiro', tecnology: "Tecnologias Utilizadas: Next.js, React.js, Sass, Html, Javascript, Bootstrap", description: 'Desenvolvimento de um projeto para a divulgação do escritório de advocacia, visando fortalecer a presença digital e captar possíveis clientes.', link: 'https://swiperjs.com/swiper-api#modules', image: '/images/morais.svg' },
  { id: 4, title: 'Innovar', tecnology: "Tecnologias Utilizadas: React.js, Sass, Html, Javascript", description: 'Projeto desenvolvido para atrair e captar potenciais clientes, ampliando as oportunidades de negócios para a empresa.', link: 'https://swiperjs.com/swiper-api#modules', image: '/images/innovar.svg' },
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
                  <div className="container__Carrousel__Content__Text__1">
                    <h3 >{item.tecnology}</h3>
                    <p>{item.description}</p>
                  </div>

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
