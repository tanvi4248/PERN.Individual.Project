import { Link,useNavigate } from "react-router-dom";
import { setToken } from '../redux/tokenSlice'
import { useDispatch, useSelector } from 'react-redux'


export default function Nav() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(state => state.token)
  return (
    <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/tours">Tours</Link> 
        {token ? (
          <>
            <Link to="/account">Account</Link>
            <a onClick={() => {
                dispatch(setToken({token: null}))
                navigate('/');
            }}>Logout</a> 
          </>
        ) : (
          <>
            <a onClick={() => navigate('/login')}>Login</a>
            <a onClick={() => navigate('/register')}>Register</a> 
          </>
        )}      
    </div>
  )
}
