import { createContext, useContext, useEffect, useState } from "react";



export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const API = import.meta.env.VITE_API_URL;
    
    const [token,setToken] = useState(localStorage.getItem("token"))
    const [userData,setUserData]=useState('')

    const [loading, setLoading] = useState(true)
    

    const [services,setServices] = useState([])
    

    let isloggedIn = !!token;
    const authorizationToken = `Bearer ${token}`

    const storeTokenInLS = (serverToken)=>{
        setToken(serverToken)
        return localStorage.setItem("token",serverToken)
    }

    const logoutUser = ()=>{
        setToken("")
        return localStorage.removeItem("token")
    }
    

    const getUserData = async()=>{
        try {
            setLoading(true)
            const response = await fetch(`${API}/api/auth/user`,{
                method:"GET",
                headers:{
                    "Authorization":authorizationToken
                }
            })

            if (response.ok) {                
                const data = await response.json();
                setUserData(data.userData)
                setLoading(false)
                   
            }else{
                setLoading(false)
            }
            return
        } catch (error) {
            console.log(error)
        }
    }
    const getServicedata = async()=>{
        try {
            const response = await fetch(`${API}/api/data/services`,{
                method:"GET"
            })
            if(response.ok){
                const data = await response.json()
                setServices(data.serviceData)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{  
        if (isloggedIn) {
            getUserData()
            getServicedata()
            return
        }  
            getServicedata()

        },[isloggedIn])
    

    return(
    <AuthContext.Provider value={{storeTokenInLS,
    logoutUser,
    isloggedIn,
    userData,
    services,
    authorizationToken,
    loading,
    getServicedata,
    API
    }}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    const AuthContextvalue = useContext(AuthContext)
    if (!AuthContextvalue) {
        throw new Error("useAuth use outside oof provider")
    }
    return AuthContextvalue;
}