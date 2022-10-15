import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Courses.css'
import { Link } from "react-router-dom";
import  {Coursesdata} from '../Data/data' 

const Courses = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (

  <div id="Courses">
     
     <div className="heading">
          <p>Popular Courses  <br />
         Available Right Now</p>
         <h4>Get the Best Courses at Best Prices. You Can get Upto <span>50% discount .</span>  <span>Hurry Up !</span> </h4>
     </div>

   <div className='inner-course'>
     <Slider {...settings}> 
     {Coursesdata.map((item) =>(
        <div className="card" >

     <Link style={{ textDecoration: 'none' }} >  <div  className="card-top">
          <img src={item.Imglink} alt={item.title} /> 
            <h1 >{item.title}</h1>
            </div>  </Link> 
          <div className="card-bottom">
           <h3 >{item.price}</h3>
           <p>{item.category}</p> </div>
        </div> 
      
) )}

     </Slider>
     
   </div>
   </div>
  )
}
 
export default Courses