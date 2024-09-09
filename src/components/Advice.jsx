import React from 'react'
import Navbar from './Navbar'
import "../App.css"
import "../Advice.css"
import serviceimg from "../Assests/Group 8 (1).png"

import "../Menu.css"
import { Card } from 'react-bootstrap'
import scan from "../Assests/Scan.png"
import { MdOutlinePhoneAndroid } from "react-icons/md";
import Footer from './Footer'
import masala from "../Assests/vecteezy_spices-and-herbs-on-a-transparent-background_13526617_618 1@2x.png"
import oval1 from "../Assests/Vector (1).png"
import oval2 from "../Assests/Vector (2).png"
import { Brush, Brush2 } from '../Brush'

function Advice() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className='mainallergyheader'>
      <div className='header'>
        <h1 className='color3'>Allergy Advices</h1>
      </div>
      <div>
        <p className='color2'>AT OUR RESTAURANT</p>
      </div>
      <div>
        <h2>We use only the freshest and highest <br /> quality ingredients in all our dishes, <br />
<span className='color'>and offer transparency in our ingredient <br /> labeling.</span></h2>
      </div>
      </div>
      <div>
        <img src={serviceimg} alt="" className='adviceimg' style={{ marginLeft: '62rem', marginTop:'-20rem' }}  />
      </div>
      <div className='momoheader'>
      <Brush/>
        <h2 className='inged'><span className='color'>Ingredient's</span> Used</h2>
      <Brush2/>
      </div>
      <div>
        <img src={oval1} alt="" className='oval1' />
      </div>
      <div>
        <Card>
          <Card.Body className='carddesign'>
            <h3>For the Dought:</h3>
            <ul style={{ listStyleType: 'circle'}}>
            <li style={{ borderBottom: '1px solid whitesmoke' }}>120 gms refined flour</li><br />
            <li style={{ borderBottom: '1px solid whitesmoke' }}>1/4 tsp baking powder</li><br />
             <li style={{ borderBottom: '1px solid whitesmoke' }}>1/2 tsp salt water (for kneading)</li><br />
            </ul>
          </Card.Body>
        </Card>
      </div>
      <div>
      <Card>
          <Card.Body className='carddesign'>
            <h3>For the Chicken Filling:</h3>
            <ul style={{ listStyleType: 'circle'}}>
            <li style={{ borderBottom: '1px solid whitesmoke' }}>1 cup chicken (minced)</li><br />
             <li style={{ borderBottom: '1px solid whitesmoke' }}>1/4 tsp black pepper powder</li><br />
             <li style={{ borderBottom: '1px solid whitesmoke' }}>1 tbsp oil</li><br />
             <li style={{ borderBottom: '1px solid whitesmoke' }}>1/2 tsp garlic paste</li><br />
             <li style={{ borderBottom: '1px solid whitesmoke' }}>1/2 tsp soya sauce</li><br />
            <li style={{ borderBottom: '1px solid whitesmoke' }}>Salt</li><br />
            <li style={{ borderBottom: '1px solid whitesmoke' }}>1/4 tsp vinegar</li><br />
            </ul>
          </Card.Body>
        </Card>
      </div>
      <div>
        <img src={masala} alt="" className='masala' />
      </div>
      <div>
      <Card>
          <Card.Body className='carddesign'>
            <h3>For the Vegetarian Filling:</h3>
            <ul style={{ listStyleType: 'circle'}}>
             <li style={{ borderBottom: '1px solid whitesmoke' }}>1 cup cabbage and carrots, grated</li><br />
            <li style={{ borderBottom: '1px solid whitesmoke' }}>2 tbsp onions , finely chopped</li><br />
            <li style={{ borderBottom: '1px solid whitesmoke' }}>1/2 tsp garlic, finely chopped</li><br />
            <li style={{ borderBottom: '1px solid whitesmoke' }}>1 tbsp oil</li><br />
            <li style={{ borderBottom: '1px solid whitesmoke' }}>1/4 tsp vinegar</li><br />
            <li style={{ borderBottom: '1px solid whitesmoke' }}>1/2 tsp soya sauce</li><br />
            <li style={{ borderBottom: '1px solid whitesmoke' }}>to taste salt</li><br />
            <li style={{ borderBottom: '1px solid whitesmoke' }}>to taste pepper</li><br />
            <li style={{ borderBottom: '1px solid whitesmoke' }}>1 tbsp cornflour</li><br />
            </ul>    
          </Card.Body>
        </Card>
      </div>
      <div>
      <Card>
          <Card.Body className='carddesign'>
            <h3>For Chilli Sauce:</h3>
            <ul style={{ listStyleType: 'circle' }}>
            <li style={{ borderBottom: '1px solid whitesmoke' }}>25 gram garlic, peeled</li><br />
            <li style={{ borderBottom: '1px solid whitesmoke' }}>6 gms whole red chillies</li><br />
            <li style={{ borderBottom: '1px solid whitesmoke' }}>3 tbsp vinegar</li><br />
            <li style={{ borderBottom: '1px solid whitesmoke' }}>3 tbsp vinegar</li><br />
            <li style={{ borderBottom: '1px solid whitesmoke' }}>1 tbsp oil</li><br />
            <li style={{ borderBottom: '1px solid whitesmoke' }}>to taste salt</li><br />
            <li style={{ borderBottom: '1px solid whitesmoke' }}>to taste salt</li><br />
            <li style={{ borderBottom: '1px solid whitesmoke' }}>to taste sugar</li><br />  
            </ul>
          </Card.Body>
        </Card>
      </div>
      <div>
        <img src={oval2} alt="" className='oval2' />
      </div> <br /><br /><br />
      <div className='momoheader'>
      <Brush/>
        <h2 className='inged'><span className='color'>Allergy</span> Advice</h2>
      <Brush2/>
      </div>
      <div className='loremallergy'>
        <p>Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit in gravida. Nisl facilisis luctus sit porttitor placerat purus tincidunt. Cursus <br /> nascetur a mauris odio quis sociis pretium nisl. In viverra diam dis montes orci congue vulputate magna ullamcorper. Semper tellus ipsum felis <br /> maecenas ultrices turpis amet euismod malesuada. Amet sed neque vitae malesuada quis sed urna. <br /> <br />
          Feugiat orci feugiat cursus risus tincidunt. Aliquet nam iaculis bibendum tortor varius sit. Volutpat nunc nisl quisque elit. Ac est ultricies risus et sed. <br /> Donec auctor tristique quam morbi pellentesque et. Scelerisque dui id arcu laoreet iaculis nunc et nulla sed. Aliquet nullam vulputate quis ut mi <br /> placerat auctor. Ipsum massa suspendisse netus mollis interdum. <br /> <br />

