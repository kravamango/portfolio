import React from 'react';
import style from './Nav.module.css'
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <div className={style.nav}>

            <div>
                <NavLink to='/About' className={navData => navData.isActive ? style.active : style.item}>About</NavLink>
            </div>
            <div>
                <NavLink to='/footer' className={navData => navData.isActive ? style.active : style.item}>Resume</NavLink>
            </div>
            <div>
                <NavLink to='/Skills' className={navData => navData.isActive ? style.active : style.item}>Skills</NavLink>
            </div>
            <div>
                <NavLink to='/myWorks' className={navData => navData.isActive ? style.active : style.item}>MyWorks</NavLink>
            </div>

            <div>
                <NavLink to='/contact' className={navData => navData.isActive ? style.active : style.item}>Contact</NavLink>
            </div>


        </div>
    );
};

export default Nav;
