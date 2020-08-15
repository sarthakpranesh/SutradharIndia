/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';

// importing components
import DownArrow from '../../components/DownArrow/index.js';
import Button from '../../components/Button/index.js';

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
                <a href="#landingDiv" class="brand-logo">
                    SutradharIndia
                </a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons" style={{color: "#ff971d"}}>menu</i></a>
                <ul class="right hide-on-med-and-down correctRight">
                    <li><a href="#about" class="navItem">Our Work</a></li>
                    <li><a href="#Ornaments" class="navItem">Ornaments</a></li>
                    <li><a href="#Containers" class="navItem">Containers</a></li>
                    <li><a href="#Furniture" class="navItem">Furniture</a></li>
                    <li><a href="#aboutUs" class="navItem">About Us</a></li>
                    <li><a href="#contactUs" class="navItem">Contact Us</a></li>
                </ul>
            </div>
        </nav>
        <ul class="sidenav" id="mobile-demo">
            <li><a href="#about" class="sidenav-close navItem">Our Work</a></li>
            <li><a href="#Ornaments" class="sidenav-close navItem">Ornaments</a></li>
            <li><a href="#Containers" class="sidenav-close navItem">Containers</a></li>
            <li><a href="#Furniture" class="sidenav-close navItem">Furniture</a></li>
            <li><a href="#aboutUs" class="sidenav-close navItem">About Us</a></li>
            <li><a href="#contactUs" class="sidenav-close navItem">Contact Us</a></li>
        </ul>

        {/* landing section */}
        <div class="landingDiv" id="landingDiv">
            <div class="landingLogoContainer">
                <h1 class="imageLogo" style={{fontWeight: "bolder"}} >SutradharIndia</h1>
            </div>
            <div class="landingContent">
                <div class="landingP">
                    <span class="landingDoer">
                        <img class="locationImg" src={MapLogo} alt="Location Icon" />
                        <h4 style={{padding: 0, marginTop: 10}}>The Handy Craft Center</h4>
                        <p>
                            Shakarpur, New Delhi
                            <br/>
                            India. Pin code - 110092
                        </p>
                    </span>
                </div>
                <DownArrow navigateTo="#about" />
            </div>
            
        </div>

        {/* about section */}
        <div class="about" id="about">
            <div class="textDiv">
                <h3>What We Create</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                proident, sunt in culpa qui officia deserunt mollit anim id est 
                laborum.
                </p>
                <Button text="Download Brochure" />
            </div>
            <div class="imageDiv">
                <img class="aboutImage" src={v1} alt="Sutradhar India" />
            </div>
        </div>

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
        <div class="aboutUs" id="aboutUs">
            <div class="imageDiv">
                <img class="aboutImage" src={require('../../assets/v2.jpg')} alt="Sutradhar India" />
            </div>
            <div class="textDiv">
                <h3>About Us</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui officia deserunt mollit anim id est 
                    laborum.
                </p>
                <h3>Our Partners</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui officia deserunt mollit anim id est 
                    laborum.
                </p>
            </div>
        </div>

        <div class="contactFollowWrapper">
            <div class="contactUs" id="contactUs">
                <div class="contactTitle">
                    <h3>Contact SutradharIndia</h3>
                </div>
                <div class="contactBox">
                    <p><a href="#">xyz@gmail.com</a></p>
                    <p><a href="#">9999999999</a></p>
                </div>
            </div>
        </div>
        </>
    );
}

export default LandingScreen;
