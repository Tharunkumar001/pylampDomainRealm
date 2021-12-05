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

export default function Home() {
  const [data,setData] = useState({name:"",rollNo:"",class:""});
  const [open,setOpen] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/form",data);
    handleOpen();
  }

  const routeAttendancePage = () => {
    router.push("/Attendance")
  }

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

        <div className={styles.grid}>
          <label>
            <form className={styles.formLabel} onSubmit={submitHandler}>
              <input placeholder="Name" autoComplete="off" value={data.name.trim()} type="text" name="inputForName" required  className={styles.input}
                onChange={e => setData({...data, name:e.target.value})}
              /><br />

              <input placeholder="RollNo" autoComplete="off" value={data.rollNo.trim()} type="text" name="inputForName" required  className={styles.input}
                onChange={e => setData({...data, rollNo:e.target.value})}
              /><br />

              <select  className={styles.input} 
                onChange={e => setData({...data, class:e.target.value})} required>
                  <option value={data.class}>20CSE2A</option>
                  <option value={data.class}>20CSE2B</option>
              </select>    
              <br />

              <button type="submit" className={styles.submitButton}>Submit <code>🏏</code></button>
            </form>
          </label>
        </div>
      </main>

      <footer className={styles.footer}>
          
          <a href="https://youtu.be/dG4DGVikMpU"><YouTube /></a>
          <a href="www.linkedin.com/in/pylampofficial"><LinkedIn /></a>
          <a href=""><Instagram /></a>
      </footer>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle className={styles.alertDialogTitle}>
            Well Done Folks!!!!
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Successfully your attendance marked..
            </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={routeAttendancePage} autoFocus>
            Look🧐
        </Button>
        <Button onClick={handleClose} autoFocus>
            Close
        </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
