import React from 'react'
import useFetch from '../../hooks/useFetch'
import Card from "../Card/Card"
import "./List.scss"

const List = ({ selectedCategory, minPrice, maxPrice, sort, categoryId, sizes, colors }) => {

    const categoryFilter = selectedCategory.map(
        (category) => `&[filters][sub_categories][id][$eq]=${category}`
    ).join('')
    const colorsFilter = colors.map(
        (color) => `&[filters][colors][$containsi]=${color}`
    ).join('')
    const sizesFilter = sizes.map(
        (size) => `&[filters][size][$containsi]=${size}`
    ).join('')


    const { data, loading, error } = useFetch(`/products?populate=*${categoryId > 0 ? `&filters[categories][id][$eq]=${categoryId}` : ""}${categoryFilter}&filters[price][$lte]=${maxPrice}&filters[price][$gte]=${minPrice}${sort ? `&sort=price:${sort}` : ""}${colorsFilter}${sizesFilter}`)



    return (
        <div className='list-container'>
            {error ? "Something went wrong..." : (loading ? "Loading" : data?.map(product => {
                return <Card
                    key={product.id}
                    id={product.id}
                    {...product.attributes}
                />
            }))}
        </div>
    )
}

export default List