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
      <Home></Home>
      
      </div>

     
    </>
  )
}

export default App
