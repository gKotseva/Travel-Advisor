import { useContext } from 'react';
import useForm from '../../hooks/useForm';
import './register.modules.css'
import { AuthContext } from '../contexts/authContext';

const RegisterFormKeys = {
  Email: 'email',
  Password: 'password',
  RepeatPassword: 'repeatPassword'
}

export default function Register() {

  const {registerSubmitHandler} = useContext(AuthContext)

  const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: '',
    [RegisterFormKeys.Password]: '',
    [RegisterFormKeys.RepeatPassword]: '',
  })
  return (
    <>
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={onSubmit}>
          <div className="user-box">
            <input type="text" name="email" onChange={onChange} value={values[RegisterFormKeys.Email]}/>
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" onChange={onChange} value={values[RegisterFormKeys.Password]}/>
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="repeatPassword" onChange={onChange} value={values[RegisterFormKeys.RepeatPassword]}/>
            <label>Repeat Password</label>
          </div>
          <input type="submit" value="Register" className='register-btn'></input>
        </form>
      </div>
    </>
  );
}
