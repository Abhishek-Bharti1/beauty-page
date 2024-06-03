import React from 'react'
import CertificateForm from '../components/CertificateForm'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import WhyJoin from '../components/WhyJoin'

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <Header />
        <Form/>
        <WhyJoin/>
        <CertificateForm/>
        <Footer/>
    </div>
  )
}

export default Home