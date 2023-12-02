import { logout } from '../../services/authService';
import './header.modules.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

export default function Header() {
  const {
    isAuthenticated,
    email
  } = useContext(AuthContext)
  return (
    <>
      <div>
        <header>
          <div className="navMenu">
            <Link to="/">Home</Link>
            <Link to="/destinations">Destinations</Link>
            {isAuthenticated && (
            <>
              <Link to="/my-destinations">My destinations</Link>
              <Link to="/my-destinations">Add destination</Link>
              <Link to="/logout" onClick={logout}>Logout</Link>
            </>
            )}
            {!isAuthenticated && (
            <>
               <Link to="/login">Login</Link>
               <Link to="/register">Register</Link>
            </>
            )}
            <div className="dot"></div>
          </div>
        </header>
        <div className='line' />
      </div>
    </>
  );
}
