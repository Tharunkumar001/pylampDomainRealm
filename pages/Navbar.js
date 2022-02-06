import { Button } from '@material-ui/core';
import { useState } from "react";
import styles from '../styles/Home.module.css';
import Logo from "../public/pylampLogo.png";
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import cogoToast from 'cogo-toast';
import axios from 'axios';
import cookie from 'react-cookies'

export default function Layout({children}){

    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);
    const router = useRouter();
    const routeAdmin = async() =>
    {
        const promtValue = await prompt("Pylamp Password",null);
        const apiCall = await axios.post("https://pylamp-domain-realm.vercel.app/api/attendanceHandler",{promtValue:promtValue});
        cookie.save("adminAllow",apiCall.data);
        (apiCall.data)? router.push("/AdminPage"): cogoToast.error("Enter Valid Password");
    }
    return <> 
            <div className={styles.NavDiv}>
            <nav className={styles.navbar}>
                
                <Image src={Logo} alt="logo" width="50rem" height="50rem" />
                <h1>Pylamp</h1>

                <ul className={isOpen === false ? 
                        styles.navmenu : styles.navmenu +' '+ styles.active}>
                    <li className={styles.navitem}>
                        <Button onClick={routeAdmin}>Admin</Button>
                    </li>
                    <li className={styles.navitem}>
                        <Button onClick = {() => router.push("/Events")}>Events</Button>
                    </li>
                    <li className={styles.navitem}>
                        <Button onClick = {() => router.push("/FormPage")}>Attendance</Button>
                    </li>
                    <li className={styles.navitem}>
                        <Button onClick = {() => router.push("/Profile")}>Profile</Button>
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