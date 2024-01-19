import {useGetSingleTourQuery} from '../redux/api'
import { useParams } from "react-router-dom"
import styles from './SingleTour.module.css'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function SingleTour() {
  const {tourId} = useParams()
  const { data: tour, error, isLoading } = useGetSingleTourQuery(tourId)
  console.log(tour)
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error || !tour) {
      return <div>Failed to load Books. Try again later.</div>
  }
  return (
    <>
    <h1>Your package</h1>
    <div className={styles.singletour}>
      <Row>
      <Col xs={5}>
        <div className={styles.img}>
              <img src={tour.imgUrl} alt={tour.title}></img>
        </div>
      </Col>
      <Col xs={7}>
        <h2 className={styles.title}>{tour.title}</h2>
        <div className={styles.description}>{tour.description}</div>
        <a className={styles.map} href={tour.googlemap}>View in a map</a>
        <div className={styles.price}>${tour.price} <span>includes taxes & fees</span></div>
        <Button variant="primary" className={styles.reserve}>Reserve</Button>
      </Col>
      </Row>
    </div>
    </>
  )
}
