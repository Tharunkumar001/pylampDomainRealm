import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Tab } from '@material-ui/core';

const TableData = (props) => {
    return(<h2 id={props.id}>{props.id}</h2>)
    
}

export default function Attendance() {
    const [data,setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/api/getUserData").then((res => {
            const userData = [...res.data];
            setData(userData);
        }));
    },[]);

return (
    <main className={styles.main}>
        <h1 className={styles.title}>
            Welcome to Pylamp!
        </h1>

        <h3>Domain Realm Attendance</h3>

        <div>
            {data.map((ele,map) => {
                return(
                    <TableData id={ele} key={map} />
                )
            })}
            <h2>tharun</h2>
        </div>
    </main>

)
}
