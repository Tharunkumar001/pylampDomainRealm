import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/dist/client/router';
import { Avatar, Button, Card, CardContent, CardHeader, Typography,  } from '@material-ui/core';
import { ArrowForwardIos } from '@material-ui/icons';
import { DataGrid } from '@material-ui/data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies'
import { Stack } from 'react-bootstrap';

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
    const router = useRouter();

    useEffect(() => {
        (async() => {
            const jwtCall = await axios.put("https://pylamp-domain-realm.vercel.app/api/profileHandler",{jwt: cookie.load("jwt")})
            const User = await axios.put("https://pylamp-domain-realm.vercel.app/api/profileApi",{rollNo: jwtCall.data.user})
            setUser({...user, userName: User.data[0].UserName, userRollNo: User.data[0].RollNo});

            try {
                const apiCall = await axios.post("https://pylamp-domain-realm.vercel.app/api/profileApi",{rollNo: jwtCall.data.user});
                var expRows = [];
                let data = apiCall.data;
                if(apiCall.status == 200){
                    data.map((value,index) => {
                        expRows.push(
                            { id: value._id, eventName: value.eventName, participation: "✅"},
                        )           
                    });
                    setRow(expRows.reverse());
                }
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
                        components={{
                            NoRowsOverlay: () => (
                                <Stack height="100%" alignItems="center" justifyContent="center">
                                    No rows in DataGrid
                                </Stack>
                            )
                        }}
                    />
                </CardContent>

                <CardContent className={styles.profileSegment}>
                    Stats
                </CardContent>
            </Card>
        </div>
    </div>
)
}