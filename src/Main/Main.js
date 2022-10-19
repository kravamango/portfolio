import React from 'react';
import style from './Mail.module.css'
import styleContainer from './../Common/Styles/Container.module.css'


const Main = () => {
    return (
        <div className={style.mainblock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>Im Vitali Krauchuk</h1>
                    <p>Frontend Developer.</p>

                </div>
                <div className={style.photo}>

                </div>
            </div>



        </div>

    );
};

export default Main;
