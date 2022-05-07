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
import {DataGrid} from "@material-ui/data-grid";

const delFunction = async(x) => {
    var rollNo = x;
    const apiCall = await axios.put("http://localhost:3000/api/formHandler",{roll:rollNo});
}

const column = [
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true,
    },
    {
        field: 'rollNo',
        headerName: 'RollNo',
        width: 150,
        editable: true,
    },
]

export default function Attendance(props) {
    const [data,setData] = useState([]);
    const [view,setView] = useState("grid");
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [eventDetails, setDetails] = useState({eventName:"", eventId:""})
    var bool = false;
    const [row, setRow] = useState([])

    useEffect(() => {
        (async() => {
            const eventId = localStorage.getItem("eventId")
            const api = await axios.put("http://localhost:3000/api/attendanceHandler",{eventId: eventId});
            
            var data = api.data;
            var RowData = [];

            data.map((e,i) => {
                RowData.push({
                    id: e.eventId, name: e.name, rollNo: e.rollNo
                })
            });
            setRow(RowData);
        })()
    })

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
            {eventDetails.eventName}
        </h1>
        
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"row", gap:"0.2rem"}}>
            <h4>{eventDetails.eventId}</h4>
        </div>

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
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={row}
                        columns={column}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </div>
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
