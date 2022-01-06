import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Logo from "../../public/pylampLogo.png";
import EdiText from 'react-editext';
import { useState } from 'react';


export default function Final() {
    const [editContent, setValue] = useState({header:"Pylamp Session",about:"We Are Here For You!!",eventDetails:"Enter Event Details"});

    const handleSave = () => {
        console.log(editContent)
    };

return (
    <div className={styles.defaultForm}>
        <h1 style={{textAlign:"center",color:"rgb(71, 74, 218)",}}>Default form</h1>

        <div className={styles.formContainer}>
            <div className={styles.textContent}>
                <h1>
                    <EdiText type="text" value={editContent.header} onSave={handleSave} />
                </h1>

                <h4>
                    <EdiText type="text" value={editContent.about} onSave={handleSave} />
                </h4>
                <p>
                    <EdiText type="text" value={editContent.eventDetails} onSave={handleSave} />
                </p>
            </div>
        </div>
    </div>
)
}
