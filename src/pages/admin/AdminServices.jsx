import React from 'react'
import { useAuth } from '../../store/auth'
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify'

function AdminServices() {
    const {services,authorizationToken,getServicedata,API} = useAuth()

    const deleteByAdmin = async(id)=>{
        try {
            const response = await fetch(`${API}/api/admin/services/delete/${id}`,{
              method:'DELETE',
              headers:{
                "Authorization": authorizationToken
              }
            })
            const data = await response.json()
            if (response.ok) {
              toast.dark(data.message)
              getServicedata()
              return
            }else{
              toast.dark(data.message)
            }    
          } catch (error) {
            console.log(error)
          }
    }

    

  return (
    <div className="admin-users">
        <table>
          <thead>
            <tr>
              <th>
                Service
              </th>
              <th>
              provider
              </th>
              <th>
              price
              </th>
              <th>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {
              services.map((elem, index) => {

                const { service, provider, price } = elem;
                return (
                  <tr key={index}>
                    <td>{service}</td>
                    <td>{provider}</td>
                    <td>{price}</td>
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

export default AdminServices