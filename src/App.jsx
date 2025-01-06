import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './blog/Home'
import AddBlog from './blog/AddBlog'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/navbar/Navbar'

import EditBlog from './blog/EditBlog'
import SingleBlog from './blog/SingleBlog'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog/add' element={<AddBlog/>}/>
        <Route path='/blog/edit' element={<EditBlog/>} />
        <Route path='/blog/id' element={<SingleBlog/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/navbar' element={<Navbar/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
