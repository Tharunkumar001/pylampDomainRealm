import * as React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport  } from '@material-ui/data-grid';
import { Button} from '@material-ui/core';
import Navbar from "../pages/Navbar";
import { useEffect, useState } from 'react';
import axios from 'axios'
import styles from '../styles/Home.module.css';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { CircularProgress } from '@material-ui/core';
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const columns = [

  {
    field: 'eventName',
    headerName: 'Event Name',
    width: 200,
    editable: true,
  },
  {
    field: 'about',
    headerName: 'About',
    width: 130,
    editable: true,
  },
  {
    field: 'period',
    headerName: 'Event Date',
    width: 200,
    editable: true,
  },
  {
    field: 'id',
    headerName: 'Event Id',
    width: 200,
    editable: true,
  },
  {
    field: 'formType',
    headerName: 'Form Type',
    width: 200,
    editable: true,
  },

];


const EventPage = () => {
    const router = useRouter();
    const [row, setRow] = useState([]);
    const [open, setOpen] = useState(false);
    const [dialog, setDialog] = useState({EventName:"", ExactDate:"", 
    EventDate:"", About:"", EventId:"", EventType:""});
    const [loading, setLoading] = useState(true);
    const [participation, setCount] = useState(0);

    useEffect(() => {
        (async () => {

          var api = await axios.get("http://localhost:3000/api/setForm");
          var expRows = [];
          setLoading(false)
          var data = api.data;

          data.map((value,index) => {
            var countData;
            axios.put("http://localhost:3000/api/attendanceHandler",{eventId: value._id}).then((res) => {
              //https://pylamp-domain-realm.vercel.app
              countData = res.data.length;
            });
            expRows.push(
              { id: value._id, eventName: value.eventName, exactDate: value.exactDate, 
                period: value.period, about: value.about, formType: value.formType,},
            )           
          })
          setRow(expRows.reverse());
      })()
      },[]);

    const handleClose = () => {
        setOpen(false);
    }
    
    const handleOpen = () => {
        setOpen(true);
    }

    const handleView = () => {
        localStorage.setItem("eventId", dialog.EventId);
        router.push("/Attendance");
    }

  return (
      <div >
        <div style={{backgroundColor:"#010003"}}>
          <Navbar />
        </div>
        <div>
          <h2 style={{color:"grey", opacity:"0.8", textAlign:"center"}}>Pylamp Events</h2>
        </div>
      <div className={styles.dataGrid}>
        <DataGrid
          components={{
            Toolbar: CustomToolbar,
          }}
          rows={row}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          autoHeight={true}
          autoPageSize={true}
          checkboxSelection={false}
          onRowClick={(row) => {
            handleOpen();
            setDialog({...dialog, EventName: row.row.eventName, ExactDate: row.row.exactDate, 
              EventDate: row.row.period, About: row.row.about, EventType: row.row.formType, 
              EventId: row.row.id,});
          }}
        />
      </div><br />
      {(loading)? <div className={styles.load}>
          <CircularProgress />
        </div> : null }
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle className={styles.EventDialogTitle}>
          <h1>{dialog.EventName}</h1>
        </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <ul>
            <li><label><h5>EventDate</h5></label> {dialog.EventDate}</li>
            <li><label><h5>About</h5></label> {dialog.About}</li>
            <li><label><h5>FormCreation</h5></label> {dialog.ExactDate}</li>
            <li><label><h5>EventId</h5></label> {dialog.EventId}</li>
            <li><label><h5>FormType</h5></label> {dialog.EventType}</li>
          </ul>
        </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleView} autoFocus>
                View
            </Button>
            <Button onClick={handleClose} autoFocus>
                Close
            </Button>
        </DialogActions>
    </Dialog>
    </div>
  );
}

export default EventPage;