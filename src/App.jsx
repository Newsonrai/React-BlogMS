import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './blog/Home'
import AddBlog from './blog/AddBlog'
import Register from './pages/Register'
import Login from './pages/Login'
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
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
