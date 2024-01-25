import styles from './Home.module.css'
import bg from '../assets/bghome.jpg'

export default function Home() {
  return (
    <>
    <div className={styles.bg}>
      <img id='background-image' src={bg}/>
      <div className={styles.home}>
    <h1>Just go.<br/>Go see all the beauty<br/> in the world.</h1>
    </div>
    </div>

    </>
  )
}
