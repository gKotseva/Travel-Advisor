import { useContext } from 'react';
import useForm from '../../hooks/useForm';
import './register.modules.css'
import { AuthContext } from '../contexts/authContext';

export default function Register() {

  const {registerSubmitHandler} = useContext(AuthContext)

  const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
    email: '',
    password: '',
    repeatPassword: '',
  })
  return (
    <>
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={onSubmit}>
          <div className="user-box">
            <input type="text" name="email" onChange={onChange} value={values.email}/>
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" onChange={onChange} value={values.password}/>
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="repeatPassword" onChange={onChange} value={values.repeatPassword}/>
            <label>Repeat Password</label>
          </div>
          <input type="submit" value="Register" className='btn'></input>
        </form>
      </div>
    </>
  );
}
