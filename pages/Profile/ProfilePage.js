import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/dist/client/router';
import { Avatar, Button, Card, CardContent, CardHeader, Grid, Typography,  } from '@material-ui/core';
import { ArrowForwardIos } from '@material-ui/icons';
import { DataGrid } from '@material-ui/data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies'
import {CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";


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
        field: 'participation',
        headerName: 'Participation',
        width: 200,
        editable: true,
    },
];

export default function ProfilePage() {
    const [row, setRow] = useState([]);
    const [user, setUser] = useState({userName: "", userRollNo: ""});
    const [bar, setBar] = useState(data);
    const [barData, setData] = useState({Participation:"1", Event: "1",});
    const [Avg, setAvg] = useState(0);
    const router = useRouter();

    const data = [
        {
            name: "Participation",
            Participation:  `${barData.Participation}`,
            Events: `${barData.Event}`,
        },
    ];

    useEffect(() => {
        (async() => {
            const jwtCall = await axios.put("https://pylamp-domain-realm.vercel.app/api/profileHandler",{jwt: cookie.load("jwt")})
            try {
                const apiCall = await axios.post("https://pylamp-domain-realm.vercel.app/api/profileApi",{rollNo: jwtCall.data.user});
                
                var expRows = [];
                let data = putCall.data.active;

                if(apiCall.status == 200){
                    data.map((value,index) => {
                        expRows.push(
                            { id: value._id, eventName: value.eventName, participation: "✅"},
                        )           
                    });
                    setRow(expRows.reverse());
                }

                let eventVal = barData.Event;
                let participation = barData.Participation;

                var divide = (eventVal/participation);
                var average = Math.floor(100/divide);

                await setAvg(average);
            } catch (error) {
                console.log(error)
            }

            
        })();
    },[])
return (
    <div>
        <Head>
            <title>Domain Realm</title>
            <meta name="description" content="Web development session" />
            <link rel="icon" href="/pylampLogo.png" />
        </Head>

        <div className={styles.profileDiv}>
            <Card className={styles.profileCard}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            {user.userName[0]}
                        </Avatar>
                    }
                />
                <Typography style={{fontWeight:"bold",fontSize:"1rem"}}>{user.userName}</Typography>
                <Typography style={{fontWeight:"lighter",opacity:"0.8"}}>{user.userRollNo}</Typography>
                
                <CardContent>
                    <Button variant="outlined" endIcon={<ArrowForwardIos />} 
                    style={{backgroundColor:"#0168FE", borderRadius:"1rem", color:"white"}}
                    >
                        Edit Profile</Button>
                </CardContent>

                <CardContent className={styles.profileSegment}>
                    Events
                </CardContent>

                <CardContent style={{width:'100%'}}>
                    <DataGrid 
                        rows={row} 
                        columns={columns} 
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                        autoHeight={true}
                        autoPageSize={true}
                        checkboxSelection={false}
                    />
                </CardContent>

                <CardContent className={styles.profileSegment}>
                    Stats
                </CardContent>

                <CardContent id="myChart">
                <Grid container spacing={2} >
                <Grid item xs={12} md={8} sm={8}>
                    <BarChart
                            width={300}
                            height={300}
                            data={data}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Events" fill="#8884d8" />
                            <Bar dataKey="Participation" fill="#82ca9d" />
                        </BarChart>
                </Grid><br />

                <Grid item xs={6} md={4} sm={4} style={{
                    display:"flex",
                    marginRight:"auto",
                    marginLeft:"auto"
                }}>
                        <CircularProgressbar 
                            strokeWidth={2} 
                            value={Avg} 
                            text={`
                            ${Avg}%
                            `}
                            
                        />
                </Grid>  
            </Grid>
            </CardContent>

            <CardContent>
                <h4>Active % should greater than 40%</h4>
            </CardContent>
            </Card>
        </div>
    </div>
)
}
