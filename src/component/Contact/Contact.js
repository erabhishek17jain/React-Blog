import React, { useState } from 'react';
import contact1 from '../../images/contact1.png';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Footer/Footer';
require('dotenv').config();

const config = {
    Username: 'abhishek@yopmail.com',
    Password: '2BF88CFDE5A4401D1EB699A879E1B3713B4E',
    Host: 'smtp.elasticemail.com',
    Port: '2525',
    SecureToken: '0973746a-931b-484b-a797-c37d09f46b33',
    To: 'them@website.com',
    From: 'you@isp.com',
    Subject: 'This is the subject',
    Body: 'And this is the body',
};

const Contact = () => {
    const [emailData, setEmailData] = useState({
        fullname: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    });

    const openSocialMedia = (url) => {
        window.open(url, '_blank');
    };

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setEmailData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const formSubmit = (event) => {
        event.preventDefault();
        
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

                        <div className='right box_shodow'>
                            <form onSubmit={formSubmit}>
                                <div className='f_flex'>
                                    <div className='input row'>
                                        <span>YOUR NAME</span>
                                        <input type='text' name='fullname' value={emailData.fullname} onChange={InputEvent} />
                                    </div>
                                    <div className='input row'>
                                        <span>PHONE NUMBER </span>
                                        <input type='number' name='phone' value={emailData.phone} onChange={InputEvent} />
                                    </div>
                                </div>
                                <div className='input'>
                                    <span>EMAIL </span>
                                    <input type='email' name='email' value={emailData.email} onChange={InputEvent} />
                                </div>
                                <div className='input'>
                                    <span>SUBJECT </span>
                                    <input type='text' name='subject' value={emailData.subject} onChange={InputEvent} />
                                </div>
                                <div className='input'>
                                    <span>YOUR MESSAGE </span>
                                    <textarea cols='30' rows='10' name='message' value={emailData.message} onChange={InputEvent}></textarea>
                                </div>
                                <button className='btn_shadow'>
                                    SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
