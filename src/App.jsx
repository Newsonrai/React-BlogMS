import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './blog/Home'
import AddBlog from './blog/AddBlog'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/navbar/Navbar'
import About from './components/navbar/About'
import Services from './components/navbar/Services'
import Contact from './components/navbar/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addblog' element={<AddBlog/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/navbar' element={<Navbar/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
