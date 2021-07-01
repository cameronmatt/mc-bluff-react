import React, {useEffect} from 'react'
import ProductPageStyle from './css/ProductPage.module.css'
import CategoryStyle from './css/category.module.css'
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import Nav from "./Nav"
import CartButton from "./CartButton"

function ProductPage({location}) {

    function addProduct() {
        //e.preventDefault();
        //console.log(props)
        const itemTitle = location.state.title;
        const itemPrice = location.state.price;
        const data = JSON.stringify({ 
            title: itemTitle,
            price: itemPrice       
        })
        console.log("data", data)
        
        fetch( 'http://localhost:3000/cart', {   
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: data
        })
        .then(res => res.json())
        .then((data) => console.log('database', data))
           //console.log('save',data)
        .catch(postError => console.log(postError))
        }

        // renders product images and information to the DOM
        return (
        <div className={ProductPageStyle.container} key={location.state.id}>
            <p className={CategoryStyle.logo}><Logo /></p>
            <p className={CategoryStyle.search}><SearchBar /></p>
            <p className={CategoryStyle.cart}><CartButton /></p>
            <p className={CategoryStyle.nav}><Nav /></p>
            <div >
                <div className={ProductPageStyle.prodcontainer}>
                    <p className={ProductPageStyle.title}>{location.state.title}</p>
                    <img className={ProductPageStyle.image} src={location.state.image} alt={location.state.title}/>
                        <div >
                            <p className={ProductPageStyle.price}> Price: ${location.state.price}</p>
                                <button 
                                className={ProductPageStyle.addCart}
                                onClick={addProduct}
                                > 
                                Add to Shopping Cart 
                                </button>
                            <p className={ProductPageStyle.description}>{location.state.description}</p>
                        </div>
                </div>
                {/* {
                    isInCart(props) && 
                    <button 
                    onClick={() => increase(props)}
                    className="btn btn-outline-primary btn-sm">Add more</button>
                }

                {
                    !isInCart(props) && 
                    <button 
                    onClick={() => addProduct(props)}
                    className="btn btn-primary btn-sm">Add to cart</button>
                } */}
            </div>
        </div>
        )
    }   


export default ProductPage