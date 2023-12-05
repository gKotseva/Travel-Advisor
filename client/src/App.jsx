import Home from "./components/home/home.jsx"
import {Routes, Route, useNavigate} from 'react-router-dom'
import { useState } from "react"
import Cookies from 'js-cookie'

import Intro from "./components/intro/Intro.jsx"
import Header from "./components/header/Header.jsx"
import Login from "./components/login/Login.jsx"
import Register from "./components/register/Register.jsx"
import Destinations from "./components/destinations/Destinations.jsx"
import { AuthContext } from "./components/contexts/authContext.js"
import Destination from "./components/destination/Destination.jsx"
import Logout from "./components/logout/Logout.jsx"

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
    let response = await authService.login(values.email, values.password, values.repeatPassword)

    setAuth(response)
    navigate(Path.Home)
  }

  const registerSubmitHandler = async (values) => {
    let response = await authService.register(values.email, values.password, values.repeatPassword)
    if(response.success){
      let loginResponse = await authService.login(values.email, values.password)
      setAuth(loginResponse)
      navigate(Path.Home)
    }
  }

  const logoutHandler = () => {
    setAuth({})
    navigate(Path.Home)
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    isAuthenticated: !!auth.token
  }

  return (
    <>
    <AuthContext.Provider value={values}>
      {/* <Intro /> */}
      <Header/>
        <Routes>
          <Route path={Path.Home} element={<Home />}></Route>
          <Route path={Path.Login} element={<Login />}></Route>
          <Route path={Path.Register} element={<Register />}></Route>
          <Route path={Path.Destinations} element={<Destinations />}></Route>
          <Route path={Path.Logout} element={<Logout />}></Route>
          <Route path={Path.DestinationId} element={<Destination />}></Route>
        </Routes>
    </AuthContext.Provider>

    </>
  )
}

export default App
