import React from 'react';
import style from "./Footer.module.css"
import Foot from "./Foot/Foot";

const Contact = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h2 className={style.title}>Footer</h2>
                <div className={style.footer}>
                    <Foot />
                    <Foot />
                    <Foot />
                    <Foot />

                </div>
                <h3>Усе права Засчешчэны</h3>

            </div>
        </div>
    );
};

export default Contact;