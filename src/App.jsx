import Home from "./components/home/home.jsx"
import {Routes, Route} from 'react-router-dom'
import Login from "./components/login/Login.jsx"
import Header from "./components/header/Header.jsx"
import Register from "./components/register/Register.jsx"
import Intro from "./components/intro/Intro.jsx"

function App() {

  return (
    <>
    <Intro />
    <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  )
}

export default App
