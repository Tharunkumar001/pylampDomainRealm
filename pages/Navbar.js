import { AppBar, Button, Toolbar } from '@material-ui/core';
import Link from 'next/link'
import { useState } from "react";
import styles from '../styles/Home.module.css';
import Logo from "../public/pylampLogo.png";
import Image from 'next/image';

export default function Layout({children}){

    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);
    return <> 
            <div className={styles.NavDiv}>
            <nav className={styles.navbar}>
                
                <Image src={Logo} alt="logo" width="50rem" height="50rem" />
                <h1>Pylamp</h1>

                <ul className={isOpen === false ? 
                        styles.navmenu : styles.navmenu +' '+ styles.active}>
                    <li className={styles.navitem}>
                        <Button>Admin</Button>
                    </li>
                    <li className={styles.navitem}>
                        <Button>Events</Button>
                    </li>
                    <li className={styles.navitem}>
                        <Button>Contact</Button>
                    </li>
                    <li className={styles.navitem}>
                        <Button>Profile</Button>
                    </li>
                </ul>
                <button className={isOpen === false ? 
                                    styles.hamburger : styles.hamburger+' '+styles.active}
                                    onClick={openMenu}
                                    >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
                </nav>
                
            </div>
                
        </>
}