import './login.modules.css'

import { useContext } from 'react';

import useForm from '../../hooks/useForm';
import { AuthContext } from '../contexts/authContext';

const LoginFormKeys = {
  Email: 'email',
  Password: 'password'
}

export default function Login() {

  const {loginSubmitHandler} = useContext(AuthContext)
  const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: ''
  })

  return (
    <>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <div className="user-box">
            <input type="email" name="email" autoComplete="username" onChange={onChange} value={values[LoginFormKeys.Email]} />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" autoComplete="current-password" onChange={onChange} value={values[LoginFormKeys.Password]} />
            <label>Password</label>
          </div>
          <input type="submit" value="Login" className='login-btn'></input>
        </form>
      </div>
    </>
  );
}
