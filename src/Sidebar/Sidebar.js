import React, {useState } from 'react';
import style from './Sidebar.module.css'
import myAvatar from '../assets/images/my-avatar.png'
import facebook from '../assets/icons/facebook.svg'
import telegram from '../assets/icons/telegram.svg'
import instagram from '../assets/icons/instagram.svg'
import mail from '../assets/icons/mail.svg'
import tel from '../assets/icons/phone.svg'
import calendar from '../assets/icons/calendar.svg'
import location from '../assets/icons/location.svg'



const Sidebar = () => {

    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)
    let superButton = () => {

        if (open === false) {
            superButton = handleOpen();
        }
        else {
            superButton = handleClose();
        }
    }

    const sidebarClass = style.sidebar
        + (open ? ' ' + style.open : '')

    const sidebarInfo = style.sidebarInfo
        + (open ? ' ' + style.sidebarInfoOpen : '')






    console.log(open)
    return (
        <>
            {open && <div className={style.background} onClick={superButton}/>}


            <div className={sidebarClass}>
                <div className={style.sidebarBaseInfo}>
                    <div className={style.avatarBox}>
                        <img src={myAvatar}/>
                    </div>
                    <div className={style.textXlCenter}>
                        <h3 className={style.name}>Krauchuk Vitali</h3>
                        <div className={style.title}>Frontend Developer</div>
                    </div>

                    <button className={style.btnShowContact} onClick={superButton}>

                        <span>Show Contacts</span>

                    </button>
                </div>
                <div className={sidebarInfo}>

                    <ul className={style.detailsInfo}>
                        <li className={style.detailsInfoItem}>
                            <div className={style.sidebarInfoBox}>
                                <div className={style.imgBlock}>
                                    <img src={mail}/>
                                </div>
                                <div className={style.contactBlock}>
                                    <span className={style.overHead}>Email</span>
                                    <a href={'#'}>kravamango@gmail.com</a>
                                </div>
                            </div>
                        </li>

                        <li className={style.detailsInfoItem}>
                            <div className={style.sidebarInfoBox}>
                                <div className={style.imgBlock}>
                                    <img src={tel}/>
                                </div>
                                <div className={style.contactBlock}>
                                    <span className={style.overHead}>Phone</span>
                                    <a href={'#'}>+375 (29) 800-92-64</a>
                                </div>
                            </div>
                        </li>

                        <li className={style.detailsInfoItem}>
                            <div className={style.sidebarInfoBox}>
                                <div className={style.imgBlock}>
                                    <img src={calendar}/>
                                </div>
                                <div className={style.contactBlock}>
                                    <span className={style.overHead}>Birthday</span>
                                    <a href={'#'}>June 1, 1999</a>
                                </div>
                            </div>
                        </li>

                        <li className={style.detailsInfoItem}>
                            <div className={style.sidebarInfoBox}>
                                <div className={style.imgBlock}>
                                    <img src={location}/>
                                </div>
                                <div className={style.contactBlock}>
                                    <span className={style.overHead}>Location</span>
                                    <a href={'#'}>Brest, Belarus</a>
                                </div>
                            </div>
                        </li>

                    </ul>

                    <div className={style.social}>
                        <a href={'https://www.facebook.com/100005448701666'} target="_blank"><img src={facebook}/></a>
                        <a href={'https://t.me/kravamango'} target="_blank"><img src={telegram}/></a>
                        <a href={'https://www.instagram.com/kravamango/'} target="_blank"><img src={instagram}/></a>

                    </div>
                </div>
            </div>
        </>


    );
};

export default Sidebar;
