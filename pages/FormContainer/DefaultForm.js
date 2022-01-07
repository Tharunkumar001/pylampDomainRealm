/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Logo from "../../public/pylampLogo.png";
import Cover from "../../public/cover.jpg";
import EdiText from 'react-editext';
import { useState } from 'react';


export default function Final() {
    const date =  new Date();
    date.toISOString()
    const [editContent, setValue] = useState({header:"Event Name",about:"About",period:"Enter Date"});

    const handleSave = () => {
        console.log(editContent)
    };

return (
    <div className={styles.defaultForm}>
        <h1 style={{textAlign:"center",color:"rgb(71, 74, 218)",}}>Default form</h1>

        <div className={styles.formContainer}>
            <div className={styles.formHeader}>
                <h1 style={{textAlign:"center"}}>Pylamp</h1>
                <Image src={Logo} alt="logo" width="140rem" height="140rem" className={styles.profileImg}/>
            </div><br /><br />

            <h6 style={{float:"right",margin:"0.3rem"}}>
                <EdiText type="text" value={editContent.period} onSave={handleSave} />
            </h6>
            <div className={styles.textContent}>
                <h1>
                    <EdiText type="text" value={editContent.header} onSave={handleSave} />
                </h1>

                <h4>
                    <EdiText type="text" value={editContent.about} onSave={handleSave} />
                </h4>
            </div>
        </div>
    </div>
)
}
