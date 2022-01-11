/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Logo from "../../public/pylampLogo.png";
import EdiText from 'react-editext';
import { useState } from 'react';
import YouTube from "@material-ui/icons/YouTube";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import {Button,CircularProgress,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,} from '@material-ui/core';
import axios from "axios";
import { useRouter } from 'next/dist/client/router';
import CopyIcon from "@material-ui/icons/FileCopyOutlined";
import cogoToast from 'cogo-toast';

export default function DefaultForm() {
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

    const copyText = () => {
      var copyText = document.getElementById("pageId").innerText;

      navigator.clipboard.writeText(copyText);
      cogoToast.info("Text Copied to Clipboard");

      setTimeout(() => {
        localStorage.setItem("currentFormId",formId);
        router.push("/FormPage")
      },1000)
    }

    const handleLaunch = async() => {
      
      setLoading(true);
      const res = await axios.post("https://pylamp-domain-realm.vercel.app/api/setForm",{eventDetails: eventDetails});
      
      setTimeout(() => {
        setLoading(false);
        document.getElementById("pageId").innerHTML = res.data;
        setFormId(res.data);
      },3000);
    }

return (
    <div className={styles.defaultForm}>
        <h1 style={{textAlign:"center",color:"rgb(71, 74, 218)",}}>Default form</h1>
        <button className={styles.setBtn} onClick={() => setOpen(true)}>SET</button>

        <div className={styles.formContainer}>
            <div className={styles.formHeader}>
                <h1 style={{textAlign:"center"}}>Pylamp</h1>
                <Image src={Logo} alt="logo" width="140rem" height="140rem" className={styles.profileImg}/>
            </div>

            <div className={styles.rowBtn} >
              <h4 className={styles.period}>
                <EdiText type="text" value={eventDetails.header} onSave={(e) => setValue({...eventDetails, header: e})} />
              </h4>

              
              <h4 className={styles.period}>
                <EdiText type="text" value={eventDetails.period} onSave={(e) => setValue({...eventDetails, period: e})} />
              </h4>

            </div>
              <h4 className={styles.period}>
                <EdiText type="text" value={eventDetails.about} onSave={(e) => setValue({...eventDetails, about: e})} />
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
                      <label><Button onClick={copyText}><CopyIcon /></Button></label>
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
