import './header.modules.css'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <>
      <div>
        <header>
          <div className="navMenu">
            <Link to="/">Home</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/my-destinations">My destinations</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/logout">Logout</Link>
            <div className="dot"></div>
          </div>
        </header>
      </div>
    </>
  );
}
