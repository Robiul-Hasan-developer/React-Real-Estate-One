import React from "react";
import { price } from "../../data/Data";
import PriceCss from './Price.module.css';

const PriceCard = () => {
    
  return (
    <>
        <div className="row gy-4 align-items-center">
        {
            price.map((item, index) => {
                const isHighlited = item.best === "Best Value";
                const isStandardPlan = item.plan === 'Standard'; 

                return (
                    <div className="col-lg-4 col-sm-6"  key={index} >
                    <div className={`${PriceCss.PriceCard} shadow`}>

                        <button 
                        className={`btn btn--info btn--sm mb-3 ${isHighlited ? "d-inline-block" : "d-none"}`}>
                        {item.best}</button>
                        
                        <h4 className="mb-2">{item.plan}</h4>
                        <h1 className="mb-0">
                            <span>$</span>
                            {item.price}
                        </h1>
                        <p className="text--body fs-14">{item.ptext}</p>
                        <ul className="mt-4">
                        {item.list.map((val, subIndex) => {
                            const { icon, text, change } = val;
                            return (
                            <li key={subIndex}>
                                <label
                                style={{
                                    background:
                                    change === "color" ? "#dc35451f" : "#27ae601f",
                                    color: change === "color" ? "#dc3848" : "#27ae60",
                                }}
                                >
                                {icon}
                                </label>
                                <p className="mb-0 fs-15">{text}</p>
                            </li>
                            );
                        })}
                        </ul>

                        <button
                        className={`btn btn-outline--base pill ${isStandardPlan ? PriceCss.activePlan : ''}`}
                        >
                        Start {item.plan}
                        </button>
                    </div>
                </div>
                )
            })
        }
        </div>
       
    </>
  );
};

export default PriceCard;
