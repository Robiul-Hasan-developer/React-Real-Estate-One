import React from 'react';
import Headerr from '../common/header/Headerr';
import Breadcrumb from '../common/Breadcrumb';
import image from '../images/pricing.jpg';
import PriceCard from './../home/price/PriceCard';

const Pricing = () => {
    return (
        <>
        <Headerr/>
        <Breadcrumb title="No Extra Fees. Friendly Support" subtitle="30 days money back guarantee" cover={image}/>
            <section className='service py-120'>
                <div className="container">
                    <PriceCard/>
                </div>
            </section>
        </>
    );
};

export default Pricing;