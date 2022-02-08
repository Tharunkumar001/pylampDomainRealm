import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/dist/client/router';
import { Avatar, Button, Card, CardContent, CardHeader, Typography,  } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import { ArrowForwardIos } from '@material-ui/icons';
import { DataGrid } from '@material-ui/data-grid';

const row = [
    { id: 1, eventName: 'Hello', participation: 'World' },
    { id: 2, eventName: 'DataGridPro', participation: 'is Awesome' },
    { id: 3, eventName: 'MUI', participation: 'is Amazing' },
  ];
  
  const columns = [
    { field: 'eventName', headerName: 'EventName', width: 150 },
    { field: 'participation', headerName: 'Participation', width: 150 },
  ];

export default function ProfilePage() {
    const router = useRouter();

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
                            U
                        </Avatar>
                    }
                />
                <Typography style={{fontWeight:"bold",fontSize:"1rem"}}>user name</Typography>
                <Typography style={{fontWeight:"lighter",opacity:"0.8"}}>user email</Typography>
                
                <CardContent>
                    {/* <button className={styles.editProfileBtn}>Edit Profile </button> */}
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
            </Card>
        </div>
    </div>
)
}
