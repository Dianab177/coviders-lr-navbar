import React from "react";
import "./Banner-uno-wash.css";
import Washed from "../landing-view-wash/landing-view-wash";
import LandingMobile from "../landing-mobile/Landing-mobile";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";


export default function BannerUnoHansWash() {
  return (
    <div>
       <div className="page-nav padding-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center">
                            <h2 className="text-white fw-bolder fs-1 mb-3">Hand Wash</h2>
                            <ul className="list-inline">
                                <li className="list-inline-item"><Link to="/" className="text-white fw-bold fs-4">Home</Link></li>
                                <li className="list-inline-item"><Link to="hand-wash" className="text-white fw-bold fs-4">Hand wash</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <div>
        <Washed />
        <LandingMobile />
        <Footer />
      </div> 
    </div>
  );
}
