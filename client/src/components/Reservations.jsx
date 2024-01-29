import { useGetReservationsQuery,useDeleteReservationsMutation } from '../redux/api'
import { useSelector } from "react-redux"
import { selectCurrentToken, selectCurrentGuest } from "../redux/tokenSlice"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './Reservations.module.css'
import Button from 'react-bootstrap/Button'

export default function Reservations() {
  const token = useSelector(selectCurrentToken);
  const guest = useSelector(selectCurrentGuest);
  const {data: reservations, isLoading, error} = useGetReservationsQuery(guest.id)
  const [deleteReservations] = useDeleteReservationsMutation()

  console.log(reservations)
    // const [deleteTour] = useDeleteTourMutation()
    if (!token) {
      return;
    }
    if (isLoading) {
        return <div className="loading">Loading...</div>
    }

    if (error || !reservations) {
        return <div className="error">Error: {error.message}</div>
    }

    function getTotal() {
      let total = 0
      reservations.forEach((reservation) => {
        total = total + reservation.price
      })
      return total
    }
    const totalPrice = getTotal();
    return (
        <div className="usertours">
        <h1>checkout tours</h1>
        {reservations.map((reservation) =>  {
            return (
            <div className={styles.checkouttour} key={reservation.tourId}>
                    <Row>
                    <Col xs={2}>
            <div className="img">
                <img src={reservation.imgurl} alt={reservation.title}></img>
            </div>
            </Col>
            <Col xs={10} className={styles.moredetail}>
            <div className={styles.detail}>
            <div className={styles.title}>{reservation.title}</div>
            <div className={styles.price}>${reservation.price}</div>
            </div>
            <Button variant="primary"
                    onClick={() => deleteReservations(reservation.reservationId)}
                  >
                    Delete
                  </Button>
            </Col>

            </Row>
            </div>
            )
          })}
        <div className={styles.totalprice}>Total Price: ${totalPrice}</div>
      </div>
    )
}
