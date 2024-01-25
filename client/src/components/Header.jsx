import styles from './Header.module.css'
import travelLogo from '../assets/travellogo.png'
import Nav from './Nav'
export default function Header() {
  return (
    <div id='header' className={styles.header}>
    <div className={styles.headerinner}>
      <div className={styles.logo}>
      <img id='logo-image' src={travelLogo}/>
      <span>Travel</span>
      </div>
    <Nav></Nav>
    </div>
  </div>
  )
}
