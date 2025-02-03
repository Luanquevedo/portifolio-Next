import React from 'react'
import './index.scss'

const Footer = () => {
    return (
        <footer className='containerFooter'>
            <div>
                <p>Entre em contato para oportunidades ou apenas para dizer oi! 👋</p>
            </div>
            <div>
                <button>
                    <img src='images/github.svg' />
                </button>
                <button>
                    <img src='images/linkedin.svg' />
                </button>
                <button>
                    <img src='images/instagram.svg' />
                </button>
                <button>
                    <img src='images/email.svg' />
                </button>
            </div>
        </footer>
    )
}

export default Footer