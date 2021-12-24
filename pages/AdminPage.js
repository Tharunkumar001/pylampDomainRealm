import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Logo from "../public/pylampLogo.png";
import { useState } from 'react';
import YouTube from "@material-ui/icons/YouTube";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import EdiText from 'react-editext';

export default function Home() {

    const [value,setValue] = useState({pylampSession:"pylampSession Attendance", solveMe:"Solve Me Attendance", 
    hackerRank:"Hackerrank Attendance", signatureEvent:"signatureEvent Attendance"});

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
        <div className={styles.Adminheader}>
            <Image src={Logo} alt="logo" width="50rem" height="50rem" />

            <h2 style={{display:"flex",justifyContent: "center"}}>Pylamp</h2>
        </div>

        <div >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={12} sm={6} className={styles.cardGrid}>
                    <Card className={styles.adminCard}>
                        <CardContent> 
                            <EdiText type="text" id="pylampSession" value={value.pylampSession} onSave={handleSave} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} className={styles.cardGrid}>
                    <Card className={styles.adminCard}>
                        <CardContent>
                            <EdiText type="text" id="pylampSession" value={value.solveMe} onSave={handleSave} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} className={styles.cardGrid}>
                    <Card className={styles.adminCard}>
                        <CardContent>
                            <EdiText type="text" id="pylampSession" value={value.hackerRank} onSave={handleSave} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} className={styles.cardGrid}>
                    <Card className={styles.adminCard}>
                        <CardContent>
                            <EdiText type="text" id="pylampSession" value={value.signatureEvent} onSave={handleSave} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    </main>

    <footer className={styles.footer}>
        <a href="https://www.youtube.com/channel/UCJBaFNQuwfYXHDkICKpMYsg" target="blank"><YouTube  style={{color:'white'}}/></a>
        <a href="https://linkedin.com/in/pylampofficial" target="blank"><LinkedIn style={{color:'white'}}/></a>
        <a href="https://instagram.com/pylamp_official_" target="blank"><Instagram style={{color:'white'}}/></a>
    </footer>



    </div>
  )
}
