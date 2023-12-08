import React, { useContext } from 'react';
import Heading from '../../common/Heading';
import RecentCard from './RecentCard';

import { ProductContext } from '../../common/context/ProductContext';


const Recent = () => {
    const {products} = useContext(ProductContext); 

    // console.log(products);
    return (
        <section className='py-120'>
            <div className="container">
                <Heading title="Recent Property Listed" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."/> 

                <div className="row gy-4"> 
                    {
                        products.map((product, index)=> {
                            return (
                                <RecentCard product={product} key={product.id}/>
                            )
                        })
                    }
                 </div>
            </div>
        </section>
    );
};

export default Recent;