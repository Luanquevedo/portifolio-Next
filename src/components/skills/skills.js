import './index.scss';

const Skills = () => {
    return (
        <div>
            <article className='skills'>

                <header className='skills__Header'>
                    <h1>Habilidades</h1>
                    <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
                </header>
                <section className='skills__Section1'>
                    <img src='images/js.png' />
                    <img src='images/html.png' />
                    <img src='images/css.png' />
                    <img src='images/react.png' />
                    <img src='images/next.png' />
                </section>
            </article>
        </div>
    )
}

export default Skills