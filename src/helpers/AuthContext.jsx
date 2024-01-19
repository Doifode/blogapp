import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const Context = createContext()

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const login = async (values) => {
        const res = await axios.post("http://localhost:2304/api/auth/Login", values)

        setCurrentUser(res.data);
        return res.data
    }
    const logout = async (values) => {
        // const res = await axios.post("http://localhost:2304/api/auth/Logout")
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