import React from 'react'
import { useDispatch } from 'react-redux'
import { setCategoryId } from "../../redux/categoryReducer"
import { Link } from 'react-router-dom'
import "./Categories.scss"

const Categories = () => {

    const dispatch = useDispatch()

    return (
        <div className='categories-container'>
            <div className='categories-title--container'>
                <div className='line'></div>
                <h1 className="categories-title">Categories</h1>
            </div>

            <div className="categories-wrapper">
                <div className='cat-col cat-col-lg'>
                    <div className='cat-row'>
                        <div className="cat-col">
                            <div className="cat-row">
                                <span className='bottom-text'>GIRL</span>
                                <Link to={"/products"}><img src="https://images.pexels.com/photos/189857/pexels-photo-189857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" onClick={() => dispatch(setCategoryId(2))}/></Link>
                            </div>
                        </div>
                        <div className="cat-col">
                            <div className="cat-row">
                                <span className='bottom-text'>BOY</span>
                                <Link to={"/products"}><img src="https://images.pexels.com/photos/2533323/pexels-photo-2533323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" onClick={() => dispatch(setCategoryId(1))} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='cat-row wide-row'>
                        <span className='bottom-text'>NEWBORN</span>
                        <Link to={"/products"}><img src="https://images.pexels.com/photos/235127/pexels-photo-235127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" onClick={() => dispatch(setCategoryId(3))} /></Link>
                    </div>
                </div>

                <div className='cat-col'>
                    <div className="cat-row special-row">
                        <span className='bottom-text'>NEW COLLECTION</span>
                        <Link to={"/products"}><img src="https://images.pexels.com/photos/10508388/pexels-photo-10508388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" onClick={() => dispatch(setCategoryId(5))} /></Link>
                    </div>
                </div>

                <div className='cat-col last-col'>
                    <div className='cat-row'>
                        <span className='left-text'>SHOES</span>
                        <Link to={"/products"}><img src="https://images.pexels.com/photos/267278/pexels-photo-267278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></Link>
                    </div>
                    <div className='cat-row'>
                        <span className='bottom-text sm-onm'>ACCESSORIES</span>
                        <Link to={"/products"}><img src="https://images.pexels.com/photos/15880703/pexels-photo-15880703/free-photo-of-cute-baby-wearing-a-fedora-and-sunglasses-sleeping-in-a-pet-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" onClick={() => dispatch(setCategoryId(6))} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories