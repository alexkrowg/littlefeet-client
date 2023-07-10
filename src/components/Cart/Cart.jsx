import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeItem } from '../../redux/cartReducer'
import { loadStripe } from '@stripe/stripe-js';
import "./Cart.scss"
import { makeRequest } from '../../makeRequest';

const Cart = (props) => {
    const products = useSelector(state => state.cart.products)
    const totalPrice = () => {
        let total = 0

        products.forEach(item => total += item.quantity * item.price)
        return total.toFixed(2)
    }

    const stripePromise = loadStripe("pk_test_51NGeGQF02btL7UjpW409HcWCeFHypr7F7n74I2cytIJ5luIbzwc7OFrQWa3sbZJRK2PnoBVGM60FoewLw4Lzuk1A00TeAGUxbb")

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise

            const response = await makeRequest.post("/orders", {
                products
            })

            await stripe.redirectToCheckout({
                sessionId: response.data.stripeSession.id
            })
        } catch (error) {
            console.log(error)
        }
    }

    const dispatch = useDispatch()

    return (
        <div className='cart-container' style={props.style}>
            <div className="upper">
                <h1>Shopping Bag</h1>
                <button onClick={props.handleCartClose}><i className="fa-solid fa-xmark"></i></button>
            </div>
            <div className="items">
                {products.length > 0 ? products?.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" className="item-img" />
                        <div className="item-details">
                            <h1 className="item-title">{item.title}</h1>
                            <div className="item-statistics">
                                <span className="item-size">Color: {item.selectedColor}</span>
                                <span className="item-color">Size: {item.selectedSize}</span>
                                <span className="item-price">{item.quantity} x ${item.price}</span>
                            </div>
                        </div>
                        <i className="fa-regular fa-trash-can" onClick={() => dispatch(removeItem(item.removeId))}></i>
                    </div>
                )) : <p style={{ color: "gray", textAlign: "center" }}>No items</p>}
            </div>

            <div className="subtotal">
                <p>Subtotal</p>
                <span>${totalPrice()}</span>
            </div>
            <button className="checkout" onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <button className='empty' onClick={() => dispatch(emptyCart())}>Empty cart</button>
        </div>
    )
}

export default Cart