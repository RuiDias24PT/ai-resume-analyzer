import { Link } from "react-router"
const navBar = () => {
  return (
    <nav className="navbar">
        <Link to="/">
            <p className="text-2xl font-bold text-gradient">RESUMIND</p>
        </Link>
        <Link to='/upload' className="primary-button w-fit">
            <Link to="/">
               Upload Resume
            </Link>
        </Link>
    </nav>
  )
}

export default navBar