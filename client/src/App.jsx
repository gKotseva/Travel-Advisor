import Home from "./components/home/home.jsx"
import {Routes, Route, useNavigate} from 'react-router-dom'
import { useState } from "react"
import Cookies from 'js-cookie'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/header/Header.jsx"
import Login from "./components/login/Login.jsx"
import Register from "./components/register/Register.jsx"
import Destinations from "./components/destinations/Destinations.jsx"
import { AuthContext } from "./components/contexts/authContext.js"
import Destination from "./components/destination/Destination.jsx"
import Logout from "./components/logout/Logout.jsx"
import Profile from "./components/profile/Profile.jsx";


import Path from "./paths.js"
import * as authService from './services/authService.js'

function App() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(() => {
    if(Cookies.get('token')){
      return {token: Cookies.get('token')}
    }

    return {}
  })

  const loginSubmitHandler = async (values) => {
    const isSuccess = true
    let response = await authService.login(values.email, values.password)

    let {email, firstName, lastName} = response

    let userInfo = {
      email,
      firstName,
      lastName
    }
  
    if (response.firstName && response.lastName) {
      localStorage.setItem('user', `${JSON.stringify(userInfo)}`)
    }
  
    if (isSuccess && response.message) {
      toast.success(response.message)
      setAuth(response)
      navigate(Path.Home)
    } else {
      toast.error(response.error)
    }
  }
  
  const registerSubmitHandler = async (values) => {
    const isSuccess = true
    let response = await authService.register(values.firstName, values.lastName, values.email, values.password, values.repeatPassword)
  
    let {email, firstName, lastName} = response

    let userInfo = {
      email,
      firstName,
      lastName
    }

    if (isSuccess && response.message) {
      toast.success(response.message)
  
      if (response.firstName && response.lastName) {
        localStorage.setItem('user', `${JSON.stringify(userInfo)}`)
      }
  
      setAuth(response)
      navigate(Path.Home)
    } else {
      toast.error(response.error)
    }
  
    if (response.success) {
      let loginResponse = await authService.login(values.email, values.password)

      let {email, firstName, lastName} = loginResponse

      let userInfo = {
        email,
        firstName,
        lastName
      }
  
      if (loginResponse.firstName && loginResponse.lastName) {
        localStorage.setItem('user', `${JSON.stringify(userInfo)}`)
      }
  
      setAuth(loginResponse)
      navigate(Path.Home)
    }
  }

  const logoutHandler = () => {
    const isSuccess = true
    localStorage.removeItem('user')

    if(isSuccess) {
      toast.success('Logout successful!')
    }

    setAuth({})
    navigate(Path.Home)
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    isAuthenticated: !!auth.token,
  }

  return (
    <>
    <ToastContainer />
    <AuthContext.Provider value={values}>
      <Header/>
        <Routes>
          <Route path={Path.Home} element={<Home />}></Route>
          <Route path={Path.Login} element={<Login />}></Route>
          <Route path={Path.Register} element={<Register />}></Route>
          <Route path={Path.Destinations} element={<Destinations />}></Route>
          <Route path={Path.Logout} element={<Logout />}></Route>
          <Route path={Path.DestinationId} element={<Destination />}></Route>
          <Route path={Path.Profile} element={<Profile />}></Route>
        </Routes>
    </AuthContext.Provider>

    </>
  )
}

export default App
