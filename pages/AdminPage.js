import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Logo from "../public/pylampLogo.png";
import { useState } from 'react';
import YouTube from "@material-ui/icons/YouTube";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import { Button, Card,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@material-ui/core';
import { Router, useRouter } from 'next/dist/client/router';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import FormPage from "../pages/FormPage";
import DefaultForm from "../FormContainer/DefaultForm";
import Navbar from "../pages/Navbar";

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
    
    const defaultBtn = () => {
        document.getElementById("btn").style = ''
    }

    const clickHandler = () => {
        const flipDiv = window.location='#formContainers';
    }
return (

<div className={styles.adminContainer}>
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

        

        <div className={styles.cardContainer}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={12} md={4} sm={12} className={styles.cardGrid}>
                    <Card className={styles.adminCard}>
                            <h1 className={styles.cardHeader}>Default Form</h1><br />
                            
                            <p className={styles.cardBody}>
                                Default form is predefined form for instant use. We structure this template based upon your past 
                                requirements. Eventhough you can edit this template.
                            </p>

                            <Button style={{fontSize:"1rem",color:"grey",float:"right",}} onClick={clickHandler}>USE 🎯</Button>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={12} className={styles.cardGrid}>
                    <Card className={styles.adminCard}>
                            <h1 className={styles.cardHeader}>Hackerrank</h1><br />
                            
                            <p className={styles.cardBody}>
                                Hackerrank template is used to scrab event result data from Hackerrank site. This feature simplify 
                                your work, no need to maintain attendance manually for hackerrank.
                            </p>

                            <Button style={{fontSize:"1rem",color:"grey",float:"right",}} onClick={clickHandler}>USE 🎯</Button>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={12} className={styles.cardGrid}>
                    <Card className={styles.adminCard}>
                        
                            <h1 className={styles.cardHeader}>New Form</h1><br />
                            
                            <p className={styles.cardBody}>
                                New form template is for your own creation of your form. Any other prefefined content was not placed in this 
                                template. Create your form from Scratch!
                            </p>

                            <Button style={{fontSize:"1rem",color:"grey",float:"right"}} onClick={clickHandler}>USE 🎯</Button>
                    </Card>
                </Grid>
            </Grid><hr style={{width:"50%",alignContent:"center"}}/>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle className={styles.alertDialogTitle}>
                    Comfirmative dialog!!
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are You Sure Ready For The Launch
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button autoFocus>
                        Launch🚀
                    </button>
                    <button onClick={handleClose} autoFocus>
                        Close
                    </button>
                </DialogActions>
            </Dialog>
        </div>

        <div className={styles.formContainer} id="formContainers">
            <DefaultForm />
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
