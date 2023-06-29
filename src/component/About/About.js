import React, { useState } from 'react';
import contact1 from '../../images/contact1.png';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Footer/Footer';

const About = () => {
        const openSocialMedia = (url) => {
            window.open(url, '_blank');
        };

    return (
        <>
            <section className='Contact' id='contact'>
                <div className='container top'>
                    <div className='heading text-center'>
                        <h4>CONTACT</h4>
                        <h1>Contact With Me</h1>
                    </div>

                    <div className='content d_flex'>
                        <div className='right box_shodow'></div>{' '}
                        <div className='left'>
                            <div className='box box_shodow'>
                                <div className='img'>
                                    <img src={contact1} alt='' />
                                </div>
                                <div className='details'>
                                    <h1>Nevine Acotanza</h1>
                                    <p>Chief Operating Officer</p>
                                    <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                                    <p>Phone: +01234567890</p>
                                    <p>Email: admin@example.com</p> <br />
                                    <span>FIND WITH ME</span>
                                    <div className='button f_flex'>
                                        <button className='btn_shadow' onClick={() => openSocialMedia('https://www.facebook.com/abhisheksagarp')}>
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </button>
                                        <button className='btn_shadow' onClick={() => openSocialMedia('https://www.instagram.com/abhisheksagarp/')}>
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </button>
                                        <button className='btn_shadow' onClick={() => openSocialMedia('https://twitter.com/abhisheksagarp')}>
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
