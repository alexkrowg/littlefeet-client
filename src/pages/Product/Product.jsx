import React, { useEffect, useState } from 'react'
import Recommended from "../../components/Recommended/Recommended"
import { useDispatch } from 'react-redux'
import { useParams } from "react-router-dom"
import useFetch from '../../hooks/useFetch'
import { addToCart } from '../../redux/cartReducer'
import { nanoid } from '@reduxjs/toolkit'
import "./Product.scss"

const Product = () => {
  const id = useParams().id

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`)

  const [quantity, setQuantity] = useState(0)
  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(null)
  const [colorList, setColorList] = useState([])
  const [sizeList, setSizeList] = useState([])
  const [selectedColor, setSelectedColor] = useState(null)
  const [validation, setValidation] = useState({
    size: null,
    color: null,
    quantity: null
  })
  const dispatch = useDispatch()


  const handleValidation = () => {

    Object.keys(validation).forEach(item => validation[item] === null ?
      setValidation(prevState => {
        return (
          { ...prevState, [item]: false }
        )
      }) : null
    )

    if (selectedColor !== null) {
      setValidation(prevState => {
        return (
          { ...prevState, color: true }
        )
      })
    }
    if (selectedSize !== null) {
      setValidation(prevState => {
        return (
          { ...prevState, size: true }
        )
      })
    }
    if (quantity > 0) {
      setValidation(prevState => {
        return (
          { ...prevState, quantity: true }
        )
      })
    } else {
      setValidation(prevState => {
        return (
          { ...prevState, quantity: false }
        )
      })
    }


    if (selectedColor !== null && selectedSize !== null && quantity > 0) {
      dispatch(addToCart({
        id: data.id,
        removeId: nanoid(),
        title: data.attributes.title,
        img: data?.attributes?.mainImage?.data[0]?.attributes?.url,
        price: data.attributes.price,
        selectedColor,
        selectedSize,
        quantity
      }))
    }
  }

  useEffect(() => {
    setSizeList(data?.attributes?.size)
    setColorList(data?.attributes?.colors)
    setImages(data?.attributes?.mainImage?.data.map(item => item?.attributes?.url))
  }, [data])

  return (
    <div className="product-page">
      {error ? "Product not found" : (loading ? "Loading" : null)}
      <div className='product-container'>
        <div className="product-images">
          <div className="all-images">
            {images && images.map(image => (
              <img src={process.env.REACT_APP_UPLOAD_URL + image} alt="" onClick={() => setSelectedImage(images.indexOf(image))} />
            ))}
          </div>
          <div className="main-image">
            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.mainImage?.data[selectedImage]?.attributes?.url} alt="" />
          </div>
        </div>

        {error ? null : <div className="product-details">
          <h1>{data?.attributes?.title}</h1>
          <span>${data?.attributes?.price}</span>
          <div className="size-selection">
            <div className="label-area">
              <div className="label">
                <label htmlFor="">Select size</label>
                {validation.size === false && <p className='validation'>You must select size</p>}
              </div>
            </div>
            <div className="size">
              {sizeList?.map(size => (
                <button value={`${size}`} onClick={(e) => setSelectedSize(e.target.value)} style={selectedSize === `${size}` ? { backgroundColor: "black", color: "white" } : null}>{size}</button>
              ))}
            </div>
          </div>

          <div className="color-selection">
            <div className="label">
              <label htmlFor="">Colors available</label>
              {validation.color === false && <p className='validation'>You must select a color</p>}
            </div>
            <div className="colors">
              {colorList?.map(color => (
                <button onClick={(e) => setSelectedColor(e.target.value)} className="color" value={color} style={color === `${selectedColor}` ? { backgroundColor: `${color}`, border: "3px solid black" } : { backgroundColor: `${color}`, border: "1px solid gray" }}></button>
              ))}
            </div>
          </div>

          <div className="quantity-selection">
            <div className="label">
              <label htmlFor="">Quantity</label>
              {validation.quantity === false && <p className='validation'>You must select quantity</p>}</div>
            <div className="quantity">
              <button onClick={() => quantity > 0 ? setQuantity(prevState => prevState - 1) : setQuantity(0)}>-</button>
              <input type="text" className="quantity-input" value={quantity} onChange={(e) => e.target.value === "" ? setQuantity(0) : setQuantity(e.target.value)} />
              <button onClick={() => setQuantity(prevState => prevState + 1)}>+</button>
            </div>
          </div>

          <div className="action-btns">
            <button onClick={handleValidation}>Add to basket</button>
          </div>

          <div className="description">
            <p>{data?.attributes?.description}</p>
          </div>

        </div>}
      </div>

      <div className="recommended-section">
        <Recommended categoryId={data?.attributes?.categories?.data[0]?.id} currentProductId={data.id} />
      </div>

    </div>
  )
}

export default Product