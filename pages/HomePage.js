/* eslint-disable react/jsx-no-comment-textnodes */
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Logo from "../public/pylampLogo.png";
import { useState } from 'react';
import YouTube from "@material-ui/icons/YouTube";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import { Router, useRouter } from 'next/dist/client/router';

import Navbar from './Navbar';
import { AppBar, Grid, Toolbar } from '@material-ui/core';

export default function AdminPage() {
    const router = useRouter();
    const [sessionTopic,setTopic] = useState({pylampSession:"pylampSession Attendance", solveMe:"Solve Me Attendance", 
    hackerRank:"Hackerrank Attendance", signatureEvent:"signatureEvent Attendance"});
    
    const [aboutSession,setAbout] = useState({pylampSession:"About pylampSession", solveMe:"About Solve Me Session", 
    hackerRank:"About Hackerrank Session", signatureEvent:"About signatureEvent"});
    
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }
    
    const handleOpen = () => {
        setOpen(true);
    }

    const handleSave = (val) => {
        console.log(val);
    }
return (

<div className={styles.homeContainer}>
    <Head>
        <title>Domain Realm</title>
        <meta name="description" content="Web development session" />
        <link rel="icon" href="/pylampLogo.png" />
    </Head>

    <main className={styles.adminMain}>
        <div>
        <AppBar>
                <Toolbar>
                    <Navbar />
                </Toolbar>
            </AppBar>
        </div><br /><br />
            

        <div className={styles.pagContent}>
            <Grid container spacing={2} className={styles.contentPart1}>
                <Grid item xs={7}>
                    
                </Grid>
                <Grid item xs={5} >
                    <ul style={{listStyle:"none",margin: "0.5rem",paddingTop: "10%",fontWeight:"bold",fontSize: "1.5rem"}}>
                        <li style={{float: "left",paddingBottom: "1rem"}}>📍Weekly Session</li><br /><br />
                        <li style={{float: "right", }}>📍Domain Realm</li><br /><br />
                        <li style={{float: "left", }}>📍Java Rover</li><br /><br />
                        <li style={{float: "right", }}>📍Solve Me</li><br /><br />
                        <li style={{float: "left", }}>📍Problem Solving</li><br /><br />
                        <li style={{float: "right", }}>📍Hackerrank Contest</li>
                    </ul>
                </Grid>
            </Grid>
        </div>

    </main>

    <footer className={styles.homeFotter}>
        <a href="https://www.youtube.com/channel/UCJBaFNQuwfYXHDkICKpMYsg" target="blank"><YouTube  style={{color:'white'}}/></a>
        <a href="https://linkedin.com/in/pylampofficial" target="blank"><LinkedIn style={{color:'white'}}/></a>
        <a href="https://instagram.com/pylamp_official_" target="blank"><Instagram style={{color:'white'}}/></a>
    </footer>
    </div>
  )
}
