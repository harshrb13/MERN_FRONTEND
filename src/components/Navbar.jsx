import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LuMenu } from "react-icons/lu";
import './Navbar.css'
import { useAuth } from '../store/auth';

function Navbar() {
    const [toggle, setToggle] = useState(false)
    const [className, setClassname] = useState("toggleoff")
    const { isloggedIn,userData} = useAuth();
    
    
   

    useEffect(() => {
        if (toggle) {
            setClassname("toggleon")

        } else {
            setClassname("toggleoff")

        }
    }, [toggle, className])
    return (
        <header>
            <div className='nav-left'>
                <NavLink to={"/"} className='logo'>
                    Code Wave Technologies
                </NavLink>
                <LuMenu onClick={() => {
                    setToggle(!toggle)
                }} className='toggler' />
            </div>

            <div className={className}>
                <ul className='Navlinks'>
                    <li>
                        <NavLink to={"/"} className={({ isActive }) =>
                            `${isActive ? "activeLink" : "notactive"}`
                        }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/services"} className={({ isActive }) =>
                            `${isActive ? "activeLink" : "notactive"} `
                        }>
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"} className={({ isActive }) =>
                            `${isActive ? "activeLink" : "notactive"}`
                        }>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"} className={({ isActive }) =>
                            `${isActive ? "activeLink" : "notactive"}`
                        }>
                            Contact
                        </NavLink>
                    </li>
                    {
                        isloggedIn ?<>
                            <li>
                                <NavLink to={"/logout"} className={({ isActive }) =>
                                    `${isActive ? "activeLink" : "notactive"}`
                                }>
                                    Logout
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/admin"} className={({ isActive }) =>
                                    `${isActive ? "activeLink" : "notactive"} ${userData.isAdmin?"d-block":"d-none"}`
                                }>
                                    Dashboard
                                </NavLink>
                            </li>
                            
                        </> : <>
                            <li >
                                <NavLink to={"/login"} className={({ isActive }) =>
                                    `${isActive ? "activeLink" : "notactive"} `
                                }>
                                    Login
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"/register"} className={({ isActive }) =>
                                    `${isActive ? "activeLink" : "notactive"} `
                                }>
                                    SignUp
                                </NavLink>
                            </li>
                        </>
                    }

                </ul>
            </div>
        </header>
    )
}

export default Navbar