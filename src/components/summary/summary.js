import './index.scss';

const Summary = () => {
    return (
        <article className='container'>
            <h3>Bem-vindo ao meu Portfólio</h3>
            <header className='container__Header'>
                <h1>Olá! Sou Luan Meira Quevedo</h1>
            </header>
            <section className='container__Section1'>
                <p>
                    Sou um desenvolvedor web focado em criar experiências front-end excepcionais. 
                    Com 6 meses de prática em projetos reais, tenho especialidade 
                    em <strong>React</strong> e <strong>Next.js</strong> para construir aplicações 
                    modernas e responsivas, além de habilidades em <strong>Sass</strong> para um 
                    design visual refinado.
                </p>
                <p>
                    Atualmente, estou desenvolvendo um e-commerce, CRM e sistema de cashback para uma empresa de arquitetura, aplicando habilidades em <strong>JavaScript</strong>, <strong>MongoDB</strong>, <strong>Node</strong>, e <strong>Express</strong>. Minha comunicação, capacidade de resolver problemas e colaboração são fundamentais no meu trabalho em equipe.
                </p>
            </section>
            <footer className='container__Footer'>
                <p>
                    <strong>Precisa de um desenvolvedor front-end criativo e comprometido? Vamos nos conectar e transformar suas ideias em realidade!</strong>
                </p>
                <button>Conecte-se comigo!</button>
            </footer>
        </article>
    )
}

export default Summary;
