import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import ScrollToTop from '../component/ScrollToTop';

const Main = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;