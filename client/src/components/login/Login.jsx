import './login.modules.css'
import useForm from '../../hooks/useForm';
import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

export default function Login() {

  const {loginSubmitHandler} = useContext(AuthContext)
  const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
    email: '',
    password: ''
  })

  return (
    <>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <div className="user-box">
            <input type="email" name="email" onChange={onChange} value={values.email} />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" onChange={onChange} value={values.password} />
            <label>Password</label>
          </div>
          <input type="submit" value="Login" className='btn'></input>
        </form>
      </div>
    </>
  );
}
