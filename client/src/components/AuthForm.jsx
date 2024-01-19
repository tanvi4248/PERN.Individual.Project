import PropTypes from 'prop-types';
import {useLoginMutation,useRegisterMutation} from '../redux/api'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from './AuthForm.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// eslint-disable-next-line react/prop-types
export default function AuthForm({ type }) {
    const [register] = useRegisterMutation();
    const [login] = useLoginMutation();
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

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
    <>
    {type === "register" ?
      <h1>Register Form</h1> : <h1>Login Form</h1>            
    }
    <Row className={styles.formrow}>
        <Col xs={5}>
            <Form onSubmit={handleSubmit} className={styles.form}>
                <Form.Group controlId="firstname">
                <Form.Label>First name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    onChange={e => setFirstname(e.target.value)}
                    defaultValue={firstname}
                />
                </Form.Group>
                {/* <div>
                    <label htmlFor='firstname'>Firstname</label>
                    <input 
                    type='text' 
                    name='firstname' 
                    onChange={e => setFirstname(e.target.value)} 
                    value={firstname}/>
                </div> */}
                {type === "register" &&
                <Form.Group controlId="lastname">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    onChange={e => setLastname(e.target.value)}
                    defaultValue={lastname}
                />
                </Form.Group>
                }
                {type === "register" &&
                <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    required
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                    defaultValue={email}
                />
                </Form.Group>
                }
                <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    defaultValue={password}
                />
                </Form.Group>
                <Button type='submit' variant="primary">{type === 'login' ? "Log In" : "Register"}</Button>
            </Form>
        </Col>
    </Row>
    </>
  )
}


AuthForm.propTypes = {
    type: PropTypes.oneOf(['login', 'register'])
}
