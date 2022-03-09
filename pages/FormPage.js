import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button} from '@material-ui/core';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import YouTube from "@material-ui/icons/YouTube";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import Navbar from "../pages/Navbar";
import cogoToast from 'cogo-toast';
import { useRouter } from 'next/dist/client/router';
import UnLock from "@material-ui/icons/LockOpen"
import Lock from "@material-ui/icons/Lock"
import cookie from 'react-cookies'

const FormPage = (props) => {
    const router = useRouter();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    const [eventDetails, setValue] = useState({header:"Undefined",about:"Undefined",
        period:"Undefined", formType: "Default",});
    const [data, setData] = useState({ name: "", rollNo: "", class: "NA", eventName:eventDetails.header, 
        eventId: "", formType: "Default", eventDate: today });
    const [open, setOpen] = useState(false);

    useEffect(() => {
        (async () => {
            const formId  = await prompt("Enter Event Id", localStorage.getItem("currentFormId"));
            
            try {
                const api = await axios.put("https://pylamp-official.vercel.app/api/setForm",{formId:formId});
                //https://pylamp-official.vercel.app/
                if(api.status === 200){
                    setValue({...eventDetails, header: api.data[0].eventName, 
                        about: api.data[0].about, period: api.data[0].period
                    });
                    setData({...data, eventId: formId, eventName: api.data[0].eventName});
                }else if(api.data === false){
                    cogoToast.error("Something Went Wrong");
                }
            } catch (error) {
                await cogoToast.error("Enter Valid Event Id");
                setTimeout(() => {
                    window.location.reload();
                },1000)
            }
        })()
    },[]);

    const submitHandler = (e) => {
        e.preventDefault()
        let rollNoLength = data.rollNo.length;

    const validateRollNo = (rollNoLength === 8) ? false : true;
    const validateclass = (data.class !== "NA") ? false : true;

    if (!validateRollNo && !validateclass) {
        axios.post("https://pylamp-official.vercel.app/api/formHandler", data).then((res) => {
        //https://pylamp-official.vercel.app/  
        // setLoading(true);
        if (res.data == false) {
            // setLoading(false);
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
    <div className={styles.formPage}>
        <div style={{backgroundColor:"#010003"}}>
            <Navbar />
        </div>
    <div className={styles.formContainer}>
        <div className={styles.rowBtn} >
            <h4 className={styles.header}>
                <h3>{eventDetails.header}</h3><br />
            </h4>
        </div>

        <div className={styles.form}>
        <label>
            <h2>🎯</h2>
            <form className={styles.formLabel} onSubmit={submitHandler} >

                <input placeholder="Name" autoComplete="off" value={data.name.trim()} type="text" name="inputForName" required className={styles.input}
                    onChange={e => setData({ ...data, name: e.target.value })}
                /><br />

                <input placeholder="RollNo" autoComplete="off" value={data.rollNo.trim().toUpperCase()} type="text" name="inputForName" required className={styles.input}
                    onChange={e => setData({ ...data, rollNo: e.target.value })}
                /><br />
                {/* {error && <span>Enter your Full Pattern</span>} */}
                <select className={styles.input}
                    onChange={e => setData({ ...data, class: e.target.value })} required>
                    <option value="NA">CLASS</option>
                    <option value="CSE3A">CSE2A</option>
                    <option value="CSE3B">CSE2B</option>
                    <option value="CSE3A">CSE3A</option>
                    <option value="CSE3B">CSE3B</option>
                    <option value="CSE5A">CSE5A</option>
                    <option value="CSE5B">CSE5B</option>
                </select>
                <br />

                <button type="submit" className={styles.defaultBtn}>Submit <code>🏏</code></button>
            </form>
        </label>
        </div><br />
        
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