import React, {useState, useEffect} from "react"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Menswear from "./components/Menswear"
import Womenswear from "./components/Womenswear"
import Electronics from "./components/Electronics"
import Jewelery from "./components/Jewelery"
import ProductPage from './components/ProductPage'
import { BrowserRouter, Route } from 'react-router-dom'
import ProductsContext from "./Contexts/ProductContext"


function App() {

  //sets the state
  const [products, setProducts] = useState([])

  //fetches data, converts to json and resets the state
  const fetchProducts = () => {
      let url = 'https://fakestoreapi.com/products'
      fetch(url)
        .then(response => response.json())
        .then(data => {
          //this.storeProducts(data)
          setProducts(data)
          //console.log('fetch',data)
          
        })
        .catch(firstGetError => console.log(firstGetError))
    }
// Waits for components to mount then calls fetch
    useEffect(fetchProducts, [])
    
    useEffect(() => console.log("window2", process.env.PUBLIC_URL), [])

   return ( 
        <ProductsContext.Provider value={{products, setProducts}}>
        
          <BrowserRouter basename={process.env.PUBLIC_URL}>

            <Route exact path="/" component={Home} />
            <Route path="/product/:id" component={ProductPage}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/menswear" component={Menswear}/>
            <Route exact path="/womenswear" component={Womenswear}/>
            <Route exact path="/electronics" component={Electronics}/>
            <Route exact path="/jewelery" component={Jewelery}/> 
          
          </BrowserRouter>

        </ProductsContext.Provider>
    )
}

export default App
