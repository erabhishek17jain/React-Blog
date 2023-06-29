import React from 'react';
import './Home.css';
import hero from '../../images/hero.png';
import skill1 from '../../images/logo1.png';
import skill2 from '../../images/logo2.png';
import skill3 from '../../images/logo3.jpg';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMusic, faMicrophone, faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const openSocialMedia = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <section className='hero' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>
                        <h3>WELCOME TO THE WORLD OF</h3>
                        <h1>
                            <span>Abhishek Jain Sagar</span>
                        </h1>
                        <h2>
                            a
                            <span>
                                <Typewriter
                                    words={[' Writer.', ' Poet.', ' Lyricist.']}
                                    loop
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h2>

                        <p>
                            A young writer of Hindi poems, who has become the heartbeat of young hearts. This young man, who started with social topics, brought
                            the tradition of singing in Hindi forums in Shringar Ras and started attracting the audience with his melodious voice.
                        </p>

                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>FIND WITH ME</h4>
                                <div className='button'>
                                    <button className='btn_shadow' onClick={() => openSocialMedia('https://www.facebook.com/abhisheksagarp')}>
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </button>
                                    <button className='btn_shadow' onClick={() => openSocialMedia('https://www.instagram.com/abhisheksagarp/')}>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </button>
                                    <button className='btn_shadow' onClick={() => openSocialMedia('https://twitter.com/abhisheksagarp')}>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </button>
                                    <button className='btn_shadow' onClick={() => openSocialMedia('https://wa.me/9770080418')}>
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </button>
                                    <button className='btn_shadow' onClick={() => openSocialMedia('https://t.me/abhisheksagarp')}>
                                        <FontAwesomeIcon icon={faTelegram} />
                                    </button>
                                </div>
                            </div>
                            <div className='col_1'>
                                <h4>BEST SKILL ON</h4>
                                <button className='btn_shadow'>
                                    <img src={skill1} alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <FontAwesomeIcon icon={faMusic} />
                                </button>
                                <button className='btn_shadow'>
                                    <FontAwesomeIcon icon={faMicrophoneAlt} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='right_img'>
                            <img src={hero} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
