import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Rehan Siraj</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/rsiraj" target='_blank'><FaGithub/></a>
        <a href="https://linkedin.com/in/rehansiraj" target='_blank'><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rehan Siraj | All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer;