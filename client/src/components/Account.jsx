import { useSelector } from "react-redux"
import styles from './Account.module.css'
import { selectCurrentGuest } from "../redux/tokenSlice"
export default function Account() {
  const guest = useSelector(selectCurrentGuest)
  return (
    <>
    <h1>Guest Detail</h1>
    <div className={styles.accountdetail}>
      <h2 className="name">Name: {guest.firstname}</h2>
      <div className="email">Email: {guest.email}</div>
    </div>
  </>
  )
}
