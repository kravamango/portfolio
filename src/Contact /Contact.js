import React from 'react';
import style from "./Contact.module.css"

const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={style.contactContainer}>
                <h2 className={style.title}>Contact</h2>
                    <div className={style.contact}>
                        <form className={style.form}>
                            <input type="text"/>
                            <input type="text" />
                            <textarea />
                        </form>
                        <div>
                            <button>отправить</button>
                        </div>
                    </div>

            </div>

        </div>
    );
};

export default Contact;
