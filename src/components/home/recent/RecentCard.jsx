import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { list } from '../../data/Data';
import RecentCss from './Recent.module.css'; 
import AddWishList from './AddWishList';
import { CartContext } from '../../common/context/CartContext';
import { toast } from 'react-toastify';

const RecentCard = ({ product }) => {

    const {cart, addToCart} = useContext(CartContext); 
    
    // console.log(product);
    const {id, cover, category, location, name, price, type} = product; 

    const handleAddToCart = () => {
        addToCart(product, id)
        toast.success('Item Added to Cart Successfully!', { autoClose: 500, position: "top-center" } ); 
    }

    return (
        <>
            <div className="col-lg-4 col-sm-6">
                <div className={`${RecentCss.recentCard} shadow rounded overflow-hidden`}>
                    <div className='img'>
                        <img src={cover} alt='' />
                    </div>
                    <div className='text p-4'>
                        <div className='category flex-between'>
                        <span style={{ 
                            background: category === "For Sale" ? "#25b5791a":"#ff98001a", 
                            color: category === "For Sale" ? "#25b579" : "#ff9800"
                        }} 
                            className={RecentCss.categoryBadge}
                        >{category}</span>

                        <button type="button"
                            className={`p-0 fs-20 border-0 ${RecentCss.addToCart} `}
                            onClick={handleAddToCart}
                            >
                            <i className="fa fa-shopping-cart"></i>
                        </button>

                        </div>
                        <h5 className='mt-2'>
                            {name}
                        </h5>
                        <p className='mb-0 fs-14'> <span className="me-1"><i className="fas fa-map-marker-alt"></i></span> {location} </p>
                    </div>
                    <div className='button p-3 flex-between border-top'>
                        <div>
                            <button className='btn btn--base pill'>${price}</button> <label htmlFor=''>/sqft</label>
                        </div>
                        <span>{type}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentCard;