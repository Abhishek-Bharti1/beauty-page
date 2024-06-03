import React from 'react'
import { LOGO } from '../constants/Constant'
import '../styles/Navbar.css' // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav>
      <img 
        className="logo" 
        src={LOGO}
        alt="Logo"
      />
      <p style={{
        position:"absolute"
      }}>Presents</p>
      <div className="image-container">
        <img src="https://res.cloudinary.com/dtks0l86r/image/upload/v1688038483/website-static-assets/Project%20Website/Homepage/Expert3_s0neuo.webp" alt="Expert"/>
        <img src="https://res.cloudinary.com/dtks0l86r/image/upload/v1688038483/website-static-assets/Project%20Website/Homepage/Expert3_s0neuo.webp" alt="Expert"/>
        <img src="https://res.cloudinary.com/dtks0l86r/image/upload/v1688038483/website-static-assets/Project%20Website/Homepage/Expert3_s0neuo.webp" alt="Expert"/>
        <img src="https://res.cloudinary.com/dtks0l86r/image/upload/v1688038483/website-static-assets/Project%20Website/Homepage/Expert3_s0neuo.webp" alt="Expert"/>
      </div>
    </nav>
  )
}

export default Navbar
