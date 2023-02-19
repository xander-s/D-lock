import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    function onClick()
    {
        <p>Submitted Successfully</p>
    }
    return (
    <>
      
      <main className={styles.main}>
        <h1>Update Details</h1>
        <div id="updateDetails" className={styles.input}>
          <h1>SSN</h1><br></br><br></br><input type="text"></input>
          <h1>Date of Birth</h1><br></br><br></br><input type="text"></input>
          <h1>School Certificate No.</h1><br></br><br></br><input type="text"></input>
          <h1>College Degree Details</h1><br></br><br></br><input type="text"></input>
          <br></br>
          <br></br>
          <br></br>
          <h1>Please enter the address to be updated:</h1><br></br><br></br><input type="text"></input>
          <br></br>
          <br></br>
          <div className={styles.grid} onClick={()=>{onClick}}>
          <button type="submit" onClick={()=>{onClick}} className={styles.submitbutton}>Submit</button>
             
            </div>
        </div>
        
      </main>
    </>
  )
}
