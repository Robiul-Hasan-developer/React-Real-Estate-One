import React, { useContext } from 'react';
import SidebarCss from './Sidebar.module.css';
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { ToastContainer, toast } from 'react-toastify';

const Sidebar = () => {

    const {isOpen, setIsOpen, handleRemove} = useContext(SidebarContext); 
    const {cart, setCart, removeAllCartItem, itemAmount, totalAmount } = useContext(CartContext); 

    const handleRemoveAllCartItem = () => {
        removeAllCartItem(); 
        toast.success('All Cart Item Deleted Successfully!', { autoClose: 1000 }); 
    }

    return (
        <div className={`d-flex flex-column justify-content-between ${SidebarCss.sidebar} ${isOpen ? SidebarCss.show: "" }`} >
            <div>
                <div className="flex-between gap-2 pb-3 mb-3 border-bottom">
                    <span className={`fs-13 ${SidebarCss.shoppingTitle}`}> Shopping Bag  
                    <span className={`text--base fw-bold ${SidebarCss.shoppingCount}`}>&nbsp; ({itemAmount})</span> 
                    </span>
                    <button type="button" onClick={handleRemove} className={`p-0 border-0 bg-transparent ${SidebarCss.sidebarClose}`}><i className="fas fa-times"></i></button>
                </div>

                <div className={`${SidebarCss.shoppingItems}`}>
                     {
                        cart.map((cartItem, index) => {
                            return (
                                <CartItem cartItem={cartItem} key={index} />
                            )
                        })
                     }
                </div>
            </div>

            <div className='flex-between gap-2 border-top pt-3 mt-3'>
                <strong className='text-dark fs-15'>Total Amount: ${totalAmount} </strong>
        
                <button type="button" onClick={handleRemoveAllCartItem} className='p-2 fs-13 lh-1 bg-danger bg-opacity-10 text-danger rounded border-0'> <i className="fas fa-trash-alt"></i> </button>
            </div>
            
        </div>
    );
};

export default Sidebar;