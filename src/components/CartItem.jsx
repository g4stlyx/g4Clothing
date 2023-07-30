import { Button, Card } from "react-bootstrap"
import {useContext} from "react"
import CartContext from "../context/cartContext"

function CartItem({item}) {

  const {removeFromCart,increaseQuantity,decreaseQuantity} = useContext(CartContext)

  return (
    <Card className="cart-item">
      <img src={`../../static/products/${item.sku}-1-cart.webp`} />
      <Card.Body>
        <div className="cart-text-left">
          <Card.Title style={{fontSize:"15px"}}>{item.title}</Card.Title>
          <Card.Text style={{fontSize:"15px"}}>
            Quantity: {item.quantity}
          </Card.Text>
        </div>
        <div className="cart-text-right">
          <Button 
          variant="dark" 
          className="removeFromCartButton" 
          onClick={()=>removeFromCart(item.id)}>
            X
          </Button>
          <Card.Text style={{marginLeft:"30px",color:"#C8AF15"}}>
            {item.currencyFormat} {item.price}
          </Card.Text>
          <div className="reducerButtons">
            <div className={item.quantity<2 ? "colorGray": undefined}>
            <Button onClick={()=>decreaseQuantity(item.id)} className={item.quantity<2 ? "decreaseQuantityGray" : "increaseDecreaseQuantity"}>-</Button>
            </div>
            <Button onClick={()=>increaseQuantity(item.id)} className="increaseDecreaseQuantity">+</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CartItem