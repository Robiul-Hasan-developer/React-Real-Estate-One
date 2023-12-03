import React, { useState } from 'react';
import FaqCss from './Faq.module.css';
import Heading from '../../common/Heading';
import Faq from './Faq';
import { faqsData } from '../../data/Data';

const Faqs = () => {
    
    return (
        <section className={`${FaqCss.faqSection} py-120 section-bg`}>
            <div className="container">
                <Heading title="FAQ'S" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>

                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        {
                            faqsData.map((faq, index) => <Faq key={index} {...faq} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faqs;