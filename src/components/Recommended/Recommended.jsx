import React from 'react'
import Card from '../Card/Card'
import "./Recommended.scss"
import useFetch from '../../hooks/useFetch'

const Recommended = ({ categoryId, currentProductId }) => {


    const { data, loading, error } = useFetch(`/products?populate=*&filters[categories][id][$eq]=${categoryId}&filters[id][$ne]=${currentProductId}`)


    return (
        <div className='recommended-container'>
            {data.length > 0 && <div className='recommended-title--container'>
                <h1 className="recommended-title">You might also like</h1>
                <div className='line'></div>
            </div>}
            <div className="items-container">
                {error ? "Something went wrong..." : (loading ? "Loading" : data?.slice(0, 4).map(product => {
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


export default Recommended