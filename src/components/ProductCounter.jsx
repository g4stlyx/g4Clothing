import {useContext} from 'react'
import "../styles/dashboard.css"
import ProductsContext from "../context/productsContext"

function ProductCounter() {

    const {productsWithQuantity,currentProducts} = useContext(ProductsContext)

  return (
        <div className="productCounter">
                    <p>
                        { 
                        currentProducts==0?(
                            productsWithQuantity.length
                        ):(
                            currentProducts.length
                        )
                        }
                    &nbsp;product(s) found.</p>
        </div>
  )
}

export default ProductCounter