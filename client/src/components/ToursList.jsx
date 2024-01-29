import {useGetToursQuery} from '../redux/api'
import { useNavigate } from "react-router-dom"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './TourList.module.css'
import Button from 'react-bootstrap/Button'
import { useState } from "react"
export default function ToursList() {
  const { data, error, isLoading } = useGetToursQuery()
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredItems, setFilteredItems] = useState([])
  console.log(data)
  const navigate = useNavigate()
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
      return <div>Failed to load Tours. Try again later.</div>
  }
    //search functionality
    const handleInputChange = (event) => {
      const query = event.target.value
      setSearchQuery(query)
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredItems(filtered)
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredItems(filtered)
    }
  return (
    <>
          <div className={styles.titlesearch}>
          <h1>Find your Perfect Vacation</h1>
        <div className="seachbar">
          <form className={styles.searchbar} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Button variant="secondary" type="submit">Search</Button>
          </form>
        </div>
      </div>
    <div className={styles.tourlist}>
      <Row>
      {searchQuery === "" ? (
      data.map((tour) => (
        <Col key={tour.id} xs="4" className={styles.tours}>
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
      ))
      ) : filteredItems.length > 0 ? (
        filteredItems.map((tour) => (
          <Col key={tour.id} xs="4" className='tours'>
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
        ))
        ) : (
          <div>No matching tours found</div>
        )}
      </Row>
    </div>
    </>
  )
}
