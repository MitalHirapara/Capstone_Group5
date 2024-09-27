import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter as Router} from 'react-router-dom'
import Container from './components/Container'
import { Route, Routes } from 'react-router-dom'
export default function App() {

  return (
    <Router>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Container>
    </Router>
  )

}
