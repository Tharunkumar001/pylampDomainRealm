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
import cogoToast from 'cogo-toast';

const delFunction = async(x) => {
    var rollNo = x;
    const apiCall = await axios.put("https://pylamp-domain-realm.vercel.app/api/formHandler",{roll:rollNo});
}


const TableData = (props) => {
    return(
            <Grid name={props.name} section={props.section} roll={props.roll} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}>
                    <ListItem>{props.serialNo}</ListItem>
                </Grid>
                <Grid item xs={5}>
                    <ListItem>{props.name}</ListItem>
                </Grid>
                <Grid item xs={3}>
                    <ListItem>{props.section}</ListItem>
                </Grid>
                <Grid item xs={2}>
                    <ListItem >{props.roll}</ListItem>
                </Grid>
            </Grid>
    )
    
}

export default function Attendance(props) {
    const [data,setData] = useState([]);
    const [view,setView] = useState("grid");
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);
    var bool = false;

    useEffect(() => {
        axios.put("https://pylamp-domain-realm.vercel.app/api/attendanceHandler",{eventId: localStorage.getItem("eventId")}).then((res) => {
            //https://pylamp-domain-realm.vercel.app
            if(res.data === false){
                cogoToast.info("Event was not found")
            }else{
                var arrayOfData = res.data;
                var count = setCount(res.data.length);
                var sortedArray = arrayOfData.sort((a,b) => (a.class > b.class) ? 1 : ((b.class > a.class) ? -1 : 0))
                setData(sortedArray)
            }
            
    });
    },[]);

    const handleClose = () => {
        setOpen(false);
        router.push("/Final");
    }
    
    const handleOpen = () => {
        setOpen(true);
    }

return (
    <div>
            <main className={styles.main}>
        <h1 className={styles.title}>
            Welcome to Pylamp!
        </h1>

        <h4 className={styles.countBar}>{count}</h4>
        <div>
            <Button variant="contained" startIcon={<BoxIcon />} onClick={() => setView("grid")}>
                GridView
            </Button>

            <Button variant="contained" endIcon={<ListIcon />} onClick={() => setView("list")}>
                ListView
            </Button>
        </div><br />
        
            {(view == "grid")? <Grid container className={styles.AttendanceGrid} rowSpacing={1} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data.map((ele,ind) => (
                            <Grid item xs={6} sm={4} md={4} key={ind} className={styles.AttendanceCard}>
                                <h5>{ele.name}</h5>
                                <h6>{ele.rollNo}</h6>
                            </Grid>                       
                    ))}
            </Grid> : <Grid container rowSpacing={1} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data.map((ele,ind) => (
                        <TableData key={ind} serialNo={ind+1} name={ele.name} section={ele.class} roll={ele.rollNo}/>
                    ))}
            </Grid> }

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
                <Button autoFocus>
                    Look🧐
                </Button>
                <Button onClick={handleClose} autoFocus>
                    Close
                </Button>
                </DialogActions>
            </Dialog>

    </main>
    </div>
)
}
