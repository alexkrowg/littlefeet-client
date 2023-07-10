import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCategoryId } from "../../redux/categoryReducer"
import "./Hero.scss"

const Hero = () => {

  const dispatch = useDispatch()

  return (
    <div className="hero-container">
      <div className='bg-elements'>
        <img src="https://images.pexels.com/photos/7973595/pexels-photo-7973595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="hero-bg-img1 hero-img" />
        <img src="https://images.pexels.com/photos/6392900/pexels-photo-6392900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="hero-bg-img2 hero-img" />
        <div className='bg-cube1'></div>
        <div className='bg-cube2'></div>
      </div>
      <div className='hero-details'>
        <h1>Fashionably Sweet for Your <span style={{ color: "#FF4E4E" }}>Little</span> Feet</h1>
        <div className='hero-description'>
          <p>From tiny onesies and soft pajamas to trendy dresses and cute accessories, our carefully curated collection ensures that your baby looks precious at every moment.</p>
          <Link to="/products" onClick={() => dispatch(setCategoryId(0))}>Check out our collection <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero