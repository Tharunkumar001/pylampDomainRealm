/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Logo from "../../public/pylampLogo.png";
import Cover from "../../public/cover.jpg";
import EdiText from 'react-editext';
import { useState } from 'react';


export default function Final() {
    const [data, setData] = useState({ name: "", rollNo: "", class: "NA" });

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

            <h4 className={styles.period}>
                <EdiText type="text" value={editContent.period} onSave={handleSave} />
                <EdiText type="text" value={editContent.header} onSave={handleSave} />
                <EdiText type="text" value={editContent.about} onSave={handleSave} />
            </h4><br />

        <div className={styles.form}>
          <label>
            <form className={styles.formLabel}>
              <input placeholder="Name" autoComplete="off" value={data.name.trim()} type="text" name="inputForName" required className={styles.input}
                onChange={e => setData({ ...data, name: e.target.value })}
              /><br />

              <input placeholder="RollNo" autoComplete="off" value={data.rollNo.trim()} type="text" name="inputForName" required className={styles.input}
                onChange={e => setData({ ...data, rollNo: e.target.value })}
              /><br />
              {/* {error && <span>Enter your Full Pattern</span>} */}
              <select className={styles.input}
                onChange={e => setData({ ...data, class: e.target.value })} required>
                <option value="NA">CLASS</option>
                <option value="CSE3A">CSE3A</option>
                <option value="CSE3B">CSE3B</option>
                <option value="CSE5A">CSE5A</option>
                <option value="CSE5B">CSE5B</option>
              </select>
              <br />

              <button type="submit" className={styles.defaultBtn}>Submit <code>🏏</code></button>
            </form>
          </label>
        </div>
        </div>
    </div>
)
}
