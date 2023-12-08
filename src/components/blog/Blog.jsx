import React, { useContext } from 'react';
import Headerr from '../common/header/Headerr';
import Breadcrumb from '../common/Breadcrumb';
import image from '../images/services.jpg';
import RecentCard from '../home/recent/RecentCard';
import { ProductContext } from '../common/context/ProductContext';

const Blog = () => {

    const {products} = useContext(ProductContext); 
    
    return (
        <>
        <Headerr/>
        <Breadcrumb title="Blog Grid - Our Blogs" subtitle="Blog" cover={image}/>
            <section className='blog py-120'>
                <div className="container">
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
        </>
    );
};

export default Blog;