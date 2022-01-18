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
import cogoToast from 'cogo-toast';

const FormPage = (props) => {
    const [eventDetails, setValue] = useState({header:"Undefined",about:"Undefined",period:"Undefined", formType: "Default"});
    const [data, setData] = useState({ name: "", rollNo: "", class: "NA", event:eventDetails.header });
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const formId = localStorage.getItem("currentFormId");
            const api = await axios.put("https://pylamp-domain-realm.vercel.app/api/setForm",{formId:formId});
            
            if(api.status === 200){
                setValue({...eventDetails, header: api.data[0].eventName, 
                    about: api.data[0].about, period: api.data[0].period
                });
            }else{
                cogoToast.error("Something Went Wrong");
            }
        })()
    },[]);

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(data);
        let rollNoLength = data.rollNo.length;

    const validateRollNo = (rollNoLength === 8) ? false : true;
    const validateclass = (data.class !== "NA") ? false : true;

    if (!validateRollNo && !validateclass) {
        axios.post("https://pylamp-domain-realm.vercel.app/api/formHandler", data).then((res) => {
        //https://pylamp-domain-realm.vercel.app/  
        setLoading(true);
        if (res.data == false) {
            setLoading(false);
            cogoToast.info("already you marked your attendance", { position: 'bottom-center' });

            setTimeout(() => {
                handleOpen();
            }, 3000);

        } else {
            setLoading(false);
            handleOpen();
        }
    })
    } else {
        cogoToast.info("Enter valid RollNo or Class");
    }
}

    const handleClose = () => {
        setOpen(false);
    }
    
    const handleOpen = () => {
        setOpen(true);
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
        {/* <h3 className={styles.period}>{eventDetails.period}</h3> */}

            <h4 className={styles.header}>
                <h3>{eventDetails.header}</h3><br />
            </h4>
        </div>

        <div className={styles.form}>
        <label>
        <h2>🎯</h2>

            <form className={styles.formLabel} onSubmit={submitHandler}>

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
            Well Done Folks!!!!
        </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
            Successfully your attendance marked..
        </DialogContentText>
        </DialogContent>
        <DialogActions>
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