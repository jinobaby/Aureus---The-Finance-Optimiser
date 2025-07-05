import React from 'react'
import { Link } from 'react-router-dom';
import { Menu, Dollar, Book, Chat } from '../../Icons/Icons';

function LandingPageNav() {
    return (
        <nav>

            <div className='home-container-nav'>

                <div className='home-container-nav-bottom'>

                    <div className='home-container-nav-bottom-left'>
                        <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} to='/'>
                            <img src="../../public/Images/Logo/aureus_logo.png" height={60} width={60} alt="" srcset="" />
                            <div className='home-container-nav-bottom-text'>Aureus</div>
                        </Link>
                    </div>

                    <div className='home-container-nav-bottom-center'>

                        <Link to="/features" className='icon-text-home'>
                            <Menu />
                            <div>Features</div>
                        </Link>

                        <Link className='icon-text-home'>
                            <Dollar />
                            <div>Pricing</div>
                        </Link>

                        <Link className='icon-text-home'>
                            <Book />
                            <div>Learn</div>
                        </Link>

                        <Link className='icon-text-home'>
                            <Chat />
                            <div>Support</div>
                        </Link>

                    </div>

                    <div className='home-container-nav-bottom-right'>
                        <button style={{ backgroundColor: 'var(--color-nav-active)', color: 'var(--color-bg-card)' }} className='home-container-nav-bottom-button home-container-nav-bottom-button-specific'>Get Started</button>
                        <button style={{ backgroundColor: 'var(--color-bg-card)', color: 'var(--color-accent)' }} className='home-container-nav-bottom-button home-container-nav-bottom-button-specific'>Sign In</button>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default LandingPageNav