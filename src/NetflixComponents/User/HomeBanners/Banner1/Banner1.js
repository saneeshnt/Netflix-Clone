import React from 'react'
import './Banner.css'
import LoginForm from './LoginForm/LoginForm'

function Banner() {
  return (
    <div className='banner'>
     
        <h1>Enjoy big movies, hit series and more from ₹149.</h1>
        <h2>Join today. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email to create or restart your membership</p>
      
        <LoginForm/>
    </div>
  )
}

export default Banner