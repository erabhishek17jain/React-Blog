import React from 'react';
import logo1 from '../../images/logo2.png';
import './Footer.css';

const Footer = () => {
    
    return (
        <>
            <footer>
                <div className='conatiner text-center top'>
                    <div className='img'>
                        <img src={logo1} width='100px' alt='' />
                    </div>
                    <p>© 2021. All rights reserved by Abhishek Jain Sagar.</p>
                </div>
                
            </footer>
        </>
    );
};

export default Footer;
