import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../../images/logo1.png';
import './header.css';

const Header = () => {
    // fixed Header
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        header.classList.toggle('active', window.scrollY > 100);
    });
    // Toogle Menu
    const [Mobile, setMobile] = useState(false);
    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        <img src={logo} width='80px' alt='' />
                    </div>

                    <div className='navlink'>
                        <ul className={Mobile ? 'nav-links-mobile' : 'link f_flex uppercase'} onClick={() => setMobile(false)}>
                            <li>
                                <Link to='/'>home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/features'>features</Link>
                            </li>
                            <li>
                                <Link to='/portfolio'>portfolio</Link>
                            </li>
                            <li>
                                <Link to='/poetry'>Poetry</Link>
                            </li>
                            <li>
                                <Link to='/vidoes'>Vidoes</Link>
                            </li>
                            <li>
                                <Link to='/blog'>blog</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li>
                                <Link to='/bookShow' className='home-btn'>
                                    BOOK NOW
                                </Link>
                            </li>
                        </ul>

                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                        </button>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    );
};

export default Header;
