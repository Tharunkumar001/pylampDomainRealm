import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Logo from "../public/pylampLogo.png";
import { useState } from 'react';
import YouTube from "@material-ui/icons/YouTube";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";

export default function Home() {
  const [data,setData] = useState({name:"",rollNo:"",class:""});
  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Domain Realm</title>
        <meta name="description" content="Web development session" />
        <link rel="icon" href="/pylampLogo.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Pylamp!
        </h1>
        
        <h3>Domain Realm Series - II</h3>

        <p className={styles.description}>
          We Are Here For You{' '}<br />
          <Image src={Logo} alt="logo" width="152rem" height="152rem"/>
        </p>

        <div className={styles.grid}>
          <label>
            <form className={styles.formLabel} onSubmit={submitHandler}>
              <input placeholder="Name" value={data.name} type="text" name="inputForName" required  className={styles.input}
                onChange={e => setData({...data, name:e.target.value})}
              /><br />
              
              <input placeholder="RollNo" value={data.rollNo} type="text" name="inputForName" required  className={styles.input}
                onChange={e => setData({...data, rollNo:e.target.value})}
              /><br />

              <input placeholder="Class" value={data.class} type="text" name="inputForName" required className={styles.input} 
                onChange={e => setData({...data, class:e.target.value})}
              /><br />

              <button type="submit" className={styles.submitButton}>Submit <code>🏏</code></button>
            </form>
          </label>
        </div>
      </main>

      <footer className={styles.footer}>
          
          <a href="https://youtu.be/dG4DGVikMpU"><YouTube /></a>
          <a href=""><LinkedIn /></a>
          <a href=""><Instagram /></a>
      </footer>
    </div>
  )
}
