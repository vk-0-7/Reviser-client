import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div id='Contact'>
      <div className="columns">
          <div className="col-1" id='col'>
         <h2>Help Desk</h2>
          <h5>Customer Care</h5>
          <h5>Legal Help</h5>
          <h5>Services</h5>
          <h5>Privacy Policy</h5>
          <h5>Call us</h5>
          </div>
          <div className="col-2" id='col'>
              <h2>Recent Courses</h2> 
               <h5> Web Development</h5>
               <h5> Programming </h5>
               <h5> Data Structure</h5>
               <h5> Mobile Development</h5>
               <h5> Database</h5>
          </div>
          <div className="col-3" id='col'>
              <h2>Have a Question?</h2>
              <h5>	203 Fake St. Mountain View,Mumbai , India </h5>
              <h5>	+91-9608945441 </h5>
              
              <h5>	mrvivek.tech </h5>
              <h5>	vivekr4400@gmail.com </h5>
          </div> 
          <div className="col-4" >
              <h2> Newsletter</h2>
              <div className="newsletter">
             <input type="text" placeholder='Your Email Address' />
             <button>Subscribe</button>
             </div>
          </div>


      </div>
         <div className="copyright">
            <h6>Copyright 2022 All rights reserved | Made with ❤ by vivek</h6> 
         </div>
    </div>
  )
}

export default Contact