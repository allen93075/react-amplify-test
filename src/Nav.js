import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav(){
    const navStyle = {
        color: 'white'
    }

    return (
        <nav>
            <h3>QAQ</h3>
            <ul className='nav-Links'>
                <Link style={navStyle} to="/Login">
                    <li>Login</li>
                </Link>
                <Link style={navStyle} to="Signup">
                    <li>Sign Up</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;