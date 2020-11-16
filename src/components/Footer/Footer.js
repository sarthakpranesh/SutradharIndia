import React from 'react';

import SectionContainer from '../SectionContainer/SectionContainer.js';
import Facebook from '../Svgs/facebook/index'
import Twitter from '../Svgs/Twitter/index'
import Github from '../Svgs/Github/index'
import Insta from '../Svgs/Instagram/index'

import "./footer.css";

const Footer = () => {

    return (
        <SectionContainer
            id="contactUs"
            className="FooterSectionWrapper"
            leftContent={() => (
            <div className="FooterWrapperLeft">
                <h3>Contact Us</h3>
                <iframe className="FooterWrapperLeftMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.286395094721!2d77.27715120468935!3d28.625470043795964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35250000001%3A0x6ef294fd1846cdf!2sSarthak!5e0!3m2!1sen!2sin!4v1605513533694!5m2!1sen!2sin" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            )}
            rightContent={() => (
                <div className="FooterWrapperRight">
                    <p>Director Ramesh Pranesh</p>
                    <p>Email: <a href="mailto:sutradharindiatrust@gmail.com">sutradharindiatrust@gmail.com</a></p>
                    <p>Mobile: <a href="tel:9810709170">9810709170</a></p>
                    <div className="FooterWrapperRightSocial">
                        <a target="_blank" href="https://www.facebook.com/Sutradhar-India-110223247200317/">
                            <Facebook />
                        </a>
                        <a target="_blank" href="#">
                            <Twitter />
                        </a>
                        <a target="_blank" href="#">
                            <Github />
                        </a>
                        <a target="_blank" href="#">
                            <Insta />
                        </a>
                    </div>
                </div>
            )}
        >
        </SectionContainer>
    );
}

export default Footer;
