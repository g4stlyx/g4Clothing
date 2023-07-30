import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"

import {ProductProvider} from "./context/productsContext.jsx"
import {CartProvider} from "./context/cartContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <ProductProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductProvider>
  //</React.StrictMode>,
)
