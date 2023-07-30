import { Badge, Button } from "react-bootstrap";
import "../styles/cart.css";

import CartContext from "../context/cartContext"
import { useContext } from "react"

import CartItem from "./CartItem.jsx"

function Cart() {
  const {cartItems,totalQuantity,total} = useContext(CartContext)

  const checkout = ()=>{
    alert(`Checkout - Subtotal: $ ${total}`)
  }

  return (
    <div className="cart-container">
      <div className="cart-main">
        <div className="cart-title">
          <img className="cartImg" src="../static/cart-icon.png" />
          <Badge pill bg="warning" text="dark" className="cartQuantity">
            {totalQuantity}
          </Badge>
          <p>Cart</p>
        </div>
        <hr />

        <div className="cart-items">
            {
              cartItems.map(cartItem=>cartItem.map(item=>{
                return(
                  <CartItem key={item.id} item={item} />
                )
              }))
              
            }
        </div>

        <div className="cart-total">
          <div>Total</div>
          <div className="cart-total-right">$ {total}</div>
        </div>

        <div className="checkout" >
            <Button onClick={checkout} className="checkout-button" variant="dark" style={{width:"80%"}}>Checkout</Button>
        </div>
        
      </div>
    </div>
  );
}

export default Cart;
