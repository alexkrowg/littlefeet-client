import React from 'react'
import useFetch from '../../hooks/useFetch'
import Card from '../Card/Card'
import "./Featured.scss"

const Featured = ({type}) => {
    
    const {data,loading,error} =  useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)


    return (
        <div className='featured-container'>
            <div className='featured-title--container'>
                <h1 className="featured-title">Featured Products</h1>
                <div className='line'></div>
            </div>
            <div className="items-container">
            {error ? "Something went wrong..." : (loading ? "Loading" : data?.slice(0,10).map(product => {
                    return <Card
                        key={product.id}
                        id={product.id}
                        {...product.attributes}
                    />
                }))}
            </div>
        </div>
    )
}

export default Featured