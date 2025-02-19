import React from 'react'


const Footer = () => {
    return (
        <footer className='containerFooter'>
            <div className='containerFooter__Content'>
                <p>Entre em contato para oportunidades ou apenas para dizer oi! 👋</p>
            </div>
            <div className='containerFooter__Button'>
                <button>
                    <a href='https://github.com/Luanquevedo' target='blank'>
                        <img src='images/github.svg' />
                    </a>

                </button>
                <button>
                    <a href='https://www.linkedin.com/in/luan-quevedo/' target='blank'>
                        <img src='images/linkedin.svg' />
                    </a>
                </button>
                <button>
                    <a href='https://www.instagram.com/luanquevedo99/' target='blank'>
                        <img src='images/instagram.svg' />
                    </a>
                </button>
            </div>
            <div className='containerFooter__Contact'>
                <p>Luan Quevedo © 2025</p>
                <p>|</p>
                <p>luan.quevedo@hotmail.com</p>
            </div>
        </footer>
    )
}

export default Footer