import React from "react";
import Header from "../components/layout/Header.js";
import Footer from "../components/layout/Footer.js";
import Banner from "../components/sections/Banner.js";
// import TopNav from "../components/sections/TopNav"; 
// import Baseballfield from '../assets/images/Baseballfield.jpg';

const FAQ = () => {
    return (
        <>
            {/* <TopNav /> */}

            <Header />
            <Banner>
                FAQ Page
            </Banner>
            <div className="main-content">

            <div> For any questions please contact PortfolioFAQ@gmail.com or dial 123-456-7890 </div>

            </div>

            <Footer />
        </>
    );

};

export default FAQ;