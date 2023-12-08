import React, { createContext, useEffect, useState } from 'react';
import { list } from '../../data/Data';

export const ProductContext = createContext(); 

const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([]); 

     useEffect(() => {
        const fetchProducts = async () => {
            const response = list; 
            setProducts(response)
        }
        fetchProducts(); 
    }, []); 
    
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;