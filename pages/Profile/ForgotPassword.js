import { Card, CardActions, TextField, Box, CardActionArea, Button, CardContent, ButtonBase } from '@material-ui/core';
import styles from '../../styles/Home.module.css';
import Logo from "../../public/pylampLogo.png";
import Image from 'next/image';
import Arrow from "@material-ui/icons/SendOutlined"
import { useState } from 'react';
import EmailValidator from "email-validator";
import cogoToast from 'cogo-toast';
import axios from 'axios';
import cookie from 'react-cookies'


export default function ForgotPassword() {
    const [login, setLogin] = useState({email:"",rollNo:"",});
    const handleSend = async(e) => {
        try {
            const apiCall = await axios.post("https://pylamp-official.vercel.app/api/forgotPassword",{data: login})
            cogoToast.success(`${apiCall.data.message}`);
        } catch (error) {
            cogoToast.info(`${apiCall.data.message}`);
        }
        
    }
return (
    <div >
        <div>

        <Card className={styles.profileLoginCard}>

            <CardActions className={styles.profileLoginCardAction}>
            <Image src={Logo} alt="logo" width="50rem" height="50rem" /><br />
                <TextField id="Email" label="Email" variant="filled" 
                helperText="Eg: abc@gmail.com"
                value={login.email.trim()} onChange={(e) => setLogin({...login, email: e.target.value})}/>
                
                <TextField id="RollNo" label="RollNo" variant="filled" helperText="Eg: 19CSR116" 
                value={login.rollNo.trim()} onChange={(e) => setLogin({...login, rollNo: e.target.value})}/>
            </CardActions>

            <CardContent className={styles.profileCardContent}>
                <ButtonBase 
                    className={styles.profileSubmitBtn} 
                    onClick={handleSend}
                >
                    Send <Arrow /></ButtonBase>
            </CardContent>

        </Card><br />
    </div>
    </div>
)
}
