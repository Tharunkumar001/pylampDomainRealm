import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Logo from "../public/pylampLogo.png";
import { useState } from 'react';
import YouTube from "@material-ui/icons/YouTube";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@material-ui/core';
import { Router, useRouter } from 'next/dist/client/router';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import EdiText from 'react-editext';
import { Send } from '@material-ui/icons';
import HomeIcon from "@material-ui/icons/Home";
import RefreshIcon from "@material-ui/icons/Refresh";

export default function HomePage() {

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

<div className={styles.adminContainer}>
    <Head>
        <title>Domain Realm</title>
        <meta name="description" content="Web development session" />
        <link rel="icon" href="/pylampLogo.png" />
    </Head>

    <main className={styles.adminMain}>
        <h1>HomePage</h1>
    </main>

    <footer className={styles.footer}>
        <a href="https://www.youtube.com/channel/UCJBaFNQuwfYXHDkICKpMYsg" target="blank"><YouTube  style={{color:'white'}}/></a>
        <a href="https://linkedin.com/in/pylampofficial" target="blank"><LinkedIn style={{color:'white'}}/></a>
        <a href="https://instagram.com/pylamp_official_" target="blank"><Instagram style={{color:'white'}}/></a>
    </footer>
    </div>
  )
}
