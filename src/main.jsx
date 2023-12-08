import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Product Provider
import ProductProvider from './components/common/context/ProductContext.jsx'
import SidebarProvider from './components/common/context/SidebarContext.jsx'
import CartProvider from './components/common/context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
      </CartProvider>
  </SidebarProvider>
)
