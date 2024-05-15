import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import logo from "../Assests/Logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Navbar() {
  return (
    <div>
         <div style={{ paddingTop: '50px' }}> 
         <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: '#fff', zIndex: 1000 }}>
            <ol style={{listStyle:'none',display:'flex',justifyContent:'space-evenly',fontFamily: 'Times New Roman' }} >
                <Link to="/">
            <img src={logo} alt="logo" className="logo"  />
            </Link>
            <li>
               <Link className="navlink-style" to="/about">About Us</Link>
            </li>
            <li>
                <Link className="navlink-style" to="/menu">Our Menu</Link>
            </li>
            <li>
                <Link className="navlink-style" to="/service">Our Services</Link>
            </li>
            <li>
                <Link className="navlink-style" to="/advice">Allergy Advice</Link>
            </li>
            <Link to="https://www.facebook.com/">
            <FaFacebook className="navlink-btn"/>
            </Link>
            <Link to="https://www.tiktok.com/">
            <FaTiktok  className="navlink-btn"/>
            </Link>
            <Link to="https://www.instagram.com//">
            <FaInstagramSquare className="navlink-btn"/>
            </Link>
            <Link to="/contact">
            <button className="contactbtn">Contact Us</button>
            </Link>
            </ol>
        </nav>
        </div>
        <hr className="nav-underline" />
    </div>

  )
}

export default Navbar