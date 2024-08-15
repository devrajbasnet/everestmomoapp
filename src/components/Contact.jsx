import React from 'react'
import Navbar from './Navbar'
import "../Contact.css"
import { Card, CardBody } from 'react-bootstrap'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import map1 from "../Assests/Map (1).png"
import Footer from './Footer';

function Contact() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
    <div className='contactheader'>
      <h2 className='color3'>Our Contact</h2>
    </div>
    <div className='contactdesc'>
    <p className='color2'>GET IN TOUCH</p>
    <h2><span className='color'>Our Friendly Team</span> would love to hear from you</h2>
    </div>
    <div className='cardflexer'>
    <div className='card1'>
      <Card>
        <CardBody>
            <h4><FaLocationDot className='color'/> LOCATION</h4>
            <p><i>New Baneshwor -41201, <br /> Kathmandu, Bagmati, Nepal</i></p>
        </CardBody>
      </Card>
    </div>
    <div className='card2'>
      <Card>
        <CardBody>
            <h4><FaPhoneVolume className='color'/> PHONE</h4>
            <p><span className='color3'>Mobile:</span> <i>(+977) 980 5689789</i> <br />
            <span style={{ marginLeft: '50px' }}><i>(+977) 9841 275897</i></span>
            </p>
            <p><span className='color3'>Tel:</span> 
            <span style={{ marginLeft: '80px' }}><i>01-4783972</i></span></p>       
        </CardBody>
      </Card>
    </div>
    <div className='card3'>
      <Card>
        <CardBody>
            <h4><MdOutlineAccessTime className='color'/> SERVICE TIME</h4>
            <p><span className='color3' >MON - FRI</span>
            <span style={{ marginLeft: '80px' }}><i>8am-8pm</i></span>
            </p>
            <p><span className='color3'>SAT - SUN</span>
            <span style={{ marginLeft: '90px' }}><i>Closed</i></span>
            </p>

        </CardBody>
      </Card>
    </div>
    </div>
    <div className='contactformheader'>
    <div className='mapimg'>
      <img src={map1} alt="" />
    </div>
    <div className='contact form'>
      <h2>Contact <span className='color'>Us</span></h2>
      <p className='color2'>If you have any queries, send us a message. Our Friendly team would <br /> love to hear from you</p>
   <div>
   <label>First Name</label><br/>
   <input type="text" />
    <label>Last Name</label><br />
    <input type="text" />
    <label>What can we do for you</label><br />
    <select name="" id="">
      <option value="">Choose</option>
    </select>
    <label>Email</label><br />
    <input type="email" />
    <label>Phone Number</label><br />
    <input type="number" />
    <label>Message</label><br />
    <input type="text" style={{ height: '80px' }} /> <br /> 
   </div>
   <div>
    <button className='watchbtn'>Send Message</button>
   </div>
    </div>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default Contact
