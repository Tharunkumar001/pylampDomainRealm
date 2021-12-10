import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Logo from "../public/pylampLogo.png";
import { useState } from 'react';
import YouTube from "@material-ui/icons/YouTube";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import axios from 'axios';
import cogoToast from 'cogo-toast';

export default function Final() {

return (
    <div className={styles.container}>
        <Head>
            <title>Domain Realm</title>
            <meta name="description" content="Web development session" />
            <link rel="icon" href="/pylampLogo.png" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
            Welcome to Pylamp!
            </h1>
            
            <h3>Domain Realm Series - II</h3>

            <p className={styles.description}>
                We Are Here For You{' '}<br />
                <Image src={Logo} alt="logo" width="152rem" height="152rem"/>
            </p>

            <h4>Thanks for your presence. Hapieee learning!!</h4>
        </main>
        
        <footer className={styles.footer}>
            
            <a href="https://youtu.be/dG4DGVikMpU"><YouTube /></a>
            <a href="www.linkedin.com/in/pylampofficial"><LinkedIn /></a>
            <a href=""><Instagram /></a>
        </footer>

    </div>
)
}
