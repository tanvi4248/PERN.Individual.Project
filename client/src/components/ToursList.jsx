import {useGetToursQuery} from '../redux/api'
import { useNavigate } from "react-router-dom"
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
    <div className='tour-list'>
      {data.map((tour) => (
        <div key={tour.tourId} className='tour-card'>
            <div className='tour-title'>{tour.title}</div>
            <div className='tour-description'>{tour.description}</div>
            <a className='tour-map' href={tour.googlemap}>Google Map</a>
            <div className='tour-img'>
            <img src={tour.imgUrl} alt={tour.title}></img>
            </div>
            {tour.id}
            <button className='btn-detail' onClick={() => navigate(`/tours/${tour.tourId}`)}>See Details</button>
        </div>
      ))}
    </div>
  )
}
