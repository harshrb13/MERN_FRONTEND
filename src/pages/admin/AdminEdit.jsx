import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {useAuth} from '../../store/auth'
import {toast} from 'react-toastify'
function AdminEdit() {
    const {authorizationToken,API} = useAuth()
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: ""
    })
    const params = useParams()
    
    const inputhandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData({
            ...data,
            [name]: value
        })
    }

    const getOneUser = async()=>{
        try {
            const res = await fetch(`${API}/api/admin/users/${params.id}`,{
                method:"GET",
                headers:{
                    "Authorization":authorizationToken
                }
            })
            const data = await res.json()
        
            if (res.ok) {
                setData({
                    username:data.user.username,
                    email:data.user.email,
                    phone:data.user.phone
                })
                return
            }else{
                toast.dark("Please try again")
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleSubmit = async(e)=>{
    e.preventDefault()
        try {
            const res = await fetch(`${API}/api/admin/users/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":authorizationToken
                },
                body:JSON.stringify(data)
            })
            
          
            if (res.ok) {
                toast.success("upadated successfully")
                return
            }else{
                toast.error("update failed")
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        getOneUser()
    },[])
    return (
        <div className="updateBox">
            <div className='register-section'>

                <div className="reg-right">
                    <h2>Update User</h2>
                    <p></p>
                    <form onSubmit={handleSubmit}>
                        <div className='input-field'>
                            <label htmlFor="username">username :</label>
                            <br />
                            <input type="text" placeholder='username' required autoComplete='false' name='username' id='username' value={data.username} onChange={inputhandler} />
                        </div>
                        <div className='input-field'>
                            <label htmlFor="email">email :</label>
                            <br />
                            <input type="email" placeholder='email' required autoComplete='false' name='email' id='email' value={data.email} onChange={inputhandler} />
                        </div>
                        <div className='input-field'>
                            <label htmlFor="phone">phone :</label>
                            <br />
                            <input type="number" placeholder='phone' required autoComplete='false' name='phone' id='phone' value={data.phone} onChange={inputhandler} />
                        </div>

                        <br />
                        <button type='submit'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminEdit