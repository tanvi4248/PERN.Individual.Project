import { Link,useNavigate } from "react-router-dom";
import { logOut } from '../redux/tokenSlice'
import { selectCurrentToken, selectCurrentGuest } from "../redux/tokenSlice"
import { useDispatch, useSelector } from 'react-redux'
import styles from './Nav.module.css'


export default function Nav() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(selectCurrentToken)
  const guest = useSelector(selectCurrentGuest)
  console.log(token)
  const handleLogout = async () => {
    dispatch(logOut())
    navigate("/")
  }

  return (
    <div id="navbar" className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/tours">Tours</Link> 
        {token ? (
          <>
            <Link to="/account">Account</Link>
            <Link to={`/${guest.id}/reservations`}>Reservations</Link>
            <Link to="/" onClick={() => handleLogout()}>Logout</Link>
          </>
        ) : (
          <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          </>
        )}      
    </div>
  )
}
