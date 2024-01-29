import {useGetSingleTourQuery,useReservationsMutation} from '../redux/api'
import { useParams,Link } from "react-router-dom"
import styles from './SingleTour.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { selectCurrentToken,selectCurrentGuest } from "../redux/tokenSlice"
import Button from 'react-bootstrap/Button'
export default function SingleTour() {
  const {tourId} = useParams()
  const token = useSelector(selectCurrentToken)
  const guest = useSelector(selectCurrentGuest)
  const { data: tour, error, isLoading } = useGetSingleTourQuery(tourId)
  const [reservations] = useReservationsMutation()
  const navigate = useNavigate()

  const handleReserve = async (e) => {
    e.preventDefault()
    await reservations({ guestsId: guest.id, tourId}).unwrap() 
    navigate(`/${guest.id}/reservations`)
  }

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
              <img src={tour.imgurl} alt={tour.title}></img>
        </div>
      </Col>
      <Col xs={7}>
        <h2 className={styles.title}>{tour.title}</h2>
        <div className={styles.description}>{tour.description}</div>
        <a className={styles.map} href={tour.googlemap}>View in a map</a>
        <div className={styles.price}>${tour.price} <span>includes taxes & fees</span></div>
        {token ? (
            <Button variant="primary" onClick={handleReserve}>Reserve</Button>
          ) : (
            <Button>
              <Link to="/login">Login to Reserve</Link>
            </Button>
          )}
      </Col>
      </Row>
    </div>
    </>
  )
}
