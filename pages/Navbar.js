import { Button } from '@material-ui/core';
import { useState } from "react";
import styles from '../styles/Home.module.css';
import Logo from "../public/pylampLogo.png";
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import cogoToast from 'cogo-toast';
import axios from 'axios';
import cookie from 'react-cookies'
import ProfileIcon from "@material-ui/icons/Person";

export default function Layout({children}){

    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);
    const router = useRouter();
    const routeAdmin = async() =>
    {
        const promtValue = await prompt("Pylamp Password",null);
        const apiCall = await axios.post("https://pylamp-official.vercel.app/api/attendanceHandler",{promtValue:promtValue});
        cookie.save("adminAllow",apiCall.data);
        (apiCall.data)? router.push("/AdminPage"): cogoToast.error("Enter Valid Password");
    }
    return <> 
            <div className={styles.NavDiv}>
            <nav className={styles.navbar}>
                
                <Image src={Logo} alt="logo" width="50rem" height="50rem" />
                <h1 style={{
                    color:"#C8B08A"
                }}>Pylamp</h1>

                <ul className={isOpen === false ? 
                        styles.navmenu : styles.navmenu +' '+ styles.active}>
                    <li className={styles.navitem}>
                        <Button onClick={routeAdmin} style={{
                            color:"white",
                            fontFamily:"monospace",
                        }}>Admin</Button>
                    </li>
                    <li className={styles.navitem}>
                        <Button onClick = {() => router.push("/Events")} style={{
                            color:"white",
                            fontFamily:"monospace"
                        }}>Events</Button>
                    </li>
                    <li className={styles.navitem}>
                        <Button onClick = {() => router.push("/FormPage")} style={{
                            color:"white",
                            fontFamily:"monospace"
                        }}>Attendance</Button>
                    </li>
                    <li className={styles.navitem}>
                        <Button onClick = {() => router.push("/Profile")} style={{
                            color:"white",
                            border:"0.1rem solid white"
                        }}><ProfileIcon /></Button>
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