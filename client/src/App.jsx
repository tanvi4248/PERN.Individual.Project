import { Routes, Route } from 'react-router-dom'
import ToursList from './components/ToursList'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Reservations from './components/Reservations'
import Account from './components/Account'
import SingleTour from './components/SingleTour'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Header></Header>
      <div className='content'>
      <Container>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tours" element={<ToursList />} />
        <Route path="/tours/:tourId" element={<SingleTour />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/:guestsId/reservations" element={<Reservations/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/account" element={<Account />} />
      </Routes>
      </Container>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
