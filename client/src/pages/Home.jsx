import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import LandingPageNav from '../components/Navbars/LandingPagenav';

function Home() {


    return (
        <>
            <LandingPageNav/>
            <div className='home-container-main'>
                <div className="main-bg-text">Aureus</div>

                <div className="main-hero-section">
                    <h1 className="hero-headline">
                        Where <span className="hero-gradient">discipline</span> meets <span className="hero-gradient">distinction</span>.
                    </h1>
                    <p className="hero-subtext">
                        Elevate your financial journey.<br />
                        <span className="hero-highlight">Master your money, master your future.</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home