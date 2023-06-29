import React from 'react';
import Header from './component/Header/Header';
import Features from './component/Features/Features';
import Home from './component/Home/Home';
import Portfolio from './component/Portfolio/Portfolio';
import Poetry from './component/Poetry/Poetry';
import Testimonial from './component/Testimonial/Testimonial';
import Blogs from './component/Blogs/Blogs';
import Contact from './component/Contact/Contact';
import NoPage from './component/NoPage/NoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BookNow from './component/BookNow/BookNow';
import About from './component/About/About';
import Footer from './component/Footer/Footer';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Header />}>
                        <Route index element={<Home />} />
                        <Route path='about' element={<About />} />
                        <Route path='features' element={<Features />} />
                        <Route path='portfolio' element={<Portfolio />} />
                        <Route path='poetry' element={<Poetry />} />
                        <Route path='clients' element={<Testimonial />} />
                        <Route path='blog' element={<Blogs />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='bookShow' element={<BookNow />} />
                        <Route path='*' element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
};

export default App;
