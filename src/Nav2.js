import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav2() {
    const navStyle = {
        color: 'white'
    }

    
    
    

    return (
        <nav>
            <h3>QAQ</h3>
            <ul className='nav-Links'>
                <Link style={navStyle} to="/Create">
                    <li>Create Policy</li>
                </Link>
                <Link style={navStyle} to="/Attach">
                    <li>Attach to Role</li>
                </Link>                
                <Link style={navStyle} to="/Logout">
                    <li>Logout</li>
                </Link>
            </ul>
        </nav>
    );
}


export default Nav2;