import React from 'react'
import "./Newsletter.scss"

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <h1>Get 10% off</h1>
            <p>Subscribe to the newsletter and get 10% off your next shop, access to special offers and much more!</p>
            <div className="submit-form">
                <input placeholder='Enter your email adress' className='newsletter-input'></input>
                <button className="newsletter-btn">I'M IN</button>
            </div>
        </div>
    )
}

export default Newsletter