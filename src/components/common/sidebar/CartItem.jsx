import React, { useContext } from 'react';
import CartItemCss from './CartItem.module.css';
import { CartContext } from '../context/CartContext';

const CartItem = ({ cartItem }) => {

    // console.log(cartItem);
    const {id, amount, cover, price, name} = cartItem; 
    
    const {increaseAmount, decreaseAmount, shoppingItemRemove} = useContext(CartContext); 
    

    const formattedPrice = parseFloat(price.replace(/,/g, ''));
    const total = amount * formattedPrice;
    const formattedTotal = total.toFixed(2); 

    return (
        <>
             <div className={`${CartItemCss.shoppingItem}`}>
                <div className={`d-flex align-items-center gap-2 ${CartItemCss.shoppingItemLeft}`}>
                    <div className={`${CartItemCss.shoppingItemThumb}`}>
                         <a href={`/product/${id}`} className='d-block h-100'>
                            <img src={cover} alt="" className='fit-image' />
                         </a>
                    </div>
                    <div className={`${CartItemCss.shoppingItemContent}`}>
                        <h6 className={`fs-14 fw-semibold mb-1 ${CartItemCss.shoppingItemTitle}`}>
                             <a href={`/product/${id}`} className={`${CartItemCss.shoppingItemTitleLink}`}> { name } </a>
                         </h6>       
                        <div className="flex-align mt-3 gap-3">
                            
                            <div className={`border rounded ${CartItemCss.countItem}`}>
                                <button type="button" onClick={ () => decreaseAmount(id)} className={`${CartItemCss.countItemDecrement} p-0 bg-transparent border-0`}> <i className="fas fa-minus"></i> </button>
                                <span className={`${CartItemCss.countItemCount}`}> { amount } </span>
                                <button type="button" onClick={ () => increaseAmount(id)} className={`${CartItemCss.countItemIncrement} p-0 bg-transparent border-0`}> <i className="fas fa-plus"></i></button>
                            </div>

                            <span className={`fs-14 ${CartItemCss.shoppingItemPrice}`}>${price}</span>    
                        </div>
                    </div>
                </div>
                <div className={`${CartItemCss.shoppingItemRight}`}>
                    <button type="button" onClick={()=> shoppingItemRemove(id)} className={`${CartItemCss.shoppingItemRemove} p-0 bg-transparent border-0`}> <i className="fas fa-times"></i> </button>
                    <span className={`${CartItemCss.shoppingItemTotal}`}> ${formattedTotal.toLocaleString()} </span>
                </div>
            </div>   
        </>
    );
};

export default CartItem;