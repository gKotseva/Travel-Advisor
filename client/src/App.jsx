import Home from "./components/home/home.jsx"
import {Routes, Route} from 'react-router-dom'
import Login from "./components/login/Login.jsx"
import Header from "./components/header/Header.jsx"
import Register from "./components/register/Register.jsx"
import Intro from "./components/intro/Intro.jsx"
import Destinations from "./components/destinations/Destinations.jsx"
import { useState } from "react"
import { AuthContext } from "./components/contexts/authContext.js"

function App() {
  const [auth, setAuth] = useState({})

  const loginSubmitHandler = (values) => {
    console.log(values)
  }

  const registerSubmitHandler = (values) => {
    console.log(values)
  }

  return (
    <>
    <AuthContext.Provider value={{loginSubmitHandler, registerSubmitHandler}}>
      {/* <Intro /> */}
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/destinations" element={<Destinations />}></Route>
        </Routes>
    </AuthContext.Provider>

    </>
  )
}

export default App
