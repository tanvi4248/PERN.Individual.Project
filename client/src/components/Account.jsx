import { useSelector } from "react-redux"
import styles from './Account.module.css'
import { selectCurrentToken, selectCurrentGuest } from "../redux/tokenSlice"
export default function Account() {
  const token = useSelector(selectCurrentToken);
  const guest = useSelector(selectCurrentGuest);
  console.log("Token:", token);
  console.log("User:", guest);
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
