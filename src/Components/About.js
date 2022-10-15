import React from 'react'
import './About.css'
import  img from '../image/img.jpg'

const About = () => {
  return (
    <div className='about-section'>
        <img src={img} alt="image" /> 
        <div className="description">
        <h1>Who We Are?</h1>
        <h3>
          This is a platform where You can get help learning english. You can Add any word of many categories and Revise them any time By giving Quizes. so,that you can learn better and quickly.
        </h3>  <br />
        <h3>  We also provide Best Courses in affordable prices.</h3>
        </div>


    </div>
  )
}

export default About