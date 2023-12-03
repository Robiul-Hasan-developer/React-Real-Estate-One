import React from 'react';
import { featured } from '../../data/Data';

import FeaturedCss from './Featured.module.css';

const FeaturedCard = () => {
    return (
        <>
           <div className="grid5">
            {
                featured.map((items, index)=> (
                    <div className={FeaturedCss.featuredCard} key={index}>
                        <img src={items.cover} className={FeaturedCss.featuredCard__icon} alt="Icon" />
                        <h5 className={FeaturedCss.featuredCard__title}>{items.name}</h5>
                        <p className={FeaturedCss.featuredCard__total}>{items.total}</p>
                    </div>
                ))
            }
            </div>    
        </> 
    );
};

export default FeaturedCard;