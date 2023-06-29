import React from "react"
import './Poetry.css';
import PoetryApi from '../../services/PoetryApi';
import PoetryCard from './PoetryCard';
import Footer from "../Footer/Footer"

const Poetry = () => {
    return (
        <>
            <section className='Resume' id='resume'>
                <div className='container top'>
                    <div className='heading text-center'>
                        <h4>7+ YEARS OF EXPERIENCE</h4>
                        <h1>My Resume</h1>
                    </div>

                    <div className='content-section mtop d_flex'>
                        <div className='left'>
                            <div className='heading'>
                                <h4>2007-2010</h4>
                                <h1>Education Quality</h1>
                            </div>

                            <div className='content'>
                                {PoetryApi.map((val, id) => {
                                    if (val.category === 'education') {
                                        return <PoetryCard key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />;
                                    }
                                })}
                            </div>
                        </div>
                        <div className='left'>
                            <div className='heading'>
                                <h4>2007-2010</h4>
                                <h1>Job Experience</h1>
                            </div>

                            <div className='content'>
                                {PoetryApi.map((val, index) => {
                                    if (val.category === 'experience') {
                                        return <PoetryCard key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />;
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Poetry;
