import Image from 'next/image'
import { TiTick } from 'react-icons/ti'
import styles from './hero.module.css'
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <h1 className={styles.title}>Vica Web Solutions</h1>
        <p className={styles.desc}>
          a startup passionate about crafting innovative and <br /> visually
          stunning web solutions.
        </p>
        <div className={styles.services}>
          <div className={styles.serviceItem}>
            <TiTick /> Web Development
          </div>
          <div className={styles.serviceItem}>
            <TiTick /> Online Training
          </div>
          <div className={styles.serviceItem}>
            <TiTick /> Website Maintenance
          </div>
        </div>
      </div>
      <div>
        <Image src="/hero.webp" alt="vica" width={300} height={300} />
      </div>
    </div>
  )
}

export default Hero
