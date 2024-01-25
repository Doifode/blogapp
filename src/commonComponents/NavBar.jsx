import React, { useContext } from 'react'
import logo from "../Images/YashDoifode-TopPerformer.png"
import { Link } from "react-router-dom"
import { Context } from '../helpers/AuthContext'
import { categoryArray } from '../helpers/Helper'

export const Links = () => {
    return categoryArray.map(i =>
        <Link key={i} className='link'
            to={i === "Home" ? "/" : `/?cat=${i}`} >
            {i}
        </Link >
    )
}

const NavBar = () => {

    const { currentUser, logout } = useContext(Context);

    return (
        <div className='navBar'>
            <div className="Container">
                <div className="log">
                    <img src={logo} width={120} alt="" /></div>
                <div className="links">
                    <Links />
                    <span> {currentUser?.username}</span>
                    <span>{currentUser ? <span onClick={logout} className='cursor_pointer'> <Link className='link' to={"/login"}>LogOut</Link></span> : <Link className='link' to={"/login"}>Login</Link>} </span>
                    <span className='write' >  <Link className='link' to={"/write"}>Write</Link></span>
                </div>
            </div>


        </div>
    )
}

export default NavBar