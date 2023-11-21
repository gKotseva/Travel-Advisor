import './home.modules.css'
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <>
      <div className="intro">
        <h1 className="logo-header">
          <span className="logo">Travel </span>
          <span className="logo">Advisor.</span>
        </h1>
      </div>

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

      <div className="home">
        <img src="1.png" />
      </div>
     
    </>
  );
}
