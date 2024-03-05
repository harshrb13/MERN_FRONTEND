import React, { useState } from 'react'
import "./register.css"
import regimg from "../assets/images/reg-img.png"
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { useAuth } from '../store/auth' 
export default function Register() {
  const {API} = useAuth()
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  })

  const inputhandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value
    })
  }

  const navigate = useNavigate();

  const regFromSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      const data = await response.json()
      
      if (response.ok) {
        setUser({
          username: "",
          email: "",
          phone: "",
          password: ""
        })
        navigate("/login")
        toast.success("Registration Successfull")
      }else{
        toast.error(data.message)
      }
      
    } catch (error) {
      console.log("regester error",error)
    }
  }
  return (
    <div className='register-section grid'>
      <div className="reg-left">
        <img src={regimg} alt="register image" />
      </div>
      <div className="reg-right">
        <h2>Register form</h2>
        <p></p>
        <form onSubmit={regFromSubmit}>
          <div className='input-field'>
            <label htmlFor="username">username :</label>
            <br />
            <input type="text" placeholder='username' required autoComplete='false' name='username' id='username' value={user.username} onChange={inputhandler} />
          </div>
          <div className='input-field'>
            <label htmlFor="email">email :</label>
            <br />
            <input type="email" placeholder='email' required autoComplete='false' name='email' id='email' value={user.email} onChange={inputhandler} />
          </div>
          <div className='input-field'>
            <label htmlFor="phone">phone :</label>
            <br />
            <input type="number" placeholder='phone' required autoComplete='false' name='phone' id='phone' value={user.phone} onChange={inputhandler} />
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
