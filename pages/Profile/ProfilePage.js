import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/dist/client/router';
import { Avatar,  Button, Card, CardContent, CardHeader,  Grid, Typography,  } from '@material-ui/core';
import { ArrowForwardIos, CopyrightOutlined } from '@material-ui/icons';
import { DataGrid } from '@material-ui/data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies'
import { BarChart, Bar,Tooltip, Legend,} from 'recharts';
import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgress } from '@material-ui/core';
import 'react-circular-progressbar/dist/styles.css';
import cogoToast from 'cogo-toast';

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
    const [barData, setBar] = useState({Event:"", Active:""});
    const [circulatBar, setData] = useState({percent:"0"});
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [grievence, setGrievence] = useState({grievence: "", suggetion: "",});

    const data = [
        {
            Event: `${barData.Event}`,
            Active: `${barData.Active}`,
        },
    ]

    useEffect(() => {
        (async() => {
            setLoading(true);
            const jwtApi = await axios.put("https://pylamp-official.vercel.app/api/profileHandler",{jwt: cookie.load("jwt")})
            const statsApi = await axios.get("https://pylamp-official.vercel.app/api/profileApi");
            try {
                const tableApi = await axios.post("https://pylamp-official.vercel.app/api/profileApi",{rollNo: jwtApi.data.user});
                setUser({...user, userName: tableApi.data.userDetails[0].UserName, userRollNo: tableApi.data.userDetails[0].RollNo});
                setBar({...barData,Event: statsApi.data, Active: tableApi.data.tableData.length});
                
                var expRows = [];
                let data = tableApi.data.tableData;

                var divide = (barData.Active) / (barData.Event);
                const Avg = Math.floor(100/divide);
                setData({...circulatBar, percent: Avg});
                console.log(barData.Event,barData.Active,Avg)

                if(tableApi.status == 200){
                    data.map((value,index) => {
                        expRows.push(
                            { id: value._id, eventName: value.eventName, period: value.eventDate, participation: "✅"},
                        )           
                    });
                    setRow(expRows.reverse());
                }
                setLoading(false);
            } catch (error) {
                console.log(error)
            }
        })();
    },[]);

    const handleLogout = async() => {
        var logoutApi = await axios.post("https://pylamp-official.vercel.app/api/logoutHandler",{rollNo: user.userRollNo});
        cookie.remove("jwt");
        window.location.reload()
    }

    const handleGrievence = async() => {
        var grievenceApi = await axios.put("https://pylamp-official.vercel.app/api/grievenceHandler",{data: grievence});
        
        if(grievence.status == 200) {
            cogoToast.success("Your Grievence Submit Successfully");
        }else{
            cogoToast.error("SomeThing Went Wrong");
        }
    }

return (
    <div>
        <Head>
            <title>Pylamp</title>
            <meta name="description" content="code forever" />
            <link rel="icon" href="/pylampLogo.png" />
        </Head>
        <div>
            <h2 style={{color:"grey", opacity:"0.8", textAlign:"center"}}>Pylamp Profile</h2>
            <div style={{display:"flex",justifyContent:"center"}}>
                {(loading)? <CircularProgress />: null}
            </div>
        </div>
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

                <CardContent style={{width:'100%', paddingTop:"1rem"}}>
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

                {/* <CardContent className={styles.profileSegment}>
                    Stats
                </CardContent> */}

                {/* <CardContent style={{width:"100%"}}>
                <Grid container spacing={2}>
                        <Grid xs={12} md={6} sm={6} style={{
                            display:"flex",
                            justifyContent:"center",
                            paddingBottom:"2rem"
                        }}>
                                <BarChart
                                    width={300}
                                    height={300}
                                    data={data}
                                    >
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="Event" fill="#3581EB" />
                                    <Bar dataKey="Active" fill="#6c757a" />
                                </BarChart>
                        </Grid><br /><br />

                        <Grid xs={12} md={6} sm={6} style={{
                            display:"flex",
                            justifyContent:"center",
                            flexDirection:"column"
                        }}>
                        <div style={{ width: 100, height: 100 }}>
                            <CircularProgressbar 
                                value={circulatBar.percent} 
                                text={`${circulatBar.percent}%`}
                            />
                        </div>
                        <h5>You should have above 40% participation.</h5>
                        <h5 style={{
                            color: "grey",
                            opacity: "0.8",
                            fontWeight: "bolder",
                        }}>
                            (below 40% you cant be a member of Pylamp)
                        </h5>
                        </Grid> 
                    </Grid>
                </CardContent> */}

                <CardContent className={styles.profileSegment}>
                    Grievence
                </CardContent>

                <CardContent>
                    <h3 style={{
                        color: "grey",
                        opacity: "0.8",
                    }}>Send Your Grievence related to Pylamp!!!</h3>
                </CardContent>
                    <form style={{
                        display:"flex",
                        flexDirection:"column",
                        gap:"1rem",
                        width: "80%"
                    }} >
                        <textarea type="text" rows="4" cols="50" placeholder='grievence...' 
                        onChange={(e) => setGrievence({...grievence, grievence: e.target.value})}/>
                        <textarea type="text" rows="4" cols="50" placeholder='any suggetion...'
                        onChange={(e) => setGrievence({...grievence, suggetion: e.target.value})}/>
                        <button style={{
                            width:"max-content"
                        }} onClick={handleGrievence}>Send</button>
                    </form>
                <CardContent>
                    <Button onClick={handleLogout}>Logout</Button>
                </CardContent>
            </Card><br />
        </div>
    </div>
)
}