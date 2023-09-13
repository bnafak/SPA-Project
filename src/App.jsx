/* eslint-disable no-unused-vars */
import { useState } from 'react'

import './App.css'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-container'>
        <h1>Avenger Film Production Ltd,</h1>
      <Home></Home>

      <h3> Developed by LFWB Ltd.</h3>
      </div>

     
    </>
  )
};

export default App
