import React from 'react'
import './Travel.css'
import {Link} from "react-router-dom";

const Nav = () => {
  const navStyle={
    width:"800px",
    // border:"1px solid red",
    display:"flex",
    justifyContent:"space-between"
  }


  const navLink={
    textDecoration:"none",
  }
  return (
    <nav className='nave' style={navStyle}>
      <Link to="/destination" className='tab login-tab' style={navLink}>Destinations</Link>
      <Link to="" className='tab login-tab'style={navLink}>Hotels</Link>
      <Link to="" className='tab login-tab'style={navLink} >Flights</Link>
      <Link to="" className='tab login-tab'style={navLink} >Bookings</Link>
      <Link to="" className='tab login-tab'style={navLink}>Login</Link>
      <Link to="" className='tab login-tab'style={navLink}>Sign up</Link>
      <select style={navLink}>
        <option>EN</option>
        <option>FR</option>
        <option>IGBO</option>
        <option>SPN</option>
      </select>
    </nav>
  )
}

export default Nav