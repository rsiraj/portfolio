import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://linkedin.com/in/rehansiraj/" target="_blank"><BsLinkedin/></a>
    <a href="https://Github.com/rsiraj/" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials