import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ListItem, Tab, Table } from '@material-ui/core';
import { Grid } from '@material-ui/core';


const TableData = (props) => {
    return(
            <Grid name={props.name} section={props.section} roll={props.roll} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
    var bool = false;

    useEffect(() => {
        axios.get("https://pylamp-domain-realm.vercel.app/api/formHandler").then((res) => {
            var myArray  = [...res.data];
            myArray.sort((a,b) => {return a.class - b.class});
            console.log(myArray)
            setData(myArray);
    });
    },[]);

return (
    <main className={styles.main}>
        <h1 className={styles.title}>
            Welcome to Pylamp!
        </h1>

        <h3>Domain Realm Attendance</h3>

        <div>
            {data.map((ele,ind) => (
                // <p key={_id}>Coffee type {name} </p>
                <TableData key={ind} serialNo={ind+1} name={ele.name} section={ele.class} roll={ele.rollNo}/>
            ))}
        </div>
    </main>

)
}
