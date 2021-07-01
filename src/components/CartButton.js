import React from 'react'
import Cart from "./Images/cart.png"
import CategoryStyle from './css/category.module.css'

class CartButton extends React.Component {

    render() {

        return (
            <div className={CategoryStyle.cartbutton}>
                <p>
                    <a href="/cart" className={CategoryStyle.viewCart}> View Cart</a>
                </p>
                <p>
                    <a href="/cart"> <img className={CategoryStyle.cartlogo} src={Cart} alt="cart"/></a>
                </p>
            </div>

        )
    }
}

export default CartButton