import React from 'react';
import "./landingmobile.css";
import phone from "../../../../assets/img/img/prevent/phone-1.png";

const LandingMobile = () => {
    return (
        <div className="landingMobileContainer">
            <div className="cuadrado">
                <div className="text">
                    <h4 className='textTitle'><b>Get the simple app for latest news</b></h4>
                    <h3 className='textParagraph'>Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.</h3><br></br>
                    <button className="buttom">Download Now</button>
                </div>
                <img className="mobile" src={phone} alt="phone" />
            </div>
        </div>
    )};

export default LandingMobile;