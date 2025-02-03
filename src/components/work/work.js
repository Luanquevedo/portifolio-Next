import React, { useState, useEffect } from 'react';
import React from 'react'

const projects = [
    {id:1, title: "card1", description:"card1", image:"card1.png"}
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modal, setModal] = useState(null);
}

const work = () => {
    return (
        <section>
            <div>
                <h2>Projetos Recentes</h2>
                <p>|</p>
                <a>Visualizar mais</a>
            </div>

        </section>
    )
}

export default work