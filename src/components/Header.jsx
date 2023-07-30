import { Badge, Button, Navbar } from "react-bootstrap";
import "../styles/header.css";

import Cart from "./Cart";

import { useContext, useState } from "react";
import CartContext from "../context/cartContext";

function Header() {

  const {totalQuantity} = useContext(CartContext)


  const [isCartOpened, setIsCartOpened] = useState(false);

  const handleCart = () => {
    setIsCartOpened(!isCartOpened);
  };

  return (
    <div className="header-main">
      <Navbar className="header-main" data-bs-theme="dark">
        <div className="header-left">
          <Navbar.Brand href="#home">g4 Clothing</Navbar.Brand>
        </div>
        <div className="header-right">
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Text>
              <Button variant="dark" onClick={handleCart}>
                {isCartOpened ? <span className="cartCloseButton">X</span> : (
                  <div>
                    <img className="cartButton" src="../static/cart-icon.png" width="30" height="30"/>
                    <Badge pill bg="warning" text="dark" className="cartButtonQuantity">
                      {totalQuantity}
                    </Badge>
                  </div>
                )}
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </div>
        {
        isCartOpened && (
          <Cart/>
        )
      }
      </Navbar>



    </div>
  );
}

export default Header;
