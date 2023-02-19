import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
      <main className={styles.main}>
        <h1 className={inter.className}>D-Lock</h1>
        <div id="updaterDetails" className={styles.input}>
          <h3 className={inter.className}>Update Details</h3><br></br>
          <h3 className={inter.className}>Please enter your address:</h3><br></br><br></br><input type="text"></input>
          <br></br>
          <br></br>
          <br></br>
          <h3 className={inter.className}>Please enter the address to be updated:</h3><br></br><br></br><input type="text"></input>
          <br></br>
          <br></br>
          <div className={styles.grid}>
          <a
            href="\updateDetails"
            className={styles.submitbutton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Submit 
            </h2>
            </a>
            </div>
            </div>
            <div id="viewDetails" className={styles.input}>
            <h3 className={inter.className}>ViewDetails</h3><br></br>
            <h3 className={inter.className}>Please enter your address:</h3><br></br><br></br><input type="text"></input>
          <br></br>
          <br></br>
          <br></br>
          <h3 className={inter.className}>Please enter the address to be viewed:</h3><br></br><br></br><input type="text"></input>
          <br></br>
          <br></br>
          <div className={styles.grid}>
          <a
            href="\viewDetails"
            className={styles.submitbutton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Submit 
            </h2>
            </a>
            </div>
        </div>

      </main>
    </>
  )
}
