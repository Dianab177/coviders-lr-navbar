import React from "react";
// import flag_spain from "../../../../assets/images/flag_spain.png";
// import girl from "../../../../assets/images/girl.png";
// import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import "./Banner-uno-prevent.css";
//import NavbarLanding from "../landing-navbar/NavbarLanding";
// import Symptom from "../landing-symptom/Symptom";
import PreventLanding from "../../../moleculas/Mol-Landing-prevent";
// import Spreads from "../landing-spreads/Spreads";
// import Question from "../landing-view-questions/landing-view-question";
// import Washed from "../landing-view-wash/landing-view-wash";
import LandingMobile from "../landing-mobile/Landing-mobile";
// import News from "../landing-news/News";
import Footer from "../footer/Footer";
//import Buttons from "../../../atomos/buttons/Buttons";
import { Link } from "react-router-dom";


export default function BannerUnoPrevention() {
  return (
    <div>
       <div className="page-nav padding-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center">
                            <h2 className="text-white mb-3 fw-bolder fs-1">Prevention</h2>
                            <ul className="list-inline">
                                <li className="list-inline-item"><Link to="/" className="text-white fw-bold fs-4">Home</Link></li>
                                <li className="list-inline-item"><Link to="prevention" className="text-white fw-bold fs-4">Prevention</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <div>
        {/* <Symptom /> */}
        <PreventLanding />
        {/* <Spreads />
        <Question />
        <Washed /> */}
        <LandingMobile />
        {/* <News /> */}
        <Footer />
      </div> 
    </div>
  );
}
