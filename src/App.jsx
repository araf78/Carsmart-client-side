import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import blogs from './Pages/Blogs/blogs'
import Home from './Pages/Home/Home/Home'
import Login from './Pages/Login/Login'
import Services from './Pages/Services/Services'
import Header from './Pages/Shared/Header/Header'
import SignUp from './Pages/SignUp/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/blogs" element={<blogs></blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  )
}

export default App
