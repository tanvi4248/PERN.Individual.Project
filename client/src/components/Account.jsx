import { useSelector } from "react-redux"
import { useGetGuestQuery } from "../redux/api"
export default function Account() {
    const token = useSelector(state => state.token)
    const {data ,error, isLoading } = useGetGuestQuery()
    console.log(data)
    if (!token) {
        return
    }
    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }
    
    if (error || !data) {
        return <div className="error">Error: {error}</div>;
    }

  return (
    <>
    <div className="account-details">
      <h2 className="name">{data.firstname} detail page</h2>
      <div className="email">{data.email}</div>
    </div>
  </>
  )
}
