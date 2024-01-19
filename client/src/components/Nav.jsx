import { Link,useNavigate } from "react-router-dom";
import { setToken } from '../redux/tokenSlice'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Nav.module.css'


export default function Nav() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(state => state.token)
  return (
    <div id="navbar" className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/tours">Tours</Link> 
        {token ? (
          <>
            <Link to="/account">Account</Link>
            <Link to="/" onClick={() => {
                dispatch(setToken({token: null}))
                navigate('/');
            }}>Logout</Link>
          </>
        ) : (
          <>
          <Link to="/login" onClick={() => navigate('/login')}>Login</Link>
          <Link to="/register" onClick={() => navigate('/register')}>Register</Link>
          </>
        )}      
    </div>
  )
}
