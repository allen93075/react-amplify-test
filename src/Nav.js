import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react';

export default class Check extends React.Component {


    logout = () => {
        localStorage.clear();
        this.props.logoutchange();
    }

    render() {
        const navStyle = {
            color: 'white'
        }
        console.log(this.props.logged)

        if (this.props.logged) {
            return (
                <nav>
                    <h3>QAQ</h3>
                    <ul className='nav-Links'>
                        <Link style={navStyle} to="/Requestrole">
                            <li>Request Role for customer</li>
                        </Link>

                        <Link style={navStyle} to="/Create">
                            <li>Create Policy</li>
                        </Link>
                        <Link style={navStyle} to="/Attach">
                            <li>Attach to Role</li>
                        </Link>
                        <Link style={navStyle} to="/" onClick={this.logout}>
                            <li>Logout</li>
                        </Link>
                    </ul>
                </nav>
            )
        } else {
            return (
                <nav>
                    <h3>QAQ</h3>
                    <ul className='nav-Links'>
                        <Link style={navStyle} to="/Login">
                            <li>Login</li>
                        </Link>
                        <Link style={navStyle} to="/Signup">
                            <li>Sign Up</li>
                        </Link>
                    </ul>
                </nav>
            )
        }


        // return (
        //     <nav>
        //         <h3>QAQ</h3>
        //         <ul className='nav-Links'>
        //             <Link style={navStyle} to="/Create">
        //                 <li>Create Policy</li>
        //             </Link>
        //             <Link style={navStyle} to="/Attach">
        //                 <li>Attach to Role</li>
        //             </Link>
        //             <Link style={navStyle} to="/Login">
        //                 <li>Login</li>
        //             </Link>
        //             <Link style={navStyle} to="/Signup">
        //                 <li>Sign Up</li>
        //             </Link>
        //         </ul>
        //     </nav>
        // )
    }
}


// function Nav() {
//     const navStyle = {
//         color: 'white'
//     }

//     return (
//         <nav>
//             <h3>QAQ</h3>
//             <ul className='nav-Links'>
//                 <Link style={navStyle} to="/Create">
//                     <li>Create Policy</li>
//                 </Link>
//                 <Link style={navStyle} to="/Attach">
//                     <li>Attach to Role</li>
//                 </Link>
//                 <Link style={navStyle} to="/Login">
//                     <li>Login</li>
//                 </Link>
//                 <Link style={navStyle} to="/Signup">
//                     <li>Sign Up</li>
//                 </Link>
//             </ul>
//         </nav>
//     );
// }