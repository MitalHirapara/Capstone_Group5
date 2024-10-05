import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter as Router} from 'react-router-dom'
import Container from './components/Container'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import ForgotPassword from './components/ForgotPassword'
import GoogleAuth from './components/GoogleAuth'
export default function App() {

  return (
    <Router>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/google-auth' element={<GoogleAuth/>}/>
        </Routes>
      </Container>
    </Router>
  )

}
