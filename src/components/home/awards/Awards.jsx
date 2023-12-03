import React from 'react';
import AwardCss from './Awards.module.css';
import Heading from '../../common/Heading';
import { awards } from '../../data/Data';

const Awards = () => {
    return (
        <section className={`${AwardCss.awardSection} py-120 section-bg-two`} >
            <div className={`${AwardCss.awardSectionHeading} container`}>
                <Heading
                    title="Over 1,24,000+ Happy User Being With Us Still They Love Our Services"
                    subtitle="Our Awards"
                />
                <div className="row gy-4">
                    {
                        awards.map((awardItem, index) => (
                            <div className="col-lg-3 col-sm-6 col-xsm-6"  key={index}>
                                <div className={`${AwardCss.awardCard} text-center`}>
                                    <div className={`${AwardCss.awardCardIcon} flex-center`}>
                                        <span>{awardItem.icon}</span>
                                    </div>
                                    <h1 className='mt-3'>{awardItem.num}</h1>
                                    <p className='text-white fs-14 mb-0'>{awardItem.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Awards;