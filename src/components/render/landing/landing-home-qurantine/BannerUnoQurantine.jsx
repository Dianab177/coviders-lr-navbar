import React from "react";
import "./Banner-uno-qurantine.css";
import Symptom from "../landing-symptom/Symptom";
import Spreads from "../landing-spreads/Spreads";
import LandingMobile from "../landing-mobile/Landing-mobile";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";


export default function BannerUnoQurantine() {
  return (
    <div>
     <div className="page-nav padding-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center">
                            <h2 className="text-white mb-3 fw-bolder fs-1">Qurantine</h2>
                            <ul className="list-inline">
                                <li className="list-inline-item"><Link to="/" className="text-white fw-bold fs-4">Home</Link></li>
                                <li className="list-inline-item"><Link to="qurantine" className="text-white fw-bold fs-4">Qurantine</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Symptom />
        <Spreads />
        <LandingMobile />
        <Footer />
      </div> 
  );
}
