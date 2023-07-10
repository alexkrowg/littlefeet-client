import { Link } from 'react-router-dom'
import "./Card.scss"

const Card = (props) => {

    return (
        <Link to={`/product/${props.id}`}>
            <div className='card-container'>
                <span className='card-top'>
                    {props.isNew && <span className='new-badge badge'>NEW SEASON</span>}
                    {props.onSale && <span className='new-badge badge'>SALE</span>}
                    {props.onSale && <span className='discount badge'>-{(((props.oldPrice-props.price)/props.oldPrice)*100).toFixed(0)}%</span>}
                    {/* <img className='main-image' src={process.env.REACT_APP_UPLOAD_URL + props.mainImage?.data[0]?.attributes?.url} alt="" /> */}
                    <img className='main-image' src={props.mainImg[0]} alt="" />
                </span>
                <h1 className='card-title'>{props.title}</h1>
                <div className="price-info">
                    <p className='card-price'>{props.currency} ${props.price}</p>
                    {props.oldPrice !== null && <p className='card-old--price'>{props.currency} ${props.oldPrice}</p>}
                </div>
            </div>
        </Link>
    )
}

export default Card