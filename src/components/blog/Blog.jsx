import React from 'react';
import Headerr from '../common/header/Headerr';
import Breadcrumb from '../common/Breadcrumb';
import image from '../images/services.jpg';
import RecentCard from '../home/recent/RecentCard';

const Blog = () => {
    return (
        <>
        <Headerr/>
        <Breadcrumb title="Blog Grid - Our Blogs" subtitle="Blog" cover={image}/>
            <section className='blog py-120'>
                <div className="container">
                    <RecentCard/>
                </div>
            </section>
        </>
    );
};

export default Blog;