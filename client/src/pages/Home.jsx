import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import { HomeIcon, Dollar, Menu, Book, Chat, Crown, MagnifyingGlass } from '../components/icons/Icons';

function Home() {


    return (
        <>
            <div className='home-body'></div>
            <div className='home-container-nav'>

                <div className='home-container-nav-top'>
                    {/* left side */}
                    <div className='nav-top-left'>
                        <button style={{ background: 'var(--color-gold)', color: 'var(--color-bg-main)' }} className='home-container-nav-bottom-button home-container-nav-bottom-button-golden-effect'>
                            <Crown height={24} width={24} />
                            <span>Become a Member</span>
                        </button>
                    </div>
                    {/* center */}
                    <div className='nav-top-center'>
                        <MagnifyingGlass className='MagnifyingGlass' />
                        <input className='nav-top-center-search-input'
                            placeholder='Search' type="text" name="search" autoComplete="off" />
                    </div>
                    {/* right side */}
                    <div className='nav-top-right'>
                        <HomeIcon />
                    </div>
                </div>

                {/* make sure 23:10 */}

                <div className='home-container-nav-bottom'>

                    <div className='home-container-nav-bottom-left'>
                        <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} to='/'>
                            <img src="../../public/Images/Logo/aureus_logo.png" height={60} width={60} alt="" srcset="" />
                            <div className='home-container-nav-bottom-text'>Aureus</div>
                        </Link>
                    </div>

                    <div className='home-container-nav-bottom-center'>

                        <Link className='icon-text-home'>
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

            <div className='home-container-main'>

            </div>
        </>
    )
}

export default Home