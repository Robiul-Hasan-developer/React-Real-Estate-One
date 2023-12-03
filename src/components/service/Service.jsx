import React from 'react';
import Headerr from '../common/header/Headerr';
import Breadcrumb from '../common/Breadcrumb';
import FeaturedCard from '../home/featured/FeaturedCard';
import image from '../images/services.jpg';

const Service = () => {
    return (
        <>
        <Headerr/>
        <Breadcrumb title="Services -All Services" subtitle="Services" cover={image}/>
            <section className='service py-120'>
                <div className="container">
                    <FeaturedCard/>
                </div>
            </section>
        </>
    );
};

export default Service;