import React, {useContext} from 'react'
import {ProductsContext} from "../Contexts/ProductContext"
import CategoryStyle from './css/category.module.css'
import Logo from "./Logo"
import ProductCard from "./ProductCard.js"
import SearchBar from "./SearchBar"
import Nav from "./Nav"
import CartButton from "./CartButton"

function Electronics() {

    const  product  = useContext(ProductsContext)
        
        function filterProduct() {
          const selectedProduct = product.products.filter((item) => item.category === 'electronics');
          return selectedProduct
        }

        return ( 
            
          <div className={CategoryStyle.catcontainer} key={456345635}>
            <p className={CategoryStyle.logo}><Logo /></p>
            <p className={CategoryStyle.search}><SearchBar /></p>
            <p className={CategoryStyle.cart}><CartButton /></p>
            <p className={CategoryStyle.nav}><Nav /></p>
              <div className={CategoryStyle.card}>
                  {filterProduct().map(prod => (
                      <p >
                          <ProductCard prod={prod}/>
                      </p>
                      ))}    
              </div>
           </div>

          )
}

export default Electronics