Augue leo eget ut vitae maecenas ac. Metus massa nunc tristique donec dignissim aenean congue justo et. Parturient elit adipiscing non vitae mattis. <br /> Congue senectus urna cursus nisi nisl nisl tincidunt rhoncus. Congue sit etiam vestibulum elit aenean leo enim volutpat. Aliquet vitae condimentum <br /> bibendum ullamcorper vel cursus libero netus bibendum. Lorem id ut proin tincidunt. Nibh nunc amet odio est et. Sem dui nunc morbi leo quisque <br /> viverra ultrices. Mattis at tempus ultricies ut feugiat nunc dignissim. Urna turpis purus turpis elit risus. <br /> <br />

Sed elit ornare senectus dignissim diam dolor sed dictum. Faucibus mauris senectus odio blandit diam nunc. Urna volutpat ut potenti ut mus orci <br /> neque sem. Mattis amet at amet faucibus nisl morbi aenean ac. Justo turpis bibendum donec lacinia. Enim integer ornare nibh urna enim tortor arcu <br /> sit lacinia. Dapibus praesent vitae dolor cursus fringilla hac facilisis pellentesque. Elementum lacus varius et neque amet aliquam donec sed. Ultrices <br /> euismod commodo id vehicula commodo. Amet lorem eros nulla mauris. Sit arcu enim sit nunc mi sed aenean. Ornare enim vitae volutpat est dui <br /> tortor. Viverra habitant et consequat vitae elit aliquet iaculis in tristique. <br /> <br />

Quam ipsum viverra ac laoreet platea in praesent. Mattis molestie arcu nulla convallis interdum proin dui ut porta. Amet potenti praesent pulvinar <br /> scelerisque vitae habitant eget. Senectus hac id aliquam ipsum urna. Est ut amet nec sollicitudin nunc viverra nec ipsum suspendisse. Etiam risus <br /> ultricies dictum nisl. Bibendum ultrices elementum feugiat erat suspendisse mi fermentum magna suspendisse. Nisi mattis consequat nec donec eu <br /> amet nulla a. At blandit vulputate morbi tortor amet. Hac nec gravida tempor ac. Senectus nunc libero scelerisque quisque. Risus condimentum <br /> mattis massa integer.</p> <br /> <br />

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
     <div>
      <Footer/>
     </div>
    </div>
  )
}

export default Advice
