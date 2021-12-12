import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Tab, Table } from '@material-ui/core';

const tableStyle = {
    padding: "1rem",
    border: " 3px solid #ddd",
    width: "100%",
    
}

const rowStyle = {
    paddingRight: "1rem",
}
const TableData = (props) => {
    var count = 1;
    return(
        <table name={props.name} section={props.section} roll={props.roll}>
            <tr>
                <td>{props.name}</td>
                <td>{props.roll}</td>
            </tr>
        </table>
    )
    
}

export default function Attendance() {
    const [data,setData] = useState([]);
    var bool = false;

    useEffect(() => {
        axios.get("https://pylamp-domain-realm.vercel.app/api/formHandler").then((res) => {
            setData(res.data);
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
                <TableData key={ind} name={ele.name} section={ele.class} roll={ele.rollNo}/>
            ))}
        </div>
    </main>

)
}
