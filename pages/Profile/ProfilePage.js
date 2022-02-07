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


const style={
    backgroundColor:"grey"
}
export default function ProfilePage() {
    const router = useRouter();

return (
    <div className={styles.container}>
        <Head>
            <title>Domain Realm</title>
            <meta name="description" content="Web development session" />
            <link rel="icon" href="/pylampLogo.png" />
        </Head>

        <h1>profilePage</h1>
    </div>
)
}
