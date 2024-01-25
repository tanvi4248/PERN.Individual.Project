import {useGetToursQuery} from '../redux/api'
import { useNavigate } from "react-router-dom"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './TourList.module.css'
import Button from 'react-bootstrap/Button';
export default function ToursList() {
  const { data, error, isLoading } = useGetToursQuery()
  console.log(data)
  const navigate = useNavigate()
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
      return <div>Failed to load Tours. Try again later.</div>
  }
  return (
    <>
    <h1>Find your Perfect Vacation</h1>
    <div className='tour-list'>
      <Row>
      {data.map((tour) => (
        <Col key={tour.id} xs="4" >
        <div className={styles.tourcard}>
            <div className={styles.tourtitle}>{tour.title}</div>
            <div className={styles.description}>{tour.description}</div>
            <div className={styles.img}>
            <img src={tour.imgurl} alt={tour.title}></img>
            </div>
            <div className={styles.pricedetail}>
            <div className={styles.price}>${tour.price} <br/> <span>includes taxes & fees</span></div>
            <Button variant="primary" className={styles.detail} onClick={() => navigate(`/tours/${tour.id}`)}>See Details</Button>
            </div>
        </div>
        </Col>
      ))}
      </Row>
    </div>
    </>
  )
}
