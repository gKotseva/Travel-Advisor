import Home from "./components/home/home.jsx"
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import Login from "./components/login/Login.jsx"
import Header from "./components/header/Header.jsx"
import Register from "./components/register/Register.jsx"
import Intro from "./components/intro/Intro.jsx"
import Destinations from "./components/destinations/Destinations.jsx"
import { useState } from "react"
import { AuthContext } from "./components/contexts/authContext.js"
import Path from "./paths.js"
import * as authService from './services/authService.js'

function App() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState({})

  const loginSubmitHandler = async (values) => {
    let response = await authService.login(values.email, values.password, values.repeatPassword)
    console.log(response)
    setAuth(response)
    navigate(Path.Home)
  }

  const registerSubmitHandler = async (values) => {
    let response = await authService.register(values.email, values.password, values.repeatPassword)
    if(response.success){
      await authService.login(values.email, values.password)
      setAuth(response)
      navigate(Path.Home)
    }
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    email: auth.email,
    isAuthenticated: !!auth.email
  }

  console.log(values)

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
          <Route path={Path.Logout} element={null}></Route>
        </Routes>
    </AuthContext.Provider>

    </>
  )
}

export default App
