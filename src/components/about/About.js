import React from 'react'
import profilePhoto from '../../media/profilephoto.jpg'
import './About.css'

export default function About(){
  return (
    <div className='about-container'>
      <div className='about-desc'>
        <h3> Título </h3>
        <p>lorem</p>
      </div>
      <div className='about-img'>
        <img src={ profilePhoto } alt='About' />
      </div>
    </div>
    
  )
}
