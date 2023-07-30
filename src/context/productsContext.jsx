import { createContext,useState } from "react";
import axios from "axios"

const ProductsContext = createContext()

function ProductProvider({children}){

    const [products,setProducts] = useState([])
    const [currentProducts,setCurrentProducts] = useState([])

    const productsWithQuantity = products.map(productsInner=>(
        {...productsInner, quantity:0}
    ))

    const sizeHandler = (size)=>{
        const productsWithWantedSize = productsWithQuantity.filter(product=>{
            return product.availableSizes.includes(size)
        })
        setCurrentProducts(productsWithWantedSize)
    }

    const fetchProducts = async()=>{
        const response = await axios.get("http://localhost:3000/products")
        setProducts(response.data)
    }

    const sharedValuesAndMethods = {
        products,
        productsWithQuantity,
        fetchProducts,
        currentProducts,
        sizeHandler
    }

    return(
        <ProductsContext.Provider value={sharedValuesAndMethods}>
            {children}
        </ProductsContext.Provider>
    )


}

export {ProductProvider}
export default ProductsContext