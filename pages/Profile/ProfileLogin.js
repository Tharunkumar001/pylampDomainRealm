import { Card, CardActions, TextField, Box, CardActionArea, Button, CardContent, ButtonBase } from '@material-ui/core';
import styles from '../../styles/Home.module.css';
import Logo from "../../public/pylampLogo.png";
import Image from 'next/image';
import Arrow from "@material-ui/icons/SendOutlined"

export default function ProfileLogin() {

return (
    <div>
        <h1 style={{textAlign:"center"}}>Student LogIn</h1>
        <Card className={styles.profileLoginCard}>

            <CardActions className={styles.profileLoginCardAction}>
            <Image src={Logo} alt="logo" width="50rem" height="50rem" /><br />
                <TextField id="Email" label="Email" variant="standard" /><br />
                <TextField id="RollNo" label="RollNo" variant="standard" /><br />
                <TextField id="Password" label="Password" variant="standard" />
            </CardActions>


            <CardContent>
                <ButtonBase className={styles.profileSubmitBtn}>Login <Arrow /></ButtonBase>
                <h5><a href='#'>forgot Password?</a></h5>
            </CardContent>
        </Card>
    </div>
)
}
