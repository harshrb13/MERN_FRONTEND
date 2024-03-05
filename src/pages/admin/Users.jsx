import React, { useEffect, useState } from 'react'
import { useAuth } from '../../store/auth'
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([])
  const { authorizationToken, userData,API } = useAuth()



  const filtreddUsers = users.filter((elem) => {
    return elem._id != userData._id
  })

  const adminUsers = async () => {
    try {

      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {
          "Authorization": authorizationToken
        }
      })
      const data = await response.json()

      if (response.ok) {
        setUsers(data.users)

      }
    } catch (error) {
      console.log(error)
    }
  }

  const deleteByAdmin = async (id) => {

    try {
      const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": authorizationToken
        },
      })
      const data = await response.json()
      if (response.ok) {
        toast.dark(data.message)
        adminUsers()
      }else{
        toast.dark(data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    adminUsers()
  }, [])

  return (
    <>
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
                phone
              </th>
              <th>
                Delete
              </th>
              <th>
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {
              filtreddUsers.map((elem, index) => {

                const { username, email, phone } = elem;
                return (
                  <tr key={index}>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>
                      <button onClick={() => {
                        deleteByAdmin(elem._id)
                      }} className='delete-btn'>
                        <MdDelete className='delete-icon' />
                      </button>
                    </td>
                    <td>
                      <Link to={`/admin/users/${elem._id}/edit`} className='edit-btn'>
                        <FaUserEdit className='edit-icon' />
                      </Link>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      
    </>
  )
}

export default Users