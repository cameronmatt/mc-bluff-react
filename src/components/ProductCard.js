import React, {useState} from 'react'
import ProductCardStyle from './css/ProductCard.module.css'
import { Link } from 'react-router-dom'

const ProductCard = ({prod}) => {

    const [product, setProduct] = useState({});
        
            const handleClick = () => {
                setProduct(prod)
            }

        return ( 
             <div key={42443434} className={ProductCardStyle.item}>
                <div className={ProductCardStyle.all} >
                    <img className={ProductCardStyle.image} src={prod.image} alt={prod.title}/>
                    <p className={ProductCardStyle.title}>{prod.title}</p>
                    <p className={ProductCardStyle.price}> Price: ${prod.price}</p>
                </div>
                <Link to={{ 
                    pathname: `product/${prod.id}`, 
                    state: {...prod}
                    }} 
                    className={ProductCardStyle.button} 
                    onClick={handleClick}> 
                    View item
                </Link> 
            </div>
        )     
}

export default ProductCard