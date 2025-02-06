import React from 'react'


const Footer = () => {
    return (
        <footer className='containerFooter'>
            <div className='containerFooter__Content'>
                <p>Entre em contato para oportunidades ou apenas para dizer oi! 👋</p>
            </div>
            <div className='containerFooter__Button'>
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