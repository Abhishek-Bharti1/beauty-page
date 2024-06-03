import React from 'react'
import CertificateImg from "../assets/certificate.png";
import "../styles/CertificateForm.css";
const CertificateForm = () => {
  return (
    <div className='CertificateForm'>
        <h2 className='h2-head'>Get Certified From <br/>India's Biggest <br/>Beauty Platform</h2>
        <img className='certificateImg' src={CertificateImg} alt='logo' />
    </div>
  )
}

export default CertificateForm