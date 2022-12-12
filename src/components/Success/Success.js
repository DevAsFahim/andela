import React from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import SuccessBanner from './SuccessBanner/SuccessBanner';

const Success = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SuccessBanner></SuccessBanner>
            <Footer></Footer>
        </div>
    );
};

export default Success;