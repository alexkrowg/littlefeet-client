import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import List from '../../components/List/List'
import "./Products.scss"
import useFetch from '../../hooks/useFetch'

const Products = () => {

  const [categoryId, setCategoryId] = useState(useSelector(state => state.category.value))
  const [maxPrice, setMaxPrice] = useState(9999)
  const [minPrice, setMinPrice] = useState(0)
  const [colors, setColors] = useState([])
  const [sizes, setSizes] = useState([])
  const [sort, setSort] = useState("asc")
  const [openFilters, setOpenFilters] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState([])



  const { data, loading, error } = useFetch(categoryId > 0 ? `/sub-categories?filters[categories][id][$eq]=${categoryId}` : "/sub-categories")
  const categoryList = useFetch(`/categories`)


  const handleSubCategoryChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    setSelectedCategory(isChecked ? [...selectedCategory, value] : selectedCategory.filter(category => category !== value))
  }

  const handleColorsChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    setColors(isChecked ? [...colors, value] : colors.filter(color => color !== value))
  }

  const handleSizesChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    setSizes(isChecked ? [...sizes, value] : sizes.filter(size => size !== value))
  }


  const handleMinPriceChange = (e) => {
    const value = e.target.value
    value === "" ? setMinPrice(0) : setMinPrice(value)
  }
  const handleMaxPriceChange = (e) => {
    const value = e.target.value
    value === "" ? setMaxPrice(9999) : setMaxPrice(value)
  }


  const colorList = ["black","blue","orange","green","red","purple","gray","white","wheat","yellow","brown","beige","cream","pink"]
  const sizesList = ["6m","9m","1y","2y","3y"]

  return (
    <div className='products-container'>
      <div className="filters">
        <div className='filter-icon' onClick={() => setOpenFilters(!openFilters)}><span>Filters</span>{openFilters ? <i className="fa-solid fa-caret-down"></i> : <i className="fa-solid fa-caret-up"></i>}</div>
        <div className="filter-items" style={openFilters ? { height: "0", display: "none" } : { height: "100%", display: "block" }}>
          <div className="filter-item">
            <h2>Categories</h2>
            {error ? "Something went wrong..." : (loading ? "Loading categories" : data?.map(item => (
              <div className="input-item">
                <input type="checkbox" id={item.id} value={item.id} onChange={handleSubCategoryChange} />
                <label htmlFor={item.id}>{item.attributes.title.charAt(0).toUpperCase()
                  + item.attributes.title.slice(1)}</label>
              </div>
            )))}

          </div>
          <div className="filter-item">
            <h2>Price</h2>
            <div className="input-item price-input">
              <input type="number" placeholder='min.' id='minPrice' onChange={handleMinPriceChange} />
              <span>-</span>
              <input type="number" placeholder='max.' id='maxPrice' onChange={handleMaxPriceChange} />
            </div>

          </div>
          <div className="filter-item">
            <h2>Sort by</h2>

            <div className="input-item">
              <input type="radio" name="price" id="none" value="none" onChange={() => setSort(null)} />
              <label htmlFor="none">None</label>
            </div>
            <div className="input-item">
              <input type="radio" name="price" id="asc" value="asc" onChange={() => setSort("asc")} />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="input-item">
              <input type="radio" name="price" id="desc" value="desc" onChange={() => setSort("desc")} />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>

          </div>

          <div className="filter-item">
            <h2>Sizes</h2>
            {sizesList.map(size => (
              <div className="input-item">
                <input type="checkbox" id={size} value={size} onChange={handleSizesChange} />
                <label htmlFor={size}>{size}</label>
              </div>
            ))}

          </div>

          <div className="filter-item">
            <h2>Colors</h2>
            {colorList.map(color => (
              <div className="input-item">
                <input type="checkbox" id={color} value={color} onChange={handleColorsChange} />
                <label htmlFor={color}>{color}</label>
              </div>
            ))}

          </div>
        </div>
      </div>

      <div className="products-content">
        <div className="category-list">
          <button onClick={() => setCategoryId(0)} className="category-item" style={categoryId === 0 ? { backgroundColor: "#FF4E4E", color: "white" } : null}>All</button>
          {categoryList.data?.map(category => (
            <button onClick={() => setCategoryId(category.id)} className="category-item" id={category.id} style={categoryId === category.id ? { backgroundColor: "#FF4E4E", color: "white" } : null}>{category.attributes.title.charAt(0).toUpperCase()
              + category.attributes.title.slice(1)} </button>
          ))}
        </div>
        <div className="product-cards">
          {data && data.length > 0 && <List maxPrice={maxPrice} minPrice={minPrice} sort={sort} selectedCategory={selectedCategory} categoryId={categoryId} sizes={sizes} colors={colors} />}
        </div>
      </div>

    </div>
  )
}

export default Products