import React, { useEffect, useState } from 'react'
import { useAuth } from '../../store/auth'
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';


function Contacts() {
  const [contacts, setContacts] = useState([])
  const {authorizationToken,API} = useAuth()

  const adminContact = async()=>{
    try {
      const response = await fetch(`${API}/api/admin/contacts`,{
        method:"GET",
        headers:{
          "Authorization": authorizationToken
        }
      })
      const data = await response.json()
      
      if (response.ok) {
        setContacts(data.contacts)
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  const deleteByAdmin = async(id)=>{
    try {
      const response = await fetch(`${API}/api/admin/contacts/delete/${id}`,{
        method:'DELETE',
        headers:{
          "Authorization": authorizationToken
        }
      })
      const data = await response.json()
      if (response.ok) {
        toast.dark(data.message)
        adminContact()
        return
      }else{
        toast.dark(data.message)
      }    
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    adminContact()
  },[])
  return (
    <div className="admin-users">
        <table>
          <thead>
            <tr>
              <th>
                Username
              </th>
              <th>
                email
              </th>
              <th>
                message
              </th>
              <th>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {
              contacts.map((elem, index) => {

                const { username, email, massage } = elem;
                return (
                  <tr key={index}>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{massage}</td>
                    <td>
                      <button onClick={() => {
                        deleteByAdmin(elem._id)
                      }} className='delete-btn'>
                        <MdDelete className='delete-icon' />
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
  )
}

export default Contacts