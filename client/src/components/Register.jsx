import { useState } from "react";
import { useRegisterMutation } from "../redux/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setGuestdata,setToken } from "../redux/tokenSlice";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './AuthForm.module.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Register() {
  const [guest, setGuest] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [register, { data, isSuccess }] = useRegisterMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { firstname, lastname, email, password } = guest
    //Note: this is without the await keyword for your dispatch
    await register({password,firstname,lastname,email}).unwrap()
    setGuest({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    })
    if (isSuccess) {
      dispatch(setGuestdata(data))
      dispatch(setToken(data))
      navigate("/account");
    }
  }

  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(setGuestdata(data))
  //     dispatch(setToken(data))
  //     navigate("/account");
  //   }
  // }, [isSuccess]);

  return (
    <div>
      <h1>Registration</h1>
      <Row className={styles.formrow}>
      <Col xs={5}>
      <Form onSubmit={handleSubmit} className={styles.form}>
      <Form.Group controlId="firstname">
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                    required
                    type="text"
                    onChange={e => setGuest({ ...guest, firstname: e.target.value })}
                />
        </Form.Group>
        <Form.Group controlId="lastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                    required
                    type="text"
                    onChange={e => setGuest({ ...guest, lastname: e.target.value })}
                />
        </Form.Group>
        <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    required
                    type="text"
                    onChange={e => setGuest({ ...guest, email: e.target.value })}
                />
        </Form.Group>
        <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    onChange={e => setGuest({ ...guest, password: e.target.value })}
                />
                </Form.Group>
      <Button type='submit' variant="primary">Register</Button>

      </Form>
      </Col>
    </Row>
    </div>
  )
}

export default Register;