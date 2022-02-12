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
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import ForgotPassword from './ForgotPassword';

export default function ProfileLogin() {
    const [login, setLogin] = useState({email:"",userName:"", rollNo:"", password:"",});
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }
    
    const handleOpen = () => {
        setOpen(true);
    }

    const handleLogin = async(e) => {
        var emailValidate = await EmailValidator.validate(login.email);
        
        var validUsername = await ((login.userName).length >= 5) ? true : false;

        var rollNoValidate =  await ((login.rollNo).length === 8) ? true : false;

        var passwordValidate = await ((login.password).length >= 5) ? true : false;
        
        if(emailValidate === false || validUsername === false || rollNoValidate === false || passwordValidate === false){
            cogoToast.error("Enter valid data");
        }else{
            const apiCall = await axios.post("https://pylamp-domain-realm.vercel.app/api/profileHandler",{loginDetails: login})
            
            if(apiCall.status == 201){
                cookie.save("jwt",apiCall.data.jwt)
                cogoToast.success("Successfully logedIn");
                window.location.reload();
            }else if(apiCall.status == 202){
                let validateUser = (apiCall.data.userData[0].Password == login.password)? true: false;
                if(validateUser){
                    cogoToast.success("Successfully logedIn");
                    cookie.save("jwt",apiCall.data.jwt);
                    window.location.reload();
                }else{
                    cogoToast.error("Enter Valid Password");
                }
            }
        } 
    }
return (
    <div>

        <h1 style={{textAlign:"center",}}>Student LogIn</h1>
        <Card className={styles.profileLoginCard}>

            <CardActions className={styles.profileLoginCardAction}>
            <Image src={Logo} alt="logo" width="50rem" height="50rem" /><br />
                <TextField id="Email" label="Email" variant="filled" 
                helperText="Eg: abc@gmail.com"
                value={login.email.trim()} onChange={(e) => setLogin({...login, email: e.target.value})}/>

                <TextField id="Username" label="Username" variant="filled" helperText="Atleast 4 words"
                value={login.userName.trim()} onChange={(e) => setLogin({...login, userName: e.target.value})}/>
                
                <TextField id="RollNo" label="RollNo" variant="filled" helperText="Eg: 19CSR116" 
                value={login.rollNo.trim()} onChange={(e) => setLogin({...login, rollNo: e.target.value})}/>

                <TextField id="Password" label="Password" variant="filled" helperText="Atleast 5 words"
                value={login.password.trim()} onChange={(e) => setLogin({...login, password: e.target.value})}/>
            </CardActions>

            <CardActions className={styles.profileCardContent}>
                <ButtonBase
                    className={styles.profileSubmitBtn} 
                    onClick={handleLogin}
                >
                    Login <Arrow /></ButtonBase>
            </CardActions>

            <ButtonBase onClick={handleOpen}>ForgotPassword</ButtonBase>
        </Card><br />

        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
        <DialogTitle className={styles.alertDialogTitle}>
            Password Recovery!!
        </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
            <ForgotPassword />
        </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} autoFocus>
                Close
            </Button>
        </DialogActions>
    </Dialog>
    </div>
)
}
