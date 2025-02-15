import React from "react";

const Summary = () => {
    return (
        <article className='summary' aria-labelledby="summary-title">
            <div className='summary__Content'>
                <h2 id="summary-title">Bem vindo ao meu Portifolio</h2>
                <h1>Olá! Sou Luan Meira Quevedo
                    Sou um desenvolvedor web </h1>
                <p className="summary__Content__Text">Desenvolvedor web com experiência em <strong>React,
                    Next.js, Node.js, MongoDB e PostgreSQL</strong>,
                    focado em soluções escaláveis e de alta qualidade.
                </p>

                <nav className='summary__Content__Button' aria-labelledby="Links para mais informações">
                    <button className='summary__Button'>Projetos</button>
                    <button className='summary__Button' onClick={() => window.open('https://www.linkedin.com/in/luan-quevedo/', "_blank")}>Conectar-se</button>
                </nav>
            </div>
            <img src='images/photo.svg' alt="Foto Luan Quevedo" />
        </article>
    )
}

export default Summary;
