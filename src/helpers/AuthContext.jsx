import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const Context = createContext()

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    // LOGIN FUNCTION THAT WILL PROVIDE TO EVERY COMPONENT
    const login = async (values) => {
        try {
            const res = await axios.post("http://localhost:2304/api/auth/Login", values)
            setCurrentUser(res.data);
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    const logout = async () => {
        setCurrentUser(null);
    }

    useEffect(() => { localStorage.setItem("user", JSON.stringify(currentUser)) }, [currentUser])

    return (
        <Context.Provider value={{ currentUser, login, logout }}>
            {children}
        </Context.Provider>
    )
}

export default AuthContextProvider