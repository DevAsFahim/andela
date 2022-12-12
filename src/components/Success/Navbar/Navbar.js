import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/image/formLogo.png';
import logob from '../../../assets/image/logoB.svg';
import './Navbar.css';


const Navbar = () => {
    const [navbar, setNavbar]= useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)
    
    return (
        <div className={`${navbar && 'nav_active'} navbar_container`}>
            <nav className='flex justify-between items-center nav_bar'>
            <div className="nav_logo">
                <img src={navbar ? logob : logo} alt="" />
            </div>
            <ul className="menu">
                <li><Link>For Technology Experts</Link></li>
                <li><Link>Business</Link></li>
                <li><Link>Experience</Link></li>
                <li><Link>About Us</Link></li>
            </ul>
            <div className="nav_btn">
                <button className="apply">Apply for Jobs</button>
                <button className="hire">Hire Talent</button>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;