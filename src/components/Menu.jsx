import React from 'react'
import Navbar from './Navbar'
import "../Menu.css"
import "../App.css"
import scan from "../Assests/Scan.png"
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { Brush, Brush2 } from '../Brush'
import bmomo from '../Assests/pngwing 2 (2).png'
import chillymomo from '../Assests/chilli-momo.png'
import bfmomo from '../Assests/pngegg 1 (2).png'
import Footer from "./Footer"
function Menu() {
  return (
    <div>
     <div>
      <Navbar/>
     </div>
     <div className="menuheader">
      <h1 className='color3'>Our Menu</h1>
     </div>
     <div className='menutopic'>
      <h2><span className='color'>Our menu is more than just momos,</span><br />
with a variety of dishes to cater to all tastes and preferences.</h2>
     </div>
     <div className='color4'>
     <div className='headerscan'>
      <h2 className='color3'>Scan the QR code</h2>
      <p>You can also check the allergy advices using your phone as well</p>
     </div>
     <div className='scanqr'>
      <img src={scan} alt="" className='qrcode' />
      <h2><span className='color'>SCAN</span> ME! <MdOutlinePhoneAndroid className='androidbtn'/></h2>
     </div>
     </div>
     <div className='momoheader'>
      <Brush/>
      <h2><span className='color'>BUFF</span> MOMO's</h2>
      <Brush2/>
     </div>
     <div className='momoflex1'>
     <div>
      <img src={bmomo} alt=""  /><br />
      <div className='newbtn'>
        <button className='newbtninner'>New</button>
      </div>
      <h2>Buff Steam Momo</h2>
      <h3>रु<span className='color'>200</span></h3>
      <p>(Freshly Steamed Buff Momos made from <br /> whole wheat and kneaded with beta Carotene <br /> Rich Vegetable Juice)</p>     
      </div>
     <div>
      <img src={chillymomo} alt="" />
      <div className='popmomo'>
        <button className='popular'>Popular</button>
      </div>
      <h2>Buff C. Momo</h2>
      <h3>रु<span className='color'>200</span></h3>
      <p>(Freshly Steamed Buff Momos made from <br /> whole wheat and kneaded with beta Carotene <br /> Rich Vegetable Juice)</p>
     </div>
     </div>
     <div className='momoflex2'>
     <div>
      <img src={bfmomo} alt=""  /><br />
      <h2>Buff Fry Momo</h2>
      <h3>रु<span className='color'>200</span></h3>
      <p>(Freshly Steamed Buff Momos made from <br /> whole wheat and kneaded with beta Carotene <br /> Rich Vegetable Juice)</p>     
      </div>
     <div>
      <img src={bmomo} alt="" />
      <div className='recommomo'>
        <button className='recommend'>Recommended</button>
      </div>
      <h2>Buff Jhol Momo</h2>
      <h3>रु<span className='color'>200</span></h3>
      <p>(Freshly Steamed Buff Momos made from <br /> whole wheat and kneaded with beta Carotene <br /> Rich Vegetable Juice)</p>
     </div>
     </div>
     <div className='momoheader'>
      <Brush/>
      <h2><span className='color'>CHICKEN</span> MOMO's</h2>
     <Brush2/>
     </div>
     <div className='momoflex1'>
     <div>
      <img src={bmomo} alt=""  /><br />
      <div className='newbtn' >
        <button className='newbtninner'>New</button>
      </div>
      <h2>Buff Steam Momo</h2>
      <h3>रु<span className='color'>200</span></h3>
      <p>(Freshly Steamed Buff Momos made from <br /> whole wheat and kneaded with beta Carotene <br /> Rich Vegetable Juice)</p>     
      </div>
     <div>
      <img src={chillymomo} alt="" />
      <div className='popmomo'>
        <button className='popular'>Popular</button>
      </div>
      <h2>Buff C. Momo</h2>
      <h3>रु<span className='color'>200</span></h3>
      <p>(Freshly Steamed Buff Momos made from <br /> whole wheat and kneaded with beta Carotene <br /> Rich Vegetable Juice)</p>
     </div>
     </div>
     <div className='momoflex2'>
     <div>
      <img src={bfmomo} alt=""  /><br />
      <h2>Buff Fry Momo</h2>
      <h3>रु<span className='color'>200</span></h3>
      <p>(Freshly Steamed Buff Momos made from <br /> whole wheat and kneaded with beta Carotene <br /> Rich Vegetable Juice)</p>     
      </div>
     <div>
      <img src={bmomo} alt="" />
      <div className='recommomo'>
        <button className='recommend'>Recommended</button>
      </div>
      <h2>Buff Jhol Momo</h2>
      <h3>रु<span className='color'>200</span></h3>
      <p>(Freshly Steamed Buff Momos made from <br /> whole wheat and kneaded with beta Carotene <br /> Rich Vegetable Juice)</p>
     </div>
     </div>
     <div>
      <Footer/>
     </div>
    </div>
  )
}

export default Menu