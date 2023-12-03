import React from "react";
import LocationCss from "./Location.module.css";
import { location } from "../../data/Data";
import Heading from "../../common/Heading";
    
const Location = () => {
  return (
    <section className={`${LocationCss.LocationSection} py-120`}>
      <div className="container">
        <Heading
            title="Explore By Location"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <div className="row gy-4">
            {
                location.map((item, index) => (
                <div className="col-lg-4 col-sm-6 col-xsm-6"  key={index}>
                    <div className={LocationCss.locationCard}>
                        <img src={item.cover} alt="Image" />
                        <div className={LocationCss.locationCardOverlay}>
                        <h5>{item.name}</h5>
                            <p>
                                <label>{item.Villas}</label>
                                <label>{item.Offices}</label>
                                <label>{item.Apartments}</label>
                            </p>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default Location;
