import React from 'react'


const CardProject = ({ title, image, tecnology, description, link }) => {
    return (
        <div className="container__C">
            <h2>{title}</h2>
            <div className="container__C__D">
                <div className="container__C__D__I">
                    <img src={image}
                        alt={title}
                        className='slide__item' />
                </div>
                <div className="container__C__D__T">
                    <div className="container__C__D__T__1">
                        <h3 >{tecnology}</h3>
                        <p>{description}</p>
                    </div>

                    <a href={link} target="_blank" rel="noopener noreferrer">Ver mais</a>
                </div>
            </div>
        </div>
    )
}

export default CardProject

