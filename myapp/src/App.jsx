import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import State from './components/State'
import New from './components/New'
import Api from './components/Api'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hey welcome</h1>
      <h2>thank you for using our website</h2>
      

      <Routes>

        <Route path="/log"element={<Login/>}/>
<Route path="/sign"element={<Signup/>}/>
<Route path="/state"element={<State/>}/>
<Route path="/NEW"element={<New/>}/>
<Route path="Api"element={<Api/>}/>


      </Routes>
      <Navbar/>
    </>
  )
}

export default App
