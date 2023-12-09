import { useContext } from 'react';
import useForm from '../../hooks/useForm';
import './register.modules.css'
import { AuthContext } from '../contexts/authContext';

const RegisterFormKeys = {
  FirstName: 'firstName',
  LastName: 'lastName',
  Email: 'email',
  Password: 'password',
  RepeatPassword: 'repeatPassword'
}

export default function Register() {

  const {registerSubmitHandler} = useContext(AuthContext)

  const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
    [RegisterFormKeys.FirstName]: '',
    [RegisterFormKeys.LastName]: '',
    [RegisterFormKeys.Email]: '',
    [RegisterFormKeys.Password]: '',
    [RegisterFormKeys.RepeatPassword]: '',
  })
  return (
    <>
    <div className='infoRegister'>
      <p>&#8226; Your password should be more than <span>4</span> characters long!</p>
      <p>&#8226; Your email should be more than <span>10</span> characters long!</p>
      <p>&#8226; All fields are required!</p>
    </div>
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={onSubmit}>
        <div className="user-box">
            <input type="text" name="firstName" autoComplete="username" onChange={onChange} value={values[RegisterFormKeys.FirstName]}/>
            <label>First Name <span>*</span></label>
          </div>
          <div className="user-box">
            <input type="text" name="lastName" autoComplete="username" onChange={onChange} value={values[RegisterFormKeys.LastName]}/>
            <label>Last Name <span>*</span></label>
          </div>
          <div className="user-box">
            <input type="text" name="email" autoComplete="username" onChange={onChange} value={values[RegisterFormKeys.Email]}/>
            <label>Email <span>*</span></label>
          </div>
          <div className="user-box">
            <input type="password" name="password" autoComplete="current-password" onChange={onChange} value={values[RegisterFormKeys.Password]}/>
            <label>Password <span>*</span></label>
          </div>
          <div className="user-box">
            <input type="password" name="repeatPassword" autoComplete="current-password" onChange={onChange} value={values[RegisterFormKeys.RepeatPassword]}/>
            <label>Repeat Password <span>*</span></label>
          </div>
          <input type="submit" value="Register" className='register-btn'></input>
        </form>
      </div>
    </>
  );
}
