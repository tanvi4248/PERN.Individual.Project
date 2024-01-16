import {useGetSingleTourQuery} from '../redux/api'
import { useParams } from "react-router-dom"
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
    <div className='single-tour'>
      <div className='title'>{tour.title}</div>
      <div className='img'>
            <img src={tour.imgUrl} alt={tour.title}></img>
            </div>
      <div className='description'>{tour.description}</div>
      <a className='map' href={tour.googlemap}>Google Map</a>
 
    </div>
  )
}
