import PropTypes from 'prop-types';
import {useLoginMutation,useRegisterMutation} from '../redux/api'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function AuthForm({ type }) {
    const [register] = useRegisterMutation();
    const [login] = useLoginMutation();
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault()
        if (type === "register") {
            await register({ firstname, lastname, email, password })
            navigate('/account')
        }

        if (type === "login") {
            await login({ firstname, password })
            navigate('/account')
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='firstname'>Firstname</label>
            <input 
            type='text' 
            name='firstname' 
            onChange={e => setFirstname(e.target.value)} 
            value={firstname}/>
        </div>
        {type === "register" &&
        <div>
            <label htmlFor='lastname'>Lastname</label>
            <input 
            type='text' 
            name='lastname' 
            onChange={e => setLastname(e.target.value)} 
            value={lastname}/>
        </div>
        }
         {type === "register" &&
        <div>
            <label htmlFor='email'>Email</label>
            <input 
            type='text' 
            name='email'
            onChange={e => setEmail(e.target.value)} 
            value={email}/>
        </div>
        }
        <div>
            <label htmlFor='password'>Password</label>
            <input 
            type='password' 
            name='password'
            onChange={e => setPassword(e.target.value)} 
            value={password}/>
        </div>
        <button type='submit'>{type === 'login' ? "Log In" : "Register"}</button>
    </form>
  )
}


AuthForm.propTypes = {
    type: PropTypes.oneOf(['login', 'register'])
}
