import React, {useContext} from 'react'
import {ProductsContext} from "../Contexts/ProductContext"
import SearchStyle from './css/SearchBar.module.css'
import Select from 'react-select';
import { useHistory } from 'react-router-dom'

function SearchBar() {

    const history = useHistory();

    const product = useContext(ProductsContext)

    const newProducts = product.products.map(prod => ( 
        {
            label: prod.title, 
            value: prod.title,
            id: prod.id,
            description: prod.description,
            price: prod.price,
            image: prod.image
        }
    ))

    //console.log(newProducts)

    const handleClick = (item) =>  {
        console.log("card", item); 
        history.push({
            pathname: `/product/${item.id}`,
            state: {...item}
        //console.log("value", products)
        })
    }


    return (
    <div className="wrapper">
            <Select 
            options={newProducts}
            onChange={handleClick}
            className={SearchStyle.searchbar} 
            placeholder={'Search products...'}
            />
    </div>
    )
}
export default SearchBar
