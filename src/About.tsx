import React from 'react';
import About_Header from "./components/About_Header";
import About_Technologies from "./components/About_Technologies";
import About_Software from "./components/About_Software";
import Footer from "./components/Footer";
import Home_Contact from "./components/Home_Contact";
import NavBar from "./components/common/NavBar";
import CursorAnimation from "./components/common/Cursor";



const About = () => {
    return (
    <div id="about">
        <CursorAnimation />
        <NavBar />
        <About_Header />
        <About_Technologies />
        <About_Software />
        <Home_Contact />
        <Footer />
    </div>
    )
}
export default About;
