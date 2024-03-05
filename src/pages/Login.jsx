import React,{useState} from 'react'
import "./register.css"
import loginimg from "../assets/images/login-img.png"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'
function Login() {
  const [user,setUser]=useState({
    email:"",
    password:""
  })
  const navigate = useNavigate()
  const {storeTokenInLS,API}=useAuth()

  const inputhandler = (e)=>{
    let name = e.target.name;
    let value= e.target.value;

    setUser({
      ...user,
      [name]:value
    })
  }

  const regFromSubmit = async(e)=>{
    e.preventDefault()
    try {
      
      const response =  await fetch(`${API}/api/auth/login`,{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
      })
      
      const res_data =await response.json()
      if (response.ok) {
        storeTokenInLS(res_data.token)
        setUser({email:"", password:""})  
        navigate("/")
        toast.success("login success")
      }else{
        toast.error(res_data.message)
        toast.warning(res_data.warning)
      }
    } catch (error) {
      console.log("login error",error)
    }
  }
  return (  
        <div className='register-section grid'>
          <div className="reg-left">
            <img src={loginimg} alt="register image" />
          </div>
          <div className="reg-right">
            <h2>Login form</h2>
            <p></p>
            <form onSubmit={regFromSubmit}>           
              <div className='input-field'>
                <label htmlFor="email">email :</label>
                <br />
                <input type="email" placeholder='email' required autoComplete='false' name='email' id='email' value={user.email} onChange={inputhandler} />
              </div>
              <div className='input-field'>
                <label htmlFor="password">password :</label>
                <br />
                <input type="text" placeholder='password' required autoComplete='false' name='password' id='password' value={user.password} onChange={inputhandler} />
              </div>
              <br />
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>   
  )
}

export default Login