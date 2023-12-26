import { useState } from 'react'
import './App.css'
import NavBar from './navbarstuff/NavBar'
import Body from './homepagestuff/HomePage'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  )
}

export default App
