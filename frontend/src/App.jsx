import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter as Router} from 'react-router-dom'
import Container from './components/user/Container'
import { Route, Routes } from 'react-router-dom'
import Jobs from './pages/Jobs'
export default function App() {

  return (
    <Router>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/jobs' element={<Jobs/>}/>
        </Routes>
      </Container>
    </Router>
  )

}

