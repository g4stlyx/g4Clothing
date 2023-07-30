import { useContext, useEffect } from "react"

import { Col } from "react-bootstrap"
import "../styles/dashboard.css"

import ProductItem from "./ProductItem"
import ProductsContext from "../context/productsContext"

function Dashboard() {

    const {fetchProducts,productsWithQuantity,currentProducts,sizeHandler} = useContext(ProductsContext)

    useEffect(() => {
        fetchProducts()
    },[])

    return (
        <div className="dashboard">

            <Col xs={3} className="sizes">
                    <h3 className="sizeTitle">Sizes:</h3>
                    <div className="sizeButtons">
                        <button onClick={()=>sizeHandler("XS")}>XS</button>
                        <button onClick={()=>sizeHandler("S")}>S</button>
                        <button onClick={()=>sizeHandler("M")}>M</button>
                        <button onClick={()=>sizeHandler("ML")}>ML</button>
                        <button onClick={()=>sizeHandler("L")}>L</button>
                        <button onClick={()=>sizeHandler("XL")}>XL</button>
                        <button onClick={()=>sizeHandler("XXL")}>XXL</button>
                    </div>
            </Col>

            <Col xs={9} className="products">
                      
                {
                    currentProducts.length===0 ?(
                        productsWithQuantity.map(product=>{
                            return(
                                 <ProductItem key={product.id} product={product}/>
                             )
                        })
                    ):(
                        currentProducts.map(product=>{
                            return(
                                 <ProductItem key={product.id} product={product}/>
                             )
                        })
                        
                    )
                }

            </Col>

        </div>
    )
}

export default Dashboard