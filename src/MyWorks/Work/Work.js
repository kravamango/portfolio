import React from 'react';
import style from './Work.module.css'

const Work = (props) => {
    return (
        <div className={style.workBlock}>
            <div className={style.icon}>

            </div>
            <h3>{props.title}</h3>
            <div className={style.discription}>{props.discription}</div>
        </div>
    );
};

export default Work;
