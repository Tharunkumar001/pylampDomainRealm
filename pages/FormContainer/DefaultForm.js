/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Logo from "../../public/pylampLogo.png";
// import EdiText from 'react-editext';
import { useState } from 'react';
import YouTube from "@material-ui/icons/YouTube";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import {Button,Card,CircularProgress,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,Grid} from '@material-ui/core';
import axios from "axios";
import { useRouter } from 'next/dist/client/router';
import { Avatar, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, styled, Typography } from '@material-ui/core';
import { ExpandMoreOutlined, Favorite, MoreVert, MoreVertOutlined, TouchApp } from '@material-ui/icons';

import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
  }),
}));

export default function DefaultForm() {
    const [data, setData] = useState({ name: "", rollNo: "", class: "NA" });
    const [eventDetails, setValue] = useState({header:"Event Name ✏️",about:"About ✏️",period:"Enter Date ✏️"});
    const [formId, setFormId] = useState();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [expanded, setExpanded] = useState(false);

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

    const handleExpandClick = () => {
      setExpanded(!expanded);
  };


return (
    <div className={styles.defaultForm}>
        <h1 style={{textAlign:"center",color:"rgb(71, 74, 218)",}}>Default form</h1>

        <div className={styles.formContainer}>

        <Grid container  >
          <Grid item xs={12} sm={4} md={4} className={styles.cardGrid}>
            <EditText type="text" defaultValue={eventDetails.header} 
              onSave={(e) => setValue({...eventDetails, header: e})} style={{
                width: "max-content",
                borderRadius:"1rem"
              }}/>          
              </Grid>

          <Grid item xs={12} sm={4} md={4} className={styles.cardGrid}>
            <EditText type="date" defaultValue={eventDetails.period} 
            onSave={(e) => setValue({...eventDetails, period: e})} style={{
              width: "max-content",
              borderRadius:"1rem"
            }}/>          
          </Grid>

          <Grid item xs={12} sm={4} md={4} className={styles.cardGrid}>
            <EditText type="text" defaultValue={eventDetails.about} 
            onSave={(e) => setValue({...eventDetails, about: e})} style={{
              width: "max-content",
              borderRadius:"1rem"
            }}/>          
          </Grid>
        </Grid>

        <div sx={{ maxWidth: 345 }} className={styles.PreviewCard}>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
            <ExpandMoreOutlined />
            
            </ExpandMore>
            <CardContent style={{
              display:"flex",
              flexDirection:"row",
              gap:"1rem"
            }}>
              <h2>Preview</h2>
              <button className={styles.setBtn} onClick={() => setOpen(true)}>SET</button>
            </CardContent>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph className={styles.cardBody}>
              <div className={styles.formContainer}>
        <div className={styles.rowBtn} >
            <h4 className={styles.header}>
                <h3>{eventDetails.header.value || "Event Name"}</h3><br />
            </h4>
        </div>

        <div className={styles.form}>
        <label>
            <h2>🎯</h2>
            <form className={styles.formLabel}>

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
    </div>
              </Typography>
            </CardContent>
          </Collapse>
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
