import { createContext,useContext,useState } from "react";
import ProductsContext from "./productsContext"

const CartContext = createContext()

function CartProvider({children}) {

    const {productsWithQuantity} = useContext(ProductsContext)

    const [cartItems,setCartItems] = useState([])
    const [totalQuantity,setTotalQuantity] = useState(0)
    const [total,setTotal] = useState(0)

    let subtotal = 0

    const addToCart = (productInput) =>{

        productInput.quantity += 1
        setTotalQuantity(totalQuantity+1)

        if(productInput.quantity <= 1){
            setCartItems([...cartItems,productsWithQuantity.filter(product=>{
                return productInput.id === product.id
            })])
        }
        calculateTotal(productsWithQuantity)
    }

    const removeFromCart = productId =>{
        const updatedCartItems = cartItems.filter(items => {
            return !items.some(item => parseInt(productId) === parseInt(item.id));
        });
        setCartItems(updatedCartItems)
        

        cartItems.map(items=>{
            items.map(item=>{
                if(item.id===productId){
                setTotalQuantity(totalQuantity-item.quantity)
                item.quantity = 0
                }
            })
            calculateTotal(items)
        })

    }
    
    const calculateTotal = (arr)=>{
        arr.map(product=>{
            if(product.quantity*product.price != 0){
                subtotal = subtotal + (product.quantity*product.price)
            }
        })
        setTotal(subtotal)
    }
    
    const increaseQuantity = (productId)=>{
        cartItems.map(cartItem=>{
            cartItem.map(item=>{
                if(item.id===productId){
                    item.quantity +=1
                    setTotalQuantity(totalQuantity+1)
                }
            })
            calculateTotal(cartItem)
        })
    }

    const decreaseQuantity = (productId)=>{
        cartItems.map(cartItem=>{
            cartItem.map(item=>{
                if(item.id===productId && item.quantity>1){
                    item.quantity -=1
                    setTotalQuantity(totalQuantity-1)
                }
            })
            calculateTotal(cartItem)
        })
    }

    const sharedValuesAndMethods = {
        cartItems,
        setCartItems,
        totalQuantity,
        addToCart,
        removeFromCart,
        total,
        calculateTotal,
        increaseQuantity,
        decreaseQuantity
    }

    return(
        <CartContext.Provider value={sharedValuesAndMethods}>
            {children}
        </CartContext.Provider>
    )
}


export {CartProvider}
export default CartContext