import React from 'react'
import logo from "../Assests/Logo.png"
import "../App.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <>
   <div className='footerheader'>
   <div>
    <img src={logo} alt="momo" /><br />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Nulla, recusandae sed. Incidunt corporis, voluptas officiis <br/> assumenda reiciendis autem nulla similique.</p>
   </div>
   <div className='footermomo'>
   <h3><b className='color3' style={{ fontFamily: 'Times New Roman, Times, serif' }}>momos<span className="arrow"></span></b></h3>
   <nav>
            <ul>
              <li><a href="/about">About Us<span className="arrow"></span></a></li>
              <li><a href="/menu">Our Menu<span className="arrow"></span></a></li>
              <li><a href="/service">Our Services<span className="arrow"></span></a></li>
              <li><a href="/contact">Contact Us<span className="arrow"></span></a></li>
            </ul>
          </nav>
          </div>
   <div className='footercon'>
   <h3><b className='color3'style={{ fontFamily: 'Times New Roman, Times, serif' }}>Legals</b></h3>
   <nav>
            <ul>
              <li><a href="#">Terms & Conditions<span className="arrow"></span></a></li>
              <li><a href="#">Privacy Policy<span className="arrow"></span></a></li>
              <li><a href="/contact">Support<span className="arrow"></span></a></li>
            </ul>
          </nav>
   </div>
   <div className='footermedia'>
        <h3><b class='color3'style={{ fontFamily: 'Times New Roman, Times, serif' }}>Follow Us</b></h3>
        <div className="firstline">
        <FaFacebook className="white-icon" />
    <FaLinkedin className="white-icon"/>
    <FaTwitter className="white-icon"/>
    </div>
    <div className="secondline">
    <FaYoutube className="white-icon"/>
    <FaInstagram className="white-icon"/>
    <FaTiktok className="white-icon"/>
    </div>
    </div>
   </div>
  <div className='copyright'>
    <p>Copyright ©️2023 Everest Momo Pvt Ltd. All Rights Reserved.</p>
  </div>
   </>
   
  )
}

export default Footer