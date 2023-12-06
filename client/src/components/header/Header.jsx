import './header.modules.css'

import {Link} from 'react-router-dom'
import { useContext } from 'react';


import { logout } from '../../services/authService';
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
            <Link to="/all">Destinations</Link>
            {isAuthenticated && (
            <>
              <Link to="/BucketList">My bucket list</Link>
              <Link to="/logout" onClick={logout}>Logout</Link>
            </>
            )}
            {!isAuthenticated && (
            <>
               <Link to="/login">Login</Link>
               <Link to="/register">Register</Link>
            </>
            )}
          </div>
        </header>
        <div className='line' />
      </div>
    </>
  );
}
