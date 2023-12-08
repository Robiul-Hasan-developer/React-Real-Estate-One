import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext(); 

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]); 
    
    // Item Amount for header Cart
    const [itemAmount, setItemAmount] = useState(0); 
    
    // Total Amount of all Cart
    const [totalAmount, setTotalAmount] = useState(0); 
    
    const addToCart = (product, id) => {
        const newItem = {...product, amount: 1}; 
        // console.log(newItem);

        const cartItem = cart.find((item) => {
            return item.id === id
        }); 
        // console.log(cartItem);

        // if cart item is already in the cart
        if(cartItem) {
            const newCart = [...cart].map((item) => {
                if(item.id === id) {
                    return {...item, amount: cartItem.amount + 1 }; 
                } else {
                    return item;
                }
            }); 
            setCart(newCart); 
        } else {
            setCart([...cart, newItem]); 
        }
    }
    // console.log(cart);

    // Increment Amount
    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id
        }); 
        const newItem = addToCart(cartItem, id); 
    }

    // decrement Amount
    const decreaseAmount = () => {

    }

    // Remove Shopping Cart Item From Sidebar
    const shoppingItemRemove = (id) => {
        const remainingCart = cart.filter((item) => 
            item.id !== id
        ); 
        setCart(remainingCart)
    }

    // Remove Shopping Cart Item From Sidebar
    const removeAllCartItem = () => {
        setCart([])
    }

    // Item Amount
    useEffect(() => {
        if(cart) {
            const amountOfItem = cart.reduce((prevItem, currentItem) => {
                return prevItem + currentItem.amount; 
            }, 0)
            setItemAmount(amountOfItem)
        }
    }, [cart]); 

    // Cart Total Amount
    useEffect(() => {
        if(cart) {
            const totalAmnt = cart.reduce((prevAmount, currentAmount) => {
                const price = parseFloat(currentAmount.price.replace(/,/g, '')); // Remove commas
                return prevAmount + price * currentAmount.amount;
            }, 0);
                setTotalAmount(totalAmnt);
        }
    }, [cart]); 

    
    return (
        <>
            <CartContext.Provider value={{ cart, setCart, addToCart, increaseAmount, decreaseAmount, shoppingItemRemove, removeAllCartItem, itemAmount, totalAmount }}>
                { children }
            </CartContext.Provider>
        </>
    );
};

export default CartProvider;