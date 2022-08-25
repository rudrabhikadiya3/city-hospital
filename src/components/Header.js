import React, { useContext } from 'react';
import {NavLink , Link} from 'react-router-dom'
import ThemeContext from '../context/ThemeContext';
import Alert from './Alert';

function Header(props) {

    const theme = useContext(ThemeContext);

    const dark = theme.theme
    
    return (
        <div className="main-header ">
            <div id="topbar" className = {`d-flex align-items-center fixed-top ${dark}`} >
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <Link to="/">
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </Link>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><NavLink className="nav-link scrollto active" to='/' >Home</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to='/departments' >Departments</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to='/doctors' >Doctors</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to='/about' >About</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to='/contact' >Contact</NavLink></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <NavLink to="/book_appointment" className="appointment-btn scrollto"> Appointment</NavLink>
                    <NavLink to="/login" className="appointment-btn scrollto">
                        <span className="d-md-inline">Login/ Signup</span>
                    </NavLink>
                    <button>theme</button>
                </div>
            </header>
            <Alert/>
        </div>

    );
}

export default Header;
