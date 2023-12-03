import React from "react";
import TeamCss from "./Team.module.css";
import Heading from "../../common/Heading";
import { team } from "../../data/Data";

const Team = () => {
  return (
    <section className="team py-120 section-bg">
      <div className="container">
        <Heading
          title="Our Featured Agents"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <div className="row gy-4">
          {
            team.map((val, index) => (
                <div className="col-lg-4 col-sm-6 col-xsm-6" key={index}>
                    <div className={TeamCss.teamCard}>
                        <span className="badge badge--info">{val.list} Listings</span>
                        <div className={TeamCss.teamCardDetails}>
                            
                            <div className={TeamCss.teamCardImg}>
                                <img src={val.cover} alt="" />
                                <i className="fa-solid fa-circle-check"></i>
                            </div>

                            <i className="fa fa-location-dot"></i>
                            <label className={`${TeamCss.teamCardAddress} text--body`}>{val.address}</label>
                            <h4 className="mt-1">{val.name}</h4>

                            <ul className={`${TeamCss.teamCardList} mt-4`}>
                                {
                                    val.icon.map((iconItem, index) => (
                                        <li key={index}>{iconItem}</li>
                                    ))
                                }
                            </ul>
                            <div className="button flex-between mt-4">
                                <a href="mailto:" className="btn btn-outline--base btn--sm">
                                    <span className="icon me-2"><i className="fa fa-envelope"></i></span>
                                    Message
                                </a>
                                <a href="tel:" className="btn btn--base btn--sm">
                                    <i className="fa fa-phone-alt"></i>
                                </a>
                            </div>
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

export default Team;
