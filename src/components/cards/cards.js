'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projetos = [
  { id: 1, title: 'Partnership', tecnology: "tecnologias", description: 'Descrição do card 1', image: '/images/plugow.svg' },
  { id: 2, title: 'Brazilian Hands', tecnology: "tecnologias", description: 'Descrição do card 2', image: '/images/brazilian.svg' },
  { id: 3, title: 'Morais & Ribeiro', tecnology: "tecnologias", description: 'Descrição do card 3', image: '/images/morais.svg' },
  { id: 4, title: 'Innovar', tecnology: "tecnologias", description: 'Descrição do card 4', image: '/images/innovar.svg' },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Função para garantir que todas as imagens estão carregadas
  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % projetos.length);
    }, 5000); // 10 segundos para mudança de slide

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % projetos.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + projetos.length) % projetos.length);

  // Função para pegar os três projetos atuais do carrossel
  const currentProjects = [
    projetos[(index) % projetos.length],
    projetos[(index + 1) % projetos.length],
    projetos[(index + 2) % projetos.length],
  ];

  return (
    <div className="container">
      <div className='container__Text'>
        <h2>PROJETOS RECENTES</h2>
        <p>|</p>
        <a>Visualizar mais</a>
      </div>
      <div className="container__Carousel">
        <AnimatePresence mode="popLayout">
          {currentProjects.map((projeto) => (
            <motion.div
              key={projeto.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: imagesLoaded ? 1 : 0, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`carousel-card ${imagesLoaded ? 'loaded' : 'loading'}`} // Adiciona a classe com base no estado
            >
              <img
                src={projeto.image}
                alt={projeto.title}
                className="carousel-image"
                onLoad={handleImageLoad} // Espera o carregamento da imagem
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Botões de navegação */}
      <button onClick={prevSlide} className="carousel-btn prev-btn">
        <ChevronLeft size={24} className="text-white" />
      </button>
      <button onClick={nextSlide} className="carousel-btn next-btn">
        <ChevronRight size={24} className="text-white" />
      </button>
    </div>
  );
}
