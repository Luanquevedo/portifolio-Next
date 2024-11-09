import './index.scss';

const Summary = () => {
    return (
        <article className='summary'>
            <div className='summary__Content'>
                <h2>Bem vindo ao meu Portifolio</h2>
                <h1>Olá! Sou Luan Meira Quevedo
                    Sou um desenvolvedor web </h1>
                <p className="summary__Content__Text">Desenvolvedor web com experiência em React,
                    Next.js, Node.js, MongoDB e PostgreSQL,
                    focado em soluções escaláveis e de alta qualidade.
                </p>
                <div>
                    <button>Projetos</button>
                    <button>Conectar-se</button>
                </div>
            </div>
            <img src='images/photo.png' />
        </article>
    )
}

export default Summary;
