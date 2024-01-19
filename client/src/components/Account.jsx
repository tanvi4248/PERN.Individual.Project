import { useSelector } from "react-redux"
import { useGetGuestQuery } from "../redux/api"
import styles from './Account.module.css'

export default function Account() {
    const token = useSelector(state => state.token)
    const {data: user ,error, isLoading } = useGetGuestQuery()
    console.log(user)
    if (!token) {
        return
    }
    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }
    
    if (error || !user) {
        return <div className="error">Error: {error}</div>;
    }

  return (
    <>
    <div className={styles.accountdetail}>
      <h2 className="name">{user.firstname} detail page</h2>
      <div className="email">{user.email}</div>
    </div>
  </>
  )
}
