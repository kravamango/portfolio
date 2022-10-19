import React from 'react';
import style from './Foot.module.css'


const Foot = (props) => {
    return (
        <div className={style.footBlock}>
            <div className={style.icon}>
            </div>
            <h3>{props.title}</h3>
            <div className={style.discription}>{props.discription}</div>
        </div>
    );
};

export default Foot ;
