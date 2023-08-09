import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Home from './components/home/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='principalBoxApp'>
    <Header></Header>
    <Home></Home>
    <Footer></Footer>
    </div>

    </>
  )
}

export default App
