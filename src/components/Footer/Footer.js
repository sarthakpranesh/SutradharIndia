import React from 'react';

import SectionContainer from '../SectionContainer/SectionContainer.js';

import "./footer.css";

const Footer = () => {

    return (
        <SectionContainer
            id="contactUs"
            leftClassName=""
            leftContent={() => (
            <div class="FooterWrapper">
                <h3>Contact Us</h3>
                <p>Director Ramesh Pranesh</p>
                <p>Email: <a href="mailto:sutradharindiatrust@gmail.com">sutradharindiatrust@gmail.com</a></p>
                <p>Mobile: <a href="tel:9810709170">9810709170</a></p>
            </div>
            )}
        >
        </SectionContainer>
    );
}

export default Footer;
