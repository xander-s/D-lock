import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
      <main className={styles.main}>
        <h1>View Details</h1>
        <div id="viewDetails" className={styles.input}>
          <h1>Enter your address</h1><br></br><br></br><input type="text"></input> 
          <h1>Enter the address to view details:</h1><br></br><br></br><input type="text"></input>
          
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
