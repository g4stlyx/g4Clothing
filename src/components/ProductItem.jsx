import { Button, Card } from "react-bootstrap"
import {useContext} from "react"
import CartContext from "../context/cartContext"


function ProductItem({product}) {

  const {addToCart} = useContext(CartContext)
  
  return (
    <Card style={{ width: '18rem' }}>
      <div>
      <img width="100%" src={`../../static/products/${product.sku}-1-product.webp`} />
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text style={{marginBottom:"50px"}}>
          {product.currencyFormat} {product.price}
        </Card.Text>
        <Button onClick={()=>addToCart(product)} className="addToCartButton" variant="dark">Add to cart</Button>
      </Card.Body>
    </Card>
  )
}




export default ProductItem