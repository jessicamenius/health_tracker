import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            Im A div
            <Link to="/register">Click Me Register</Link>
            <Link to="/login">Click Me Login</Link>
        </div>
    )
}

export default Header
