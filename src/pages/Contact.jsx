import React, { useState } from 'react'
import "./register.css"
import { toast } from 'react-toastify'
import contactimg from "../assets/images/contact-img.png"
import { useAuth } from '../store/auth'
function Contact() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    massage: ""
  })
  const {userData,isloggedIn,API}=useAuth()
  const [logged,setlogged]=useState(isloggedIn)
  

    if(logged && userData){
      setUser({
        username:userData.username,
        email:userData.email,
        massage:""
      })
      setlogged(false)
      return
    }

  
    const inputhandler = (e) => {
      let name = e.target.name;
      let value = e.target.value;
  
      setUser({
        ...user,
        [name]: value
      })
    }
  

  const regFromSubmit = async(e) => {
    e.preventDefault()
    try {
      
      const response =  await fetch(`${API}/api/form/contact`,{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
      })
      
      if (response.ok) {
        toast.success("message sent successfully")
      }else{
        toast.error("message not sent")
      }
    } catch (error) {
      console.log("contact error",error)
    }
  }
  return (
    <div className='register-section grid'>
      <div className="reg-left">
        <img src={contactimg} alt="register image" />
      </div>
      <div className="reg-right">
        <h2>Contact form</h2>
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
            <label htmlFor="massage">massage :</label>
            <br />
            <textarea placeholder='Type you massage' required autoComplete='false' name='massage' id='massage' value={user.massage} onChange={inputhandler} />
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact