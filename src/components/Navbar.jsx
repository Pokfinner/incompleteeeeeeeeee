import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>

        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/about`}>About</NavLink>
        <NavLink to={`/products`}>Products</NavLink>
        
    </div>
  )
}

export default Navbar