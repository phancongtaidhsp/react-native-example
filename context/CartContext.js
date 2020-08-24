import React, { useState } from 'react'

export const CartContext = React.createContext();

export function CartProvider(props) {

  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
      index = cartItems.findIndex(cartItem => cartItem.item.id === product.id);
      if(index<0){
        setCartItems([...cartItems,{item: product, quantity: 1}])
      }
      else{
        const cartItem = {item: cartItems[index].item, quantity: cartItems[index].quantity+1};
        setCartItems([...cartItems.slice(0,index),cartItem,...cartItems.slice(index+1)]);
      }
  }

  function removeItem(product) {
    index = cartItems.findIndex(cartItem => cartItem.item.id === product.id);
    if(cartItems[index].quantity === 1){
      setCartItems([...cartItems.slice(0,index),...cartItems.slice(index+1)]);
    }
    else{
      const cartItem = {item: cartItems[index].item, quantity: cartItems[index].quantity-1};
      setCartItems([...cartItems.slice(0,index),cartItem,...cartItems.slice(index+1)]);
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem }}>
      {props.children}
    </CartContext.Provider>
  )
}