import React from 'react'
import './Footer.css'
import rightBottomLogo from '../assets/right-bottom-logo.png';

function Footer() {
  return (
    <div className='Footer'>
        <p className='copyright'>Copyright 2017 nichoShop Inc. All Rights Reserved. User Agreement, Privicy and Cookies</p>
        <img className='right-bottom-icon' src={rightBottomLogo} width="120px" alt="logo"/>
    </div>
  )
}

export default Footer