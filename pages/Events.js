import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { AppBar, Toolbar } from '@material-ui/core';
import Navbar from "../pages/Navbar";
import { useEffect, useState } from 'react';
import FormPage from './FormPage';
import axios from 'axios'

const columns = [

  {
    field: 'eventName',
    headerName: 'Event Name',
    width: 200,
    editable: true,
  },
  {
    field: 'period',
    headerName: 'Event Date',
    width: 200,
    editable: true,
  },
  {
    field: 'details',
    headerName: 'Details',
    width: 100,
    editable: true,
  },

];

const EventPage = () => {

    const [row, setRow] = useState([]);
        useEffect(() => {

        (async () => {
          var api = await axios.get("https://pylamp-domain-realm.vercel.app/api/setForm");
          var expRows = [];

          var data = api.data;

          data.map((value,index) => {
            expRows.push(
              { id: value._id, eventName: value.eventName, exactDate: value.exactDate, period: value.period, details: "Details"},
            )           
          })
          console.log(expRows)
          setRow(expRows);
      })()
      },[]);

  return (
    <div>
        <AppBar>
            <Toolbar>
                <Navbar />
            </Toolbar>
        </AppBar>

      <div style={{ height: 600, width: '100%',paddingTop:"6rem"}}>
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
    
  );
}

export default EventPage;