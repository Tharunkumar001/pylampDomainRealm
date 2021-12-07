import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Tab, Table } from '@material-ui/core';

const TableData = (props) => {

    return(
        <Table name={props.name} class={props.class} roll={props.roll}>
        
            <tr>
                <td>{props.name}</td>
                <td>{props.roll}</td>
            </tr>
        </Table>
    )
    
}

export default function Attendance() {
    const [data,setData] = useState();
    var bool = false;
    const getData = async() => {
        await axios.get("http://localhost:3000/api/getUserData").then((res) => {
            setData([...res.data]);
            console.log(data)
            bool = true;
        });
    };

return (
    <main className={styles.main}>
        <h1 className={styles.title}>
            Welcome to Pylamp!
        </h1>

        <h3>Domain Realm Attendance</h3>

        <button onClick={getData}>show</button>
        <div>
            {bool && data.map((ele,ind) => {
                    <TableData key={ind} name={ele.name} class={ele.class} roll={ele.rollNo}/>
            })}
        </div>
    </main>

)
}
