import {useGetSingleTourQuery} from '../redux/api'
import { useParams } from "react-router-dom"
import styles from './SingleTour.module.css'
import Button from 'react-bootstrap/Button';

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
      <h2 className={styles.title}>{tour.title}</h2>
      <div className={styles.img}>
            <img src={tour.imgUrl} alt={tour.title}></img>
            </div>
      <div className={styles.description}>{tour.description}</div>
      <a className={styles.map} href={tour.googlemap}>Google Map</a>
      <Button variant="primary" className={styles.reserve}>Reserve</Button>
    </div>
    </>
  )
}
