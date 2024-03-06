import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <div><NavLink to = '/'>Login</NavLink></div>
      
      <NavLink to = '/home'>Home</NavLink>
    </div>
  )
}

export default Navbar
