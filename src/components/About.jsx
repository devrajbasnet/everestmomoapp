import React from 'react'
import Navbar from './Navbar'
import "../About.css"
import "../App.css"
import about from "../Assests/Group 8.png"
import processimg from "../Assests/Image (1).png"
import { IoPlayCircleOutline } from 'react-icons/io5'
import aboutphoto from "../Assests/Rectangle 11.png"
import momo from "../Assests/pngwing 2 (1).png"
import tasteabout from "../Assests/Rectangle 11 (1).png"
import frymmo from "../Assests/pngegg 1 (1).png"
import tradimg from "../Assests/Rectangle 11 (2).png"
import momoking from "../Assests/vbss64ar4ftv20rdkigdgqdt6f 1.png"
import bgshadow from "../Assests/Rectangle 14.png"
import quoteimg from "../Assests/Rectangle 13.png"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import headchef from "../Assests/Image (2).png"
import assistantchef from "../Assests/Image (3).png"
import staffchef from "../Assests/Image (4).png"
import Footer from "./Footer"


function About() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>

    <div className='headerabout' >
      <div className='about' >
        <h1 className='color3'>About Us</h1>
      </div>
      <div>
        <p className='color2'>WE PRIDE OURSELF ON</p>
        <h2><span className='color'>Our authentic momo recipes</span><br /> passed down through <br /> generations</h2>
      </div>
      <div className='aboutimg'>
       <img src={about} alt="aboutimg" className='abtimg' />
      </div>
      </div>
      <div>
        <img src={processimg} alt="" className='processing'style={{ width: '1550px',height: '500px' }} />
      </div> 
      <div className='procdes'>
      <h1>Process behind the making</h1>
      <p>See how we make momos that you like from only the best ingredients</p>
      <button className='watchbtn'><IoPlayCircleOutline/>Watch the Video</button>
      </div>
      <div className='aboutbody'style={{ marginBottom: '50px' }}>
      <h1>Our momos are <span className='color'>made <br /> with love </span></h1>
      <p>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Eligendi maxime dignissi <br />mos assumenda earum nesciunt ad dolo <br />ribus explicabo ipsam ipsum facilis.</p>
      </div>
      <div>
        <img src={aboutphoto} alt="" className='imgabout' />
      </div>
      <div>
        <img src={momo} alt="" className='momoinline' />
      </div>
      <div>
        <img src={tasteabout} alt=""  className="tasteabout"/>
      </div>
      <div>
        <img src={frymmo} alt="" className="frymmo" />
      </div>
      <div className="tasteheader">
        <h1>Taste the difference with <br /><span className='color'>our handcrafted momos</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Modi iusto in, ipsam blanditiis sequi maxime ducimus f <br />ugit laborum aut amet distinctio eaque, debitis praesen <br />tium, eos officiis delectus harum quas nostrum.</p>    
      </div>    
      <div className='tradheader'>
        <h1>Our momos are the <br /> perfect <span className='color'>blend of tradition</span> <br /> and <span className='color'>innovation</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Deleniti eveniet commodi eaque id cupiditate sit similiq <br />ue, aperiam culpa. Consequuntur laborum ea reprehend <br />erit rem velit veritatis laboriosam? Molestiae, quidem! C <br />onsectetur officia deserunt id magni blanditiis autem cu <br />mque totam et voluptatem veritatis.</p>
      </div>
      <div>
        <img src={tradimg} alt="" className="tradimg" />
      </div>
      <div>
        <img src={momoking} alt="" className="momoking" />
      </div>
      <div>
        <img src={bgshadow} alt="" className= "bgshadow" />
      </div>
      <div className="quote">
        <p>" <br />Momo is not just about sustenance, it's about bringing <br /> people together and creating memories. At our <br /> restaurant, we strive to create a warm and inviting <br /> atmosphere where our guests can enjoy delicious <br /> momo, great company, and unforgettable experiences</p>
        <br />
        <h2>Marcus Schleifer</h2>
        <h4>CEO</h4>
        <IoArrowBackCircleOutline/>
        <IoArrowForwardCircleOutline/> 
      </div>
      <div>
        <img src={quoteimg} alt="" className="quoteimg" />
      </div>
      <div className='teamheading'>
        <h1>MEET THE <span className='color'>TEAM</span></h1>
        <p className='color3'><b>Our talented team members who delivers only the best results</b></p>
      </div>
      <div className='cardcontainer'>
      <div>
        <img src={headchef} alt="" className="headchef" />
        
      </div>
      <div>
        <img src={assistantchef} alt="" className="assistantchef" />
      </div>
      <div>
        <img src={staffchef} alt="" className="staffchef" />
      </div>
      </div>
      <div className='contentcenter'>
      <h2>Head Chef</h2>
      <h2>Assistant Chef</h2>
      <h2>Assistant Chef</h2>
      </div>
      <div className="numberarrbtn">
      <div className="numberarrow">
        <h3 style={{ marginLeft: '1rem' }}>01 / 05</h3>
      </div>
         <div className="arrowbtn">
           <IoArrowBackCircleOutline className="arrbtn"/>
           <IoArrowForwardCircleOutline className="arrbtn"/>
        </div> 
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default About