import React from 'react';
import style from './Header.module.css'
import Nav from "../Nav/Nav";
import Main from "../About/About";
import Skills from "../Skills/Skills";
import MyWorks from "../MyWorks/MyWorks";
import Contact from "../Contact /Contact";
import Footer from "../Footer/Footer";

const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Contact/>
            <Footer/>

        </div>
    );
};

export default Header;
