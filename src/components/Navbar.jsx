import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/navbar.css'

export default function Navbar () {
  return (
    <div className='navbar'>

        <Link to="/" className='navbar__link'>
          <span>Home</span> 
        </Link>

        <Link to="/about" className='navbar__link'>
            <span>About</span> 
        </Link>

    </div>
  )
}
