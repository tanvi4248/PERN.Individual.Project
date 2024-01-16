import { Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav';
import ToursList from './components/ToursList';
function App() {
  return (
    <>
      <Nav></Nav>
      <div className='content'>
      <Routes>
        <Route to="/" element={<ToursList/>}></Route>
        <Route path="/tours" element={<ToursList />} />
      </Routes>
      </div>
    </>
  )
}

export default App
