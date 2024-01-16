import {useGetToursQuery} from '../redux/api'
export default function ToursList() {
  const { data, error, isLoading } = useGetToursQuery();
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
      return <div>Failed to load Books. Try again later.</div>
  }
  return (
    <div className='tour-list'>
      {data.map((tour) => (
        <div key={tour.id} className='tour-card'>
            <div className='tour-title'>{tour.title}</div>
            <div className='tour-description'>{tour.description}</div>
            <a className='tour-map' href={tour.googlemap}>Google Map</a>
            <div className='tour-img'>
            <img src={tour.imgUrl} alt={tour.title}></img>
            </div>
        </div>
      ))}
    </div>
  )
}
