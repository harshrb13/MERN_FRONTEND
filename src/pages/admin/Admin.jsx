import React, { useEffect } from 'react'
import "./admin.css"
import { useAuth } from '../../store/auth'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import Loader from "../../components/Loader"
function Admin() {

    const { userData, loading } = useAuth();
    if (loading) {
        return <Loader />
    }
    if (!userData.isAdmin) {
        return <Navigate to={"/"} />
    }



    return (
        <>
            <div className="admin-panal">

                <div className='admin-nav'>
                    {/* <li>
                                <NavLink to={'/admin'}>Home</NavLink>
                            </li> */}
                    <li>
                        <NavLink to={"/admin/users"} className={({ isActive }) =>
                            `${isActive ? "activeAdmin" : ""}`
                        }>Users</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/admin/contacts"} className={({ isActive }) =>
                            `${isActive ? "activeAdmin" : ""}`
                        }>Massages</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/admin/services"} className={({ isActive }) =>
                            `${isActive ? "activeAdmin" : ""}`
                        }>Services</NavLink>
                    </li>
                </div>

                <div className='outlet-window'>
                    <Outlet>

                    </Outlet>
                </div>

            </div>
        </>
    )
}

export default Admin