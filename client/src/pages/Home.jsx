import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import { HomeIcon, Dollar, Menu, Book, Chat } from '../components/icons/Icons';

function Home() {


    return (
        <>
        <div className='home-body'></div>
            <div className='home-container-nav'>

                <div className='home-container-nav-top'>
                </div>

                <div className='home-container-nav-bottom'>

                    <div className='home-container-nav-bottom-left'>
                        <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} to='/'>
                            <div className='home-container-nav-bottom-text'>Aureus</div>
                            <img src="../../public/Images/Logo/aureus_logo.png" height={60} width={60} alt="" srcset="" />
                        </Link>
                    </div>

                    <div className='home-container-nav-bottom-center'>

                        <Link className='icon-text-home'>
                            <Menu/>
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
                        <button style={{  backgroundColor: 'var(--color-gold)',color: 'var(--color-bg-card)'}} className='home-container-nav-bottom-button home-container-nav-bottom-button-get-started'>Get Started</button>
                        <button style={{  backgroundColor: 'var(--color-bg-card)',color: 'var(--color-accent)'}} className='home-container-nav-bottom-button'>Sign In</button>
                    </div>

                </div>
            </div>

            <div className='home-container-main'>
                
            </div>
        </>
    )
}

export default Home