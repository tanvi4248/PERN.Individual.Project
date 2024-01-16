import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import ToursList from './components/ToursList'
import AuthForm from './components/AuthForm'
import Account from './components/Account'
import SingleTour from './components/SingleTour'
function App() {
  return (
    <>
      <Nav></Nav>
      <div className='content'>
      <Routes>
        <Route to="/" element={<ToursList/>}></Route>
        <Route path="/tours" element={<ToursList />} />
        <Route path="/tours/:tourId" element={<SingleTour />}/>
        <Route path="/login" element={<AuthForm type="login" />}/>
        <Route path="/register" element={<AuthForm type="register" />}/>
        <Route path="/account" element={<Account />} />
      </Routes>
      </div>
    </>
  )
}

export default App
