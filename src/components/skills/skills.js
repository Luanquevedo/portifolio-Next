import './index.scss';

const Skills = () => {
    return (
        <div>
            <article className='skills'>

                <header className='skills__Header'>
                    <h1>Habilidades</h1>
                </header>
                <section className='skills__Section1'>
                    <img className='skills__Section1__Item' src='images/js.png' />
                    <img className='skills__Section1__Item' src='images/next.png' />
                    <img className='skills__Section1__Item' src='images/react.png' />
                    <img className='skills__Section1__Item' src='images/node.png' />
                    <img className='skills__Section1__Item' src='images/postgre.png' />
                    <img className='skills__Section1__Item' src='images/mongo.png' />
                    <img className='skills__Section1__Item' src='images/express.png' />
                    <img className='skills__Section1__Item' src='images/html.png' />
                    <img className='skills__Section1__Item' src='images/css.png' />
                </section>
            </article>
        </div>
    )
}

export default Skills