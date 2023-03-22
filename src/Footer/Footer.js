import React from 'react';
import style from "./Footer.module.css"
import Foot from "./Foot/Foot";
import styleContainer from './../Common/Styles/Container.module.css'

const Contact = () => {
    return (
        <div className={style.footerBlock}>
            <div className={styleContainer.container}>
                <h2 className={styleContainer.title}>Resume</h2>
                <div className={style.footer}>
                    <Foot />
                    <Foot />
                    <Foot />
                    <Foot />

                </div>
                <h3 className={style.titleFooter}>Усе права Засчешчэны</h3>

            </div>
        </div>
    );
};

export default Contact;