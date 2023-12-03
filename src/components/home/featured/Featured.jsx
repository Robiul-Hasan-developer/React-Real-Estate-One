import React from 'react';
import FeaturedCss from './Featured.module.css';
import Heading from '../../common/Heading';
import FeaturedCard from './FeaturedCard';

const Featured = () => {
    return (
        <section className={`${FeaturedCss.heroContainer} section-bg py-120`}>
            <div className="container">
                <Heading title="Featured Property Types" subtitle="Find All Type of Property."/>
                <FeaturedCard/>
            </div>
        </section>
    );
};

export default Featured;