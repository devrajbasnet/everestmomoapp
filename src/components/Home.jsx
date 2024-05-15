import React from 'react'
import "../App.css"
import momo from "../Assests/Frame 16.png"
import eclipse from "../Assests/Ellipse 9.png"
import { FaArrowRight } from "react-icons/fa";
import image2 from "../Assests/Group 3.png"
import image3 from "../Assests/Image.png"
import buffmomo from "../Assests/pngwing 2.png"
import { IoPlayCircleOutline } from "react-icons/io5";
import buffFry from "../Assests/pngegg 1.png"
import Cmomo from "../Assests/C Momo.png"
import Navbar from './Navbar';
import Quality from '../Assests/Quality.png'
import party from '../Assests/party.png'
import catering from '../Assests/Chef.png'
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import rectangle from "../Assests/Rectangle 8.png"
import { Card } from 'react-bootstrap';
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import map from "../Assests/Map.png"
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Footer from './Footer';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <div>
       <Navbar/>
       </div>
        <div className='maindiv'>
           <div className='innerdiv'>
              <div className='indiv'>
                <p className='color2'>RESTAURANT</p>
                <h1>The <span style={{backgroundColor:'#D95103', color:'white'}} >#One </span> <br/>Momo <span className='color'>Restaurant</span> </h1>
              </div>
                 <div>
                <h3>More than <span className='color'>20+ Varieties</span> of momo available for you</h3>
                 </div>
             <div>
               <Link to="/menu">
                <button className="expbutton">Explore Food Menu <FaArrowRight/></button>
                </Link>
             </div>
           </div>
        <div>
            <img src={eclipse} alt="eclipse" className='eclipse'/>
            <img src={momo} alt="" className='momo' />
           </div>
  
        </div>


       <div className='body-container'>
     
        <div className="image2">
           <img src={image2} alt='' />
        </div>
         <div className='sidetext'>
           <h1>Why Customers<span className='color'> Love Us</span></h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
             Dolorum consequuntur nam sunt, consequatur ex obcae <br/>cati blanditiis! 
             Repellendus veritatis voluptatum amet, pa <br/>riatur, qui debitis saepe laboriosam
             excepturi molestiaee<br/>harum neque non.</p>
        </div>
          <div>
          <button className="expbutton2">Explore Our Story <FaArrowRight/></button>
          </div>
        </div>
      <div className='body-container2'>
           <div className="text2">
             <h1>Our <span className='color'>Most Popular </span>Recipes</h1>
               <p className='color2'>Browse through a varieties of recipes with fresh ingredients selected only from the best places</p><br />
           </div>
          <div className='choosebtnmain'>
           <button className='choosebtn'>Buff</button>
           <button className='choosebtn'>Chicken</button>
           <button className='choosebtn'>Veg</button>
          </div>
          <div className='menuselect'>
             <div className='fooditem1'>
                <img src={buffmomo} alt=""  />
                <h3 style={{paddingTop:'4rem'}} >Buff Momo</h3>
                <h2>रु<text className='color'>150</text></h2>
             </div>
             <div className='fooditem2'>
                <img src={buffFry} alt="" />
                <h3 style={{paddingTop:'4rem'}} >Buff Fry Momo</h3>
                <h2>रु<text className='color'>180</text></h2>
             </div>
              <div className='fooditem3'>
                <img src={Cmomo} alt="" />
                <h3 >Buff C Momo</h3>
                <h2>रु<text className='color'>200</text></h2>
              </div>
          </div>
          <div>
           < Link to="/menu">
              <button className="expbutton3">Explore Our Menu <FaArrowRight/></button>
              </Link>
          </div>

      </div>

      <div className='body-container3'>
         <div className='text3'>
         <h1><span className='color'>We Offer People </span>The Service They Want</h1>
         </div>
         <div className='image3'>
            <div className='gradientdisplay'></div>
           <img src={image3} alt="image3"  />
           <h1 >Process behind the making</h1>
           <p>See how only chefs cooks only the best momos</p>
         <button className='expbutton4' ><IoPlayCircleOutline style={{scale:'1.8'}}/>  Watch the Video</button>
         </div>
         <div className='service'>
         <div>
            <img src={Quality} alt=""  />
            <h2>Quality Food</h2>
            <p>Only the best food with top quality <br /> products and ingredients</p>
         </div>
         <div>
            <img src={party} alt="" />
            <h2>Private Party</h2>
            <p>Get the best food for all your private <br /> parties and gatherings</p>
         </div>
         <div>
            <img src={catering} alt="" />
            <h2>Catering</h2>
            <p>Get the best food for any occasions <br /> and gatherings</p>
         </div>
         </div>
         <div>
            <Link to ="/service">
              <button className="expbutton3">Explore Our Services <FaArrowRight/></button>
              </Link>
          </div>
      </div>
      <div className='body-container4'>
         <div className='heading2'>
         <h1>200+ <span className='color'>Happy Customers</span></h1>
        <h3 style={{color:'#0C6967'}}>What our customers say about us</h3>
        <p><i>“Only the best momo you can find in the market.<br/> Different Varieties of momo to choose from. Will <br/> be visiting again soon”</i></p>
       <h2 style={{fontFamily:'Proxima Nova'}}>Livia Dias</h2>
       <div className='btngap'>
       <BsArrowLeftCircle style={{scale:'2', marginRight:'1.2rem', marginLeft:'0.5rem'}}/> <BsArrowRightCircle style={{scale:'2'}}/>
       </div>
       <div className='rectangle'>
         <img src={rectangle} alt="" />
       </div>
         </div>
      </div>
      <div className='body-container5'>
         <div className='touch'>
            <h1>Get<span className='color'> In Touch</span></h1>
            <p className='color3'><b>Our Friendly team would love to hear from you</b></p>
         </div>
         <div className='form'>
            <Card className=''>
               <div className='formbody'>
                  <span className="formbody1">
                     <div>
                        <h2><MdOutlineLocationOn/> Our Address</h2>
                        <p><i>New Baneshwor, Kathmandu, Bagmati,Nepal</i></p><br />
                     </div>
                     <div>
                        <h2><FaPhoneAlt/> Our Contacts</h2>
                        <div className='contactbody'>
                        <div>
                           <h3>Mobile</h3>
                           <p><i>980 5689789</i></p>
                           <p><i>9841 275897</i></p>
                        </div>
                     <div>
                     <h3>Landline</h3>
                        <p><i>01-4783972</i></p>
                     </div>
                     </div>
                     </div>
                     <div>
                        <h3>Our Service Time</h3>
                     </div>
                     <div className='servicetime'>
                     <div>
                     <h4>MON-FRI</h4>
                        <p><i>10 am - 8 pm</i></p>
                     </div>
                     <div>
                     <h4>SAT-SUN</h4>
                        <p><i>Closed</i></p>
                     </div>
                     </div><br />
                     <div>
                        <p><i>Get in touch in social networks</i></p> 
                     </div>
                     <div className='socialmedia'>
                     <FaFacebook style={{ marginRight: '20px' }} />
                     <FaInstagramSquare style={{ marginRight: '20px' }} />
                      <FaTiktok />
                     </div>  
                  </span>
                  <span className="formbody2">
                  <form>
                     <label>First Name</label><br/>
                     <input type='text'/>
                     <label>Last Name</label>
                     <br />
                     <input type='text' />
                     <br />
                     <label>Email</label><br />
                     <input type="email" /><br />
                     <label>What can we do for you</label><br />
                     <select name="service" id="choices">
                         <option value="" placeholder='Choose'>Choose</option>
                     </select><br />
                      <label>Phone Number</label><br />
                     <input type="number" /><br /><br />
                     <label>Message</label><br />
                     <input type="text" style={{ height: '80px' }}/><br /><br />
                     <button className='contactbtn'>Send Message</button>
                  </form>
                  </span>
    </div>
    </Card>
         </div>
         <div >
            <img src={map} alt="" className='map' />
         </div>
        
      </div>    
      <div>
         <Footer/>
      </div>
    </>
  )
}

export default Home