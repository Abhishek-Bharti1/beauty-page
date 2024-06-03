import React from 'react'
import "../styles/Header.css";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { IoCheckmarkOutline } from "react-icons/io5";
import { PARA1, PARA2, PARA3 } from '../constants/Constant';
const Header = () => {
  return (
    <div className='header'>
  <div className='sub-header'>
  <h3>Professional Online <br/> Makeup Course</h3>
<div className='certified'>
    <span className='spansP'><AiFillSafetyCertificate/>&nbsp;&nbsp;&nbsp;Certification Programme</span>
    <span style={{color:"#b99741"}}><FaStar/>&nbsp;Rated 4.85/5</span>
</div>
<div className='para'>
<p><IoCheckmarkOutline/>&nbsp;&nbsp;&nbsp;{PARA1}</p>
<p><IoCheckmarkOutline/>&nbsp;&nbsp;&nbsp;{PARA2}</p>
<p><IoCheckmarkOutline/>&nbsp;&nbsp;&nbsp;{PARA3}</p>
</div>

  </div>


    </div>
    
  )
}

export default Header