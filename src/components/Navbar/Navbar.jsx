import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCategoryId } from "../../redux/categoryReducer"
import Cart from '../Cart/Cart'
import { useSelector } from 'react-redux'
import "./Navbar.scss"

const Navbar = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.cart.products)
    const [openCart, setOpenCart] = useState(false)

    return (
        <div className='navbar'>
            <Link to="/" className='logo'>littlefeet</Link>
            <div className='wrapper'>
                <div className='menu-items'>
                    <Link to="/products" onClick={() => dispatch(setCategoryId(0))}>Products</Link>
                    <div className='shopping-bag' onClick={() => setOpenCart(!openCart)}>
                        <i className="fa-solid fa-bag-shopping"></i>
                        <span>{products.length}</span>
                    </div>
                </div>
            </div>
            {openCart && <Cart handleCartClose={() => setOpenCart(false)} />}
        </div>
    )
}

export default Navbar