
import travelLogo from '../assets/travellogo.png'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div id="footer" className={styles.footer}>
      <div className={styles.footerinner}>
      <div className={styles.footerlogo}>
      <img id='logo-image' src={travelLogo}/>
      <span>Travel</span>
      </div>
      <p>Copyright © 2024 Travel, Inc.</p>
      </div>
    </div>
  )
}
