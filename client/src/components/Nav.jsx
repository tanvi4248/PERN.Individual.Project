import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/tours">Tours</Link>       
    </div>
  )
}
