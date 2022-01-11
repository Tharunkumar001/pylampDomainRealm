import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, IconButton, ListItem, Tab, Table } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import BoxIcon from "@material-ui/icons/AddBoxOutlined"
import ListIcon from "@material-ui/icons/ListAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import Image from 'next/image';
import DefaultForm from "../pages/FormContainer/DefaultForm";
import YouTube from "@material-ui/icons/YouTube";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import Logo from "../public/pylampLogo.png";
import Navbar from "../pages/Navbar";
import { AppBar, Toolbar } from '@material-ui/core';

const FormPage = (props) => {
    const [data, setData] = useState({ name: "", rollNo: "", class: "NA" });
    const [eventDetails, setValue] = useState({header:"Event Name",about:"About",period:"Enter Date"});
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const api = await axios.get("http://localhost:3000/api/setForm")
            
        })()
    
        return () => {
          unsubscribeOrRemoveEventHandler() // 👍 
        }
    },[])
    const handleClose = () => {
        setOpen(false);
    }
    
    const handleOpen = () => {
        setOpen(true);
    }

    const copyText = () => {
      var copyText = document.getElementById("pageId").innerText;

      navigator.clipboard.writeText(copyText);
      cogoToast.info("Text Copied to Clipboard");

      setTimeout(() => {
        router.push("/FormPage")
      },1000)
    }

    const handleLaunch = async() => {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/api/setForm",{eventDetails: eventDetails});
      console.log(res.data)
      setTimeout(() => {
        setLoading(false);
        document.getElementById("pageId").innerHTML = res.data;
      },3000);
    }
return (
    <div className={styles.formPage} style={{paddingTop:"1rem"}}>
        <AppBar>
            <Toolbar>
                <Navbar />
            </Toolbar>
        </AppBar>
    <div className={styles.formContainer}>

        <div className={styles.rowBtn} >
            <h4 className={styles.period}>
                <h3>Event Name</h3>
            </h4>

            
            <h4 className={styles.period}>
            <h3>Event period</h3>
            </h4>

            </div>
            <h4 className={styles.period}>
            <h3>Event about</h3>
            </h4>

        <div className={styles.form}>
        <label>
        <h2>🎯</h2>

            <form className={styles.formLabel}>

            <input placeholder="Name" autoComplete="off" value={data.name.trim()} type="text" name="inputForName" required className={styles.input}
                onChange={e => setData({ ...data, name: e.target.value })}
            /><br />

            <input placeholder="RollNo" autoComplete="off" value={data.rollNo.trim()} type="text" name="inputForName" required className={styles.input}
                onChange={e => setData({ ...data, rollNo: e.target.value })}
            /><br />
            {/* {error && <span>Enter your Full Pattern</span>} */}
            <select className={styles.input}
                onChange={e => setData({ ...data, class: e.target.value })} required>
                <option value="NA">CLASS</option>
                <option value="CSE3A">CSE3A</option>
                <option value="CSE3B">CSE3B</option>
                <option value="CSE5A">CSE5A</option>
                <option value="CSE5B">CSE5B</option>
            </select>
            <br />

            <button type="submit" className={styles.defaultBtn}>Submit <code>🏏</code></button>
            </form>
        </label>
        </div>

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
                    Are You Sure Ready For The Launch of Default Form
                </DialogContentText>

                <DialogContentText>
                    <span id="pageId"></span>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {(loading)? <CircularProgress />: null}
                <Button autoFocus onClick={handleLaunch}>
                    Launch🚀
                </Button>
                <Button onClick={handleClose} autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
        
    </div>

    <footer className={styles.homeFotter}>
        <a href="https://www.youtube.com/channel/UCJBaFNQuwfYXHDkICKpMYsg" target="blank"><YouTube  style={{color:'white'}}/></a>
        <a href="https://linkedin.com/in/pylampofficial" target="blank"><LinkedIn style={{color:'white'}}/></a>
        <a href="https://instagram.com/pylamp_official_" target="blank"><Instagram style={{color:'white'}}/></a>
    </footer>
</div>
)
}

export default FormPage;