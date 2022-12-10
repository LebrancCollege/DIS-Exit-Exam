import Head from 'next/head'; 
import Link from 'next/link'; 
import styles from '../styles/Home.module.css'; 

export default function Home() {
  return(
    <div className={styles.home}> 
      <Head>
        <title>UX Portfolio | Poom Yimyuean</title>
      </Head>
      <header>
        <div className="text-3xl"> 
          <h1>UX Portfolio</h1> 
        </div>
      </header>
      <section>
        <div>
          <h2>Poom Yimyuean</h2> 
        </div>
      </section>
    </div>
  )
}