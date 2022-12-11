import type { NextPage } from 'next'; 
import { motion } from 'framer-motion'; 
import Head from 'next/head'; 
import Link from 'next/link'; 
import styles from '../styles/Home.module.css'; 

const draw = {
  hidden: { pathLength: 0, opacity: 0},
  visible: (i: number) => {
    const delay = 1 + (0.5 * i); 
    return {
      pathLength: 1, 
      opacity: 1, 
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 } 
      }
    }
  }
};

const Home: NextPage = () => {
  return(
    <div className={styles.home}> 
      <Head>
        <link rel="icon" type="image/png" href="./img/icon/icon.png" /> 
        <title>UX Portfolio | Poom Yimyuean</title>
      </Head>
      <header>
        <motion.div initial="hidden" animate="visible" >
          <div className="text-5xl">  
            <h1>UX Portfolio</h1> 
          </div>
        </motion.div>
      </header>
      <section>
        <div className="text-2xl">  
          <h2>Poom Yimyuean</h2> 
        </div>
        <div>
          <motion.svg width="500" height="500" viewBox="0 0 500 500" initial="hidden" animate="visible">
            <motion.circle cx="100" cy="100" r="80" stroke="#000000" variants={draw} custom={3} />   
          </motion.svg>
        </div>
      </section>
    </div>
  )
}

export default Home; 