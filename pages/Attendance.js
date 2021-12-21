import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, IconButton, ListItem, Tab, Table } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import BoxIcon from "@material-ui/icons/AddBoxOutlined"
import ListIcon from "@material-ui/icons/ListAltOutlined";

const TableData = (props) => {
    return(
            <Grid name={props.name} section={props.section} roll={props.roll} container rowSpacing={1} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
                <Grid item xs={2}>
                    <ListItem>{props.serialNo}</ListItem>
                </Grid>
                <Grid item xs={5}>
                    <ListItem>{props.name}</ListItem>
                </Grid>
                <Grid item xs={5}>
                    <ListItem>{props.section}</ListItem>
                </Grid>
            </Grid>
    )
    
}

export default function Attendance() {
    const [data,setData] = useState([]);
    const [view,setView] = useState("grid");

    var bool = false;

    useEffect(() => {
        axios.get("https://pylamp-domain-realm.vercel.app/api/formHandler").then((res) => {
            //https://pylamp-domain-realm.vercel.app
            var arrayOfData = res.data;
            var sortedArray = arrayOfData.sort((a,b) => (a.class > b.class) ? 1 : ((b.class > a.class) ? -1 : 0))
            setData(sortedArray)
    });
    },[]);

return (
    <div>
            <main className={styles.main}>
        <h1 className={styles.title}>
            Welcome to Pylamp!
        </h1>

        <h3>Domain Realm Attendance</h3>

        <div>
            <Button variant="contained" startIcon={<BoxIcon />} onClick={() => setView("grid")}>
                GridView
            </Button>

            <Button variant="contained" endIcon={<ListIcon />} onClick={() => setView("list")}>
                ListView
            </Button>
        </div><br />
        
        
            {(view == "grid")? <Grid container rowSpacing={1} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
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
    </main>
    </div>
)
}
