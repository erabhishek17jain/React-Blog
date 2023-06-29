import React from 'react';
import logo1 from '../../images/logo2.png';
import Footer from '../Footer/Footer';

const NoPage = () => {
    return (
        <>
            <section>
                <div className='conatiner text-center top'>
                    <div className='img'>
                        <img src={logo1} width='100px' alt='' />
                    </div>
                    <p>Page not Found.</p>
                </div>
            </section>
        </>
    );
};

export default NoPage;
