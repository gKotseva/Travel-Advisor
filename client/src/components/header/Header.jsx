import './header.modules.css'

import {Link} from 'react-router-dom'
import { useContext } from 'react';


import { logout } from '../../services/authService';
import { AuthContext } from '../contexts/authContext';

export default function Header() {
  const {
    isAuthenticated,
  } = useContext(AuthContext)
  return (
    <>
      <div>
        <header>
        <img src='./homeImages/1.png' className='headerImg'/>
          <div className="navMenu">
            <Link to="/">Home</Link>
            <Link to="/all">Destinations</Link>
            {isAuthenticated && (
            <>
              <Link to="/profile">Profile</Link>
              <Link to="/logout" onClick={logout}>Logout</Link>
            </>
            )}
            {!isAuthenticated && (
            <>
               <Link to="/register">Register</Link>
               <Link to="/login">Login</Link>
            </>
            )}
          </div>
        </header>
        <div className='line' />
      </div>
    </>
  );
}
