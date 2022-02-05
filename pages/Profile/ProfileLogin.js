import { Card, CardActions, TextField, Box, CardActionArea, Button, CardContent, ButtonBase } from '@material-ui/core';
import styles from '../../styles/Home.module.css';
import Logo from "../../public/pylampLogo.png";
import Image from 'next/image';
import Arrow from "@material-ui/icons/SendOutlined"
import { useState } from 'react';
import EmailValidator from "email-validator";
import cogoToast from 'cogo-toast';

export default function ProfileLogin() {
    const [login, setLogin] = useState({email:"",userName:"", rollNo:"", password:"", rememberMe:false});

    const handleLogin = async(e) => {
        var emailValidate = await EmailValidator.validate(login.email);
        
        var validUsername = await ((login.userName).length >= 5) ? true : false;

        var rollNoValidate =  await ((login.rollNo).length === 8) ? true : false;

        var passwordValidate = await ((login.password).length >= 5) ? true : false;
        

    }
return (
    <div>

        <h1 style={{textAlign:"center",}}>Student LogIn</h1>
        <Card className={styles.profileLoginCard}>

            <CardActions className={styles.profileLoginCardAction}>
            <Image src={Logo} alt="logo" width="50rem" height="50rem" /><br />
                <TextField id="Email" label="Email" variant="standard" 
                helperText="Eg: abc@gmail.com"
                value={login.email.trim()} onChange={(e) => setLogin({...login, email: e.target.value})}/>

                <TextField id="Username" label="Username" variant="standard" helperText="Atleast 4 words"
                value={login.userName.trim()} onChange={(e) => setLogin({...login, userName: e.target.value})}/>
                
                <TextField id="RollNo" label="RollNo" variant="standard" helperText="Eg: 19CSR116" 
                value={login.rollNo.trim()} onChange={(e) => setLogin({...login, rollNo: e.target.value})}/>

                <TextField id="Password" label="Password" variant="standard" helperText="Atleast 5 words"
                value={login.password.trim()} onChange={(e) => setLogin({...login, password: e.target.value})}/>
            </CardActions>

            <CardContent className={styles.profileCardContent}>
                <input type="checkbox" onChange={(e) => setLogin({...login, rememberMe: !login.rememberMe})}/><label>RememberMe</label>
                <ButtonBase 
                    className={styles.profileSubmitBtn} 
                    onClick={handleLogin}
                >
                    Login <Arrow /></ButtonBase>
            </CardContent>

            <ButtonBase>ForgotPassword</ButtonBase>
        </Card>
    </div>
)
}
