import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Error from './pages/Error'
import Logout from './pages/Logout'
import Admin from './pages/admin/Admin'
import Users from './pages/admin/Users'
import Contacts from './pages/admin/Contacts'
import AdminEdit from './pages/admin/AdminEdit'
import AdminServices from './pages/admin/AdminServices'
function App() {

  return (
    <>
        <BrowserRouter>
        <div className="sideSpace">
        <Navbar/> 
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/services' element={<Service/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/logout' element={<Logout/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/admin' element={<Admin/>}>
                <Route path='users' element={<Users/>} />
                <Route path='contacts' element={<Contacts/>} />
                <Route path='services' element={<AdminServices/>}/>
                <Route path='users/:id/edit' element={<AdminEdit/>}/>
            </Route>

          </Routes>
        </div>
        <Footer/>  
        </BrowserRouter>
        
    </>
  )
}

export default App
