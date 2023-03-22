import React from 'react';
import style from './Skill.module.css'


const Skill = (props) => {
    return (
        <div className={style.skillBlock}>
            <div className={style.icon}>

            </div>
            <h3>{props.title}</h3>
            <div className={style.discription}>{props.discription}</div>
        </div>
    );
};

export default Skill ;



