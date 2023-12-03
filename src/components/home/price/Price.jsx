import React from 'react';
import Heading from '../../common/Heading';
import PriceCard from './PriceCard';
import PriceCss from './Price.module.css';

const Price = () => {
    return (
        <section className='price-section py-120'>
            <div className="container">
                <Heading title="Select Your Package" subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"/>
                <PriceCard/>
            </div>
        </section>
    );
};

export default Price;