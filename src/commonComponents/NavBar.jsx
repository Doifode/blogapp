import React, { useContext } from 'react'
import logo from "../Images/YashDoifode-TopPerformer.png"
import { Link } from "react-router-dom"
import { Context } from '../helpers/AuthContext'

const NavBar = () => {
    const { currentUser, logout } = useContext(Context);
    console.log('userddd', currentUser)
    return (
        <div className='navBar'>
            <div className="Container">
                <div className="log">
                    <img src={logo} width={120} alt="" /></div>
                <div className="links">
                    <h6><Link className='link' to="/?cat=Design">Design</Link></h6>
                    <h6><Link className='link' to="/?cat=Food">Food</Link></h6>
                    <h6><Link className='link' to="/?cat=Technology">Technology</Link></h6>
                    <h6><Link className='link' to="/?cat=Cinema">Cinema</Link></h6>
                    <h6><Link className='link' to="/?cat=Science">Science</Link></h6>
                    <h6><Link className='link' to="/?cat=art">Art</Link></h6>

                    <span> {currentUser?.username}</span>
                    <span>{currentUser ? <span onClick={logout} className='cursor_pointer'> LogOut</span> : <Link className='link' to={"/login"}>Login</Link>} </span>
                    <span className='write' >  <Link className='link' to={"/write"}>Write</Link></span>
                </div>
            </div>


        </div>
    )
}

export default NavBar