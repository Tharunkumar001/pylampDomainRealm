/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Logo from "../../public/pylampLogo.png";
import EdiText from 'react-editext';
import { useState } from 'react';
import YouTube from "@material-ui/icons/YouTube";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import {Button,CircularProgress,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid,} from '@material-ui/core';
import axios from "axios";
import { useRouter } from 'next/dist/client/router';

export default function NewForm() {
    const [data, setData] = useState({ name: "", rollNo: "", class: "NA" });
    const [eventDetails, setValue] = useState({header:"Event Name",about:"About",period:"Enter Date"});
    const [formId, setFormId] = useState();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const handleClose = () => {
        setOpen(false);
    }
    
    const handleOpen = () => {
        setOpen(true);
    }

    const handleLaunch = async() => {

    setLoading(true);
    const res = await axios.post("https://pylamp-official.vercel.app/api/setForm",{eventDetails: eventDetails});

    setTimeout(() => {
        setLoading(false);
        localStorage.setItem("currentFormId",res.data);
        router.push(`/FormPage`)
    },3000);
    }

return (
    <div className={styles.defaultForm}>
        <h1 style={{textAlign:"center",color:"rgb(71, 74, 218)",}}>New form</h1>
        {/* <button className={styles.setBtn} onClick={() => setOpen(true)}>SET</button> */}

        <div>
            <div>
                <Grid container  >
                    <Grid item xs={12} sm={12} md={12} className={styles.cardGrid}>
                        <button className={styles.newFormBtnRow}>Create</button>
                    </Grid>
                </Grid>
            </div>
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
)
}
