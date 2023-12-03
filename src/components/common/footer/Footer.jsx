import React from "react";
import { footer } from "../../data/Data";
import { Link } from "react-router-dom";
import Subscription from "./Subscription";

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex-between">
            <div className="text">
              <h2>Do You Have Questions ?</h2>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
            <div className="footer-item-wrapper">
            <div className="footer-item">
                <div className="logo">
                    <img src="../../../../public/images/logo.png" className="mb-3" alt="Logo " />
                    <h5>Do You Need Help With Anything?</h5>
                    <p className="mt-0 mb-5">
                        Receive updates, hot deals, tutorials, discounts sent straignt
                        in your inbox every month
                    </p>

                    <Subscription/>
                </div>
            </div>
                {
                    footer.map((val, index) => (
                        <div className="footer-item" key={index}>   
                            <h5 className="mb-4">{val.title}</h5>
                            <ul>
                                {
                                    val.text.map((items, subIndex) => (
                                        <li key={subIndex}> <Link>{items.list}</Link> </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
      </footer>
      <div className="legal">
      <p className="mb-0 mt-0">&copy; {new Date().getFullYear()} RentUP. Designed By <span className="text-white fw-semibold">Front-End Developer Robiul Hasan</span>.</p>

      </div>
    </>
  );
};

export default Footer;
