import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram,AiFillLinkedin  } from 'react-icons/ai';
import { ImYoutube } from 'react-icons/im';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer mt-5 d-flex justify-content-around  '>
            <p>©  {(new Date().getFullYear())} Carsmart. All Rights Reserved.</p>
            <div className='flex justify-content-center align-items-center'>
               <span>Follow us</span>
               <span><FaFacebookSquare/></span>
               <span><AiFillInstagram/></span>
               <span><AiFillLinkedin/></span>
               <span><ImYoutube/></span>
            </div>
        </footer>
    );
};

export default Footer;