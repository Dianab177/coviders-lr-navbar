import React from "react";
import "./Banner-uno-about.css";
import LandingMobile from "../landing-mobile/Landing-mobile";
import News from "../landing-news/News";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";



export default function BannerUnoAbout() {
  return (
    <div>
    
       <div className="page-nav padding-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center">
                            <h2 className="text-white fw-bolder fs-1 mb-3">About</h2>
                            <ul className="list-inline">
                                <li className="list-inline-item"><Link to="/" className="text-white fw-bold fs-4">Home</Link></li>
                                <li className="list-inline-item"><Link to="about" className="text-white fw-bold fs-4">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <div>
        <LandingMobile />
        <News />
        <Footer />
      </div> 
    </div>
  );
}
