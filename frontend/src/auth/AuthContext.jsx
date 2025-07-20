import {createContext, useContext, useState, useEffect, Children} from "react"
import {saveToken, getToken, removeToken} from "../utilis/tokenHelper"


const AuthContext = createContext()

export const useAuth = ()=>useContext(AuthContext)

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const token = getToken()

        if(token){
            setUser({token})
        }
        setLoading(false)

    }, [])

    const login = (token)=>{
        saveToken(tokne)
        setUser({token})
    }

    const logout = ()=>{
        removeToken()
        setUser(null)
    }


    return <AuthProvider value={{user, login, logout, isAuthenticated : !!user}}>
        {!loading && children}
    </AuthProvider>
}

