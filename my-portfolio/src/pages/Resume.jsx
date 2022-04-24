import React from 'react'
import Navbar from '../components/Navbar';
import "../partials/resume.css";
import Footer from "../components/Footer";

const Resume = () => {
  return (
      <>
      <Navbar />
      <div className='resume'>
        <img src="../img/van-rlan-resume.png" alt="" />
      </div>
      <Footer />
      </>
  )
}

export default Resume;