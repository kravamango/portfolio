import React from 'react';
import style from "./Contact.module.css"
import styleContainer from "../Common/Styles/Container.module.css";


const Contact = () => {




    return (
        <div className={style.contactBlock}>
                <div className={styleContainer.container}>
                    <h2 className={styleContainer.title}>Contact</h2>


                    <div className={style.contact}>
                        <form className={style.form}>
                            <input type="text" value="Full name"/>
                            <input type="text" value="Email adress"/>

                        </form>
                        <textarea value="Your Message"/>
                        <div>
                            <button>отправить</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Contact;
