import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import AboutCss from './About.module.css';
import image from '../images/about.jpg';
import Headerr from '../common/header/Headerr';
import Footer from '../common/footer/Footer';
import Heading from '../common/Heading';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
        <Headerr/>
            <Breadcrumb subtitle="About Us" title="About Us - Who We Are?" cover={image}/>
            <section className={`${AboutCss.aboutSection} py-120`}>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6">
                            <div className="about-content">
                                <Heading title="Our Agency Story" subtitle="Check out our company story and work process"/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                <Link to="/" className='btn btn--base pill btn--lg'> Read More About Us </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-thumb overflow-hidden rounded">
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <Footer/>
        </>
    );
};

export default About;