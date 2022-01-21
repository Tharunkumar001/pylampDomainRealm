import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Logo from "../public/pylampLogo.png";
import { useEffect, useState } from 'react';
import YouTube from "@material-ui/icons/YouTube";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import { Button, Card,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@material-ui/core';
import { Router, useRouter } from 'next/dist/client/router';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import FormPage from "../pages/FormPage";
import DefaultForm from "../pages/FormContainer/DefaultForm";
import Navbar from "../pages/Navbar";
import ScrollAnimation from 'react-animate-on-scroll';
import Aos from "aos";
import "aos/dist/aos.css";

export default function AdminPage() {

    useEffect(() => {
        Aos.init({
            duration:2000,
            throttleDelay: 99,
        })
    },[]);

return (

<div className={styles.homeContainer}>
    <Head>
        <title>Domain Realm</title>
        <meta name="description" content="Web development session" />
        <link rel="icon" href="/pylampLogo.png" />
    </Head>

    <main className={styles.homeMain}>
        <div>
            <AppBar>
                <Toolbar>
                    <Navbar />
                </Toolbar>
            </AppBar>
        </div><br /><br />

        <div className={styles.firstDiv}  data-aos="fade-up">
                <h1 className={styles.headerDiv} >LOGIC && LANGUAGE</h1>
                <p className={styles.motoDiv} >
                    Logic programming is a programming paradigm that is based on logic. 
                    This means that a logic programming language has sentences that follow logic, so that they express facts and rules.
                    Computation using logic programming is done by making logical inferences based on all available data.
                </p>
        </div>
        <ScrollAnimation animateIn="fadeIn">
            <div className={styles.motoDiv} data-aos="fade-left" >
                    <h1 >About Pylamp!!</h1>

                    <p className={styles.motoDiv}>
                        The Club PyLamp was developed to sow the seeds of coding, 
                        problem-solving, and domain knowledge among students. 
                        Mentoring sessions are conducted twice a week to build a consistent learning environment for students to help them master their coding skills. 
                        We conduct domain awareness programs to expose students to various fields of the industry. 
                        Personalized events are conducted regularly to check the understanding of students to organize future sessions accordingly.
                        Club Pylamp aims at making students confident in their programming skills and gets a clear vision to attain career growth.!!
                    </p>
            </div>
        </ScrollAnimation>
        

        <ScrollAnimation animateIn="fadeIn">
        <div className={styles.clubPostionDiv} data-aos="fade-up">
            <h1 style={{textAlign:"center", color:"white"}}>CLUB POSITIONS📝</h1>
            <Grid container spacing={2} className={styles.homeGrid}>
                <Grid p xs={12} md={4} sm={4}>
                    <ScrollAnimation animateIn="fadeIn">
                        <Card className={styles.adminCard}  data-aos="fade-left">
                            <h2 style={{margin:"0.5rem"}}>CLUB ADVISER</h2>
                            <h3  className={styles.cardHeader}>K. VIJAYA</h3><br />

                            <p className={styles.cardBody}>
                                One of the top most decision making authorities of the club.
                                Acts as a bridge between the department and the club.
                                Validate, coordinate and support the decisions of the team to attain the
                                motto of the club.
                            </p>
                        </Card><br />
                        <Card className={styles.adminCard}  data-aos="fade-right">
                            <h2 style={{margin:"0.5rem"}}>PYMENTOR</h2>

                            <h3 className={styles.cardHeader}>
                                HariHaran & Ruban & Sowbarnika & Harinisha & 
                                Sharmatha & Gokul & Tamilanjali
                            </h3><br />

                            <p className={styles.cardBody}>
                                The members who top the Eligibility test will be assigned as PyMentors
                                for the whole academic year.
                                Their role involves:
                                ❖ Maintaining the integrity of the members in their respective
                                classes.
                                ❖ Acts as bridge between their class and the club
                                ❖ Have rights to hammer any suggestions and opinions during
                                the discussion meet
                                ❖ Respect the advice on content, club maintenance and decisions
                                of the Governing Committee.
                                ❖ Handle and maintain the attendance of their class’s PYLAMP
                                members
                                ❖ Circulate the event information to their class members
                                Answerable to the Faculty Advisor, Grand Master, Tech Champ and
                                Senior PyMentors.
                            </p>
                        </Card><br />
                    </ScrollAnimation>

                    
                </Grid>
                <Grid p xs={12} md={4} sm={4}>
                    <ScrollAnimation animateIn="fadeIn">
                        <Card className={styles.adminCard} data-aos="fade-left">
                            <h2 style={{margin:"0.5rem"}}>GRAND MASTER</h2>

                            <h3  className={styles.cardHeader}>V.P JANANI</h3><br />

                            <p className={styles.cardBody}>
                                One of the top most decision making authorities of the club
                                Creates the agendas and hosts the club meetings in
                                consultation with the governing committee.
                                Presides over regular meetings of the club
                                Master of Ceremonies at club social events.
                                Coordinating the core team members and maintaining the club integrity
                                Answerable to the Faculty Advisor.
                            </p>
                        </Card><br />
                        
                        <Card className={styles.adminCard} data-aos="fade-right">
                            <h2 style={{margin:"0.5rem"}}>TECH WIZARD</h2>

                            <h3  className={styles.cardHeader}>G. THARUNKUMAR & M. UDAYA</h3><br />

                            <p className={styles.cardBody}>
                                Provides technical support to the team
                                Ensures the technical feasibility of the planned events
                                Create, publish and maintain weekly Hackerrank events.
                                Authorized to give suggestions in designing the structure of events and
                                curriculum if any.
                                Scrutiny of PyMentors, if they did not abide by the points mentioned in
                                Article V - Section II.
                                Answerable to the Faculty Advisor, Grand Master and Tech Champ
                            </p>
                        </Card><br />
                    </ScrollAnimation>
                
                </Grid>
                <Grid p xs={12} md={4} sm={4} >
                    <ScrollAnimation animateIn="fadeIn">
                        <Card className={styles.adminCard} data-aos="fade-left">
                            <h2 style={{margin:"0.5rem"}}>TECH CHAMP</h2>
                            <h3  className={styles.cardHeader}>P.NITHESHPRAWIN</h3><br />

                            <p className={styles.cardBody}>
                                One of the top most decision making authorities of the club.
                                Supports the Faculty Advisor and Grand Master in the decision making
                                process.
                                Designs the structure of events with the suggestions of core team
                                members and allot works to the team.
                                Provides support to Tech Wizards and validate the works of PyMentors
                                Answerable to the Faculty Advisor and Grand Master
                            </p>
                        </Card><br />
                        <Card className={styles.adminCard} data-aos="fade-right">
                            <h2 style={{margin:"0.5rem"}}>PY-MESSENGER</h2>

                            <h3  className={styles.cardHeader}>SANJAI</h3><br />

                            <p className={styles.cardBody}>
                                Maintaining the social media handles
                                Ensures uniform circulation of the event information to the club
                                members
                                Must also act as a PyMentor
                                Answerable to Faculty Advisor, Grand Master, Tech Champ and Tech
                                Wizard.
                            </p>
                        </Card><br />
                    </ScrollAnimation>

                </Grid>
            </Grid>
        </div>
        </ScrollAnimation>
        
    </main>

    <footer className={styles.footer}>
        <a href="https://www.youtube.com/channel/UCJBaFNQuwfYXHDkICKpMYsg" target="blank"><YouTube  style={{color:'white'}}/></a>
        <a href="https://linkedin.com/in/pylampofficial" target="blank"><LinkedIn style={{color:'white'}}/></a>
        <a href="https://instagram.com/pylamp_official_" target="blank"><Instagram style={{color:'white'}}/></a>
    </footer>
    </div>
)}
