import type { NextPage } from 'next'; 
import Head from 'next/head'; 
import Link from 'next/link'; 
import styles from '../styles/Home.module.css'; 

const Home: NextPage = () => {
  return(
    <div className={styles.home}> 
      <Head>
        <link rel="icon" type="image/png" href="./img/icon/icon.png" /> 
        <title>UX Portfolio | Poom Yimyuean</title>
      </Head>
      <header>
        <div className="text-5xl">  
          <h1>UX Portfolio</h1> 
        </div>
      </header>
      <section>
        <div className="text-2xl">  
          <h2>Poom Yimyuean</h2> 
        </div>
      </section>
    </div>
  )
}

export default Home; 