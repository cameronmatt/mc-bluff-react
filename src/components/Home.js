import React, {useContext} from 'react'
import HomeStyle from './css/Home.module.css'
import bluff from "./Images/bluff.png"
import menswear from "./Images/menswear.png"
import womenswear from "./Images/womenswear.png"
import electronics from "./Images/electronics.png"
import jewelery from "./Images/jewelery.png"
import { Link } from 'react-router-dom'
import SearchBar from "./SearchBar"
import {ProductsContext} from "../Contexts/ProductContext"
import ProductCard from "./ProductCard.js"

const Home = () => {

    const {products}  = useContext(ProductsContext)

        return (

            <div className={HomeStyle.homecontainer} key={"home"}>
                <img className={HomeStyle.logo} src={bluff} alt="logo"/>

                <div className={HomeStyle.search}>
                    <SearchBar className={HomeStyle.search}/>
                </div>

                <div className={HomeStyle.menswear}>
                    <a href="./menswear"><img  className={HomeStyle.image1} src={menswear} alt="Menswear" /></a>
                    <Link to="./menswear" className={HomeStyle.menswearLink} >Menswear</Link>
                </div>

                <div className={HomeStyle.womenswear}>
                    <a href="./womenswear"><img  className={HomeStyle.image2} src={womenswear} alt="Womenswear" /></a>
                    <Link to='./womenswear'className={HomeStyle.womenswearLink} >Womenswear</Link>
                </div>

                <div className={HomeStyle.electronics}>
                    <a href="./electronics"><img  className={HomeStyle.image3} src={electronics} alt="Electronics" /></a>
                    <Link to="./electronics"className={HomeStyle.electronicsLink} >Electronics</Link>
                </div>

                <div className={HomeStyle.jewelery}>
                    <a href="./jewelery"><img  className={HomeStyle.image4} src={jewelery} alt="Jewelery" /></a>
                    <Link to="./jewelery" className={HomeStyle.jeweleryLink}>Jewelery</Link>
                </div>
                <div className={HomeStyle.saletitle}>SALE</div>
                <section className={HomeStyle.sale}>
                    {products.filter((item) => item.price <= 11).map(prod => (
                        <ProductCard prod={prod}/>
                    ))}
                </section>
            </div>
            
        )
}

export default Home