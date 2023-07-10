import React from 'react'
import Card from '../Card/Card'
import "./Trending.scss"
import useFetch from '../../hooks/useFetch'

const Trending = ({type}) => {

    const {data,loading,error} =  useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

    return (
        <div className='trending-container'>
            <div className='trending-title--container'>
                <div className='line'></div>
                <h1 className="trending-title">Trending Products</h1>
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


export default Trending