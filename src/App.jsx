import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import Bloogs from './Pages/Bloogs/Bloogs'
import Home from './Pages/Home/Home/Home'
import Inventory from './Pages/Inventory/Inventory'
import ItemDetail from './Pages/ItemDetail/ItemDetail'
import Login from './Pages/Login/Login'
import ManageInventories from './Pages/ManageInventories/ManageInventories'
import RequireAuth from './Pages/RequireAuth/RequireAuth'
import Footer from './Pages/Shared/Footer/Footer'
import Header from './Pages/Shared/Header/Header'
import NotFound from './Pages/Shared/NotFound/NotFound'
import SignUp from './Pages/SignUp/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/item/:id" element={
          <RequireAuth>
            <ItemDetail></ItemDetail>
          </RequireAuth>
        }></Route>
        <Route path="/manageInventories" element={<ManageInventories></ManageInventories>}></Route>
        <Route path="/blogs" element={<Bloogs></Bloogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
