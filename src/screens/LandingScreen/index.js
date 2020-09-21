/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';

// importing components
import SectionContainer from '../../components/SectionContainer/SectionContainer.js';
import DownArrow from '../../components/DownArrow/index.js';
import Button from '../../components/Button/Button.js';
import Footer from '../../components/Footer/Footer.js';

// importing styles
import "./styles.css";

// importing images
const MapLogo = require('../../assets/Map pin.png');
const v1 = require('../../assets/v1.jpg');

const LandingScreen = () => {

    useEffect(() => {
        // change color of navbar after a particular scroll height
        setInterval(()=>{
            if(window.scrollY>window.innerHeight/2-150){
                document.querySelector(".changeColorOnScroll").style = "background-color: #f9f6f7 !important; box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)"
            }
            if(window.scrollY<window.innerHeight/2-150){
                document.querySelector(".changeColorOnScroll").style = "background-color: transparent !important; box-shadow: none;"
            }
        }, 100);
    })

    return (
        <>
        {/* Navbar section */}
        <nav class="changeColorOnScroll">
            <div class="nav-wrapper">
                <a href="#landingSection" class="brand-logo" id="brandLogo">
                    Sutradhar India
                </a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons" style={{color: "#ff971d"}}>menu</i></a>
                <ul class="right hide-on-med-and-down correctRight">
                    <li><a href="#about" class="navItem">Our Goal</a></li>
                    <li><a href="#Products" class="navItem">Products</a></li>
                    <li><a href="#Ornaments" class="navItem">Ornaments</a></li>
                    <li><a href="#Containers" class="navItem">Containers</a></li>
                    <li><a href="#Furniture" class="navItem">Furniture</a></li>
                    <li><a href="#Partners" class="navItem">Partners</a></li>
                    <li><a href="#contactUs" class="navItem">Contact Us</a></li>
                </ul>
            </div>
        </nav>
        <ul class="sidenav" id="mobile-demo">
            <li><a href="#about" class="sidenav-close navItem">Our Work</a></li>
            <li><a href="#Products" class="sidenav-close navItem">Products</a></li>
            <li><a href="#Ornaments" class="sidenav-close navItem">Ornaments</a></li>
            <li><a href="#Containers" class="sidenav-close navItem">Containers</a></li>
            <li><a href="#Furniture" class="sidenav-close navItem">Furniture</a></li>
            <li><a href="#Partners" class="sidenav-close navItem">Partners</a></li>
            <li><a href="#contactUs" class="sidenav-close navItem">Contact Us</a></li>
        </ul>

        {/* landing section */}
        <SectionContainer
            reverse={true}
            id="landingSection"
            className="landingSectionContainerWrapper"
            leftClassName="landingSectionLogo"
            leftContent={() => <h1>Sutradhar India</h1>}
            rightClassName="landingContent"
            rightContent={() => (
                    <div class="landingP">
                        <span class="landingDoer">
                            <img class="locationImg" src={MapLogo} alt="Location Icon" />
                            <h4 className="landingSubHeading">Handicraft Centre of Rural &amp; Tribal Artisans</h4>
                            <p>
                            210 Rohini Complex,
                                <br/>
                            WA-121, Shakarpur, New Delhi-110092
                            </p>
                        </span>
                    </div>
                )
            }
        >
            <DownArrow navigateTo="#about" />
        </SectionContainer>

        {/* about section */}
        <SectionContainer
            id="about"
            leftClassName=""
            leftContent={() => (
                <div class="sectionContent">
                    <h3>Empowering Craftsmen and Changing Lives</h3>
                    <p>
                    Sutradhar India is a social enterprise to help rural and tribal artisans of India to preserve
                    their rich art &amp; craft, and provide them a sustainable livelihood. It is a collective effort of
                    artisans, designers and social activists to promote and revive the fast extinguishing art &amp;
                    craft of rural India. We also conduct training workshops for artisans from time to time to
                    improve their skills in new designs as per the new emerging market demands. The income
                    earned through this enterprise goes into improving the living standard and welfare of
                    artisans and their families.
                    </p>
                    <Button>Download Brochure</Button> 
                </div>
            )}
            rightClassName="sectionImage"
            rightContent={() => <img src={v1} alt="Sutradhar India" />}
        >
        </SectionContainer>

        {/* Our Products */}
        <SectionContainer
            id="Products"
            leftClassName="sectionImage"
            leftContent={() => <img src={require('../../assets/v2.jpg')} alt="Sutradhar India" />}
            rightClassName=""
            rightContent={() => (
                <div class="sectionContent">
                    <h3>Our Products</h3>
                    <p>
                    We manufacture, supply and export handicraft made in natural grass, paper, fabric and
                    wood available in various intricate designs, unique patterns and beautiful colour
                    combinations. Our products include Dolls, Jewellery, handbags, wall hangings, coasters,
                    baskets, caps, furniture and other house decorating objects. All our products are nature
                    friendly and manufactured without using any hazardous chemicals.
                    </p>
                    <Button href="/shop">Shop Now</Button> 
                </div>
            )}
        >
        </SectionContainer>

        {/* Ornaments */}
        <div class="showcaseContainer" id="Ornaments" >
            <div class="showcaseTitle">
                <h3>Only Some Ornaments</h3>
            </div>
            <div class="showcaseBox">
                <img class="showcaseImage" src={require('../../assets/Handicraft/Ornaments/IMG-20200214-WA0076.jpg')} alt="Sutradhar India Ornaments" />
                <img class="showcaseImage" src={require('../../assets/Handicraft/Ornaments/IMG-20200214-WA0077.jpg')} alt="Sutradhar India Ornaments" />
                <img class="showcaseImage" src={require('../../assets/Handicraft/Ornaments/IMG-20200214-WA0079.jpg')} alt="Sutradhar India Ornaments" />
                <img class="showcaseImage" src={require('../../assets/Handicraft/Ornaments/IMG-20200214-WA0094.jpg')} alt="Sutradhar India Ornaments" />
                <img class="showcaseImage" src={require('../../assets/Handicraft/Ornaments/IMG-20200214-WA0135.jpg')} alt="Sutradhar India Ornaments" />
            </div>
            <div class="showcaseBox" >
                <img class="showcaseImage" src={require('../../assets/Handicraft/Ornaments/IMG-20200214-WA0180.jpg')} alt="Sutradhar India Ornaments" />
                <img class="showcaseImage" src={require('../../assets/Handicraft/Ornaments/IMG-20200214-WA0182.jpg')} alt="Sutradhar India Ornaments" />
            </div>
        </div>

        {/* Past Collaboration */}
        <div class="showcaseContainer" id="Containers" >
            <div class="showcaseTitle">
                <h3>Few Grass Containers</h3>
            </div>
            <div class="showcaseBox">
                <img class="showcaseImage" src={require('../../assets/Handicraft/Seasonal Grass/grass-basket.jpg')} alt="Sutradhar India Grass Utils" />
                <img class="showcaseImage" src={require('../../assets/Handicraft/Seasonal Grass/grass-plate-yellow-color.jpg')} alt="Sutradhar India Grass Utils" />
                <img class="showcaseImage" src={require('../../assets/Handicraft/Seasonal Grass/grass-tray.jpg')} alt="Sutradhar India Grass Utils" />
                <img class="showcaseImage" src={require('../../assets/Handicraft/Seasonal Grass/IMG_0077.jpg')} alt="Sutradhar India Grass Utils" />
            </div>
            <div class="showcaseBox">
                <img class="showcaseImage" src={require('../../assets/Handicraft/Seasonal Grass/PAGE16-1024x847.jpg')} alt="Sutradhar India Grass Utils" />
                <img class="showcaseImage" src={require('../../assets/Handicraft/Seasonal Grass/PAGE8-1024x847.jpg')} alt="Sutradhar India Grass Utils" />
            </div>
        </div>

        {/* Past Collaboration */}
        <div class="showcaseContainer" id="Furniture" >
            <div class="showcaseTitle">
                <h3>Yes! Even Furniture</h3>
            </div>
            <div class="showcaseBox">
                <img class="showcaseImage" src={require('../../assets/Handicraft/Furniture/IMG-20191118-WA0014.jpg')} alt="Sutradhar India Furniture" />
                <img class="showcaseImage" src={require('../../assets/Handicraft/Furniture/IMG-20191118-WA0015.jpg')} alt="Sutradhar India Furniture" />
                <img class="showcaseImage" src={require('../../assets/Handicraft/Furniture/IMG-20191118-WA0025.jpg')} alt="Sutradhar India Furniture" />
            </div>
        </div>

        {/* about us section */}
        <SectionContainer
            id="Partners"
            leftClassName="sectionImage"
            leftContent={() => <img src={require('../../assets/v2.jpg')} alt="Sutradhar India" />}
            rightClassName=""
            rightContent={() => (
                <div class="sectionContent">
                    <h3>Our Partners</h3>
                    <p>
                    Our partners include retail and wholesale domestic &amp; foreign buyers, interior designers,
                    corporate houses and government agencies. We take upmost care of quality control and
                    timely delivery of consignments. We also get support from various national and
                    international agencies engaged in development and welfare activities.
                    </p>
                </div>
            )}
        >
        </SectionContainer>

        <Footer />
        </>
    );
}

export default LandingScreen;
