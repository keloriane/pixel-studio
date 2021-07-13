import React, {useEffect} from 'react';
import logo from './react.svg';
import './Home.css';
import Header from "./components/Header";
import Home_About from "./components/Home_About";
import Home_Projects from "./components/Home_Projects";
import Home_Service from "./components/Home_Service";
import Home_Contact from "./components/Home_Contact";
import NavBar from "./components/common/NavBar";
import CursorAnimation from "./components/common/Cursor";
import Footer from "./components/Footer";




const Home =() => {
    useEffect(() => {


    }, [])
    return (
        <div>
            <div  id={'page'}>
                <CursorAnimation />
                <NavBar/>
                <Header/>
                <Home_About/>
                <Home_Projects/>
                <Home_Service/>
                <Home_Contact/>
                <Footer/>
            </div>
        </div>
    );
}

export default Home;
