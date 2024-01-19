import { Routes, Route } from 'react-router-dom'
import travelLogo from './assets/travellogo.png'
import styles from './App.module.css'
import Nav from './components/Nav'
import ToursList from './components/ToursList'
import Home from './components/Home'
import AuthForm from './components/AuthForm'
import Account from './components/Account'
import SingleTour from './components/SingleTour'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <div id='header' className={styles.header}>
        <div className={styles.headerinner}>
          <div className={styles.logo}>
          <img id='logo-image' src={travelLogo}/>
          <span>Travel</span>
          </div>
        <Nav></Nav>
        </div>
      </div>
      <div className='content'>
      <Container>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tours" element={<ToursList />} />
        <Route path="/tours/:tourId" element={<SingleTour />}/>
        <Route path="/login" element={<AuthForm type="login" />}/>
        <Route path="/register" element={<AuthForm type="register" />}/>
        <Route path="/account" element={<Account />} />
      </Routes>
      </Container>
      </div>
    </>
  )
}

export default App
