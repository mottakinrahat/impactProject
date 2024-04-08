import React from 'react';
import Navbar from '../component/shared/Navbar/Navbar';
import Footer from '../component/shared/Footer/Footer';

const CommonLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default CommonLayout;