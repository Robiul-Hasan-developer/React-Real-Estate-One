import React, { useState } from 'react';
import FaqCss from './Faq.module.css';

const Faq = ({ id, title, desc }) => {
    const [toggle, setToggle] = useState(false);    

    return (
        <article  className={`${FaqCss.faqItem}`}>
            <div className={FaqCss.faqButton} onClick={()=>{setToggle(!toggle)}}>
                <h4 className={`${FaqCss.faqTitle} ${toggle ? FaqCss.active : ""}`}>{title}</h4>
                <button className={`${FaqCss.faqIcon} p-0 bg-transparent`}> {toggle ? <i className='fas fa-minus text--base'></i> : <i className='fas fa-plus'></i>} </button>
            </div>
            { toggle &&  <p className={FaqCss.faqDesc} >{desc}</p>}
        </article>
    );
};

export default Faq;

