import { useState } from "react"
import { useLoginMutation } from "../redux/api"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setGuestdata,setToken } from "../redux/tokenSlice"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './AuthForm.module.css'

function Login() {
  const [guestLogin, setGuestLogin] = useState({ firstname: "", password: "" })
  const [login, { data, isSuccess }] = useLoginMutation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(guestLogin)
    const { firstname, password } = guestLogin
    //Note: this is without the await keyword for your dispatch
    await login({ firstname, password }).unwrap()
    if (isSuccess) {
      console.log(data)
      dispatch(setGuestdata(data))
      dispatch(setToken(data))
      navigate("/account")
    }
  }


  return (
    <div>
      <h1>Login</h1>
      <Row className={styles.formrow}>
      <Col xs={5}>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <Form.Group controlId="firstname">
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                    required
                    type="text"
                    onChange={e => setGuestLogin({ ...guestLogin, firstname: e.target.value })}
                />
        </Form.Group>
        <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    onChange={e => setGuestLogin({ ...guestLogin, password: e.target.value })}
                />
                </Form.Group>
                <Button type='submit' variant="primary">Login</Button>
      </Form>
      </Col>
    </Row>
    </div>
  );
}

export default Login;