import React from "react";
import "./Banner-uno-news.css";
import LandingMobile from "../landing-mobile/Landing-mobile";
import News from "../landing-news/News";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";


export default function BannerUnoNews() {
  return (
    <div>
      <div className="page-nav padding-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center">
                            <h2 className="text-white mb-3 fw-bolder fs-1">Blog</h2>
                            <ul className="list-inline">
                                <li className="list-inline-item"><Link to="/" className="text-white fw-bold fs-4">Home</Link></li>
                                <li className="list-inline-item"><Link to="blog" className="text-white fw-bold fs-4">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <div>
        <News />
        <LandingMobile />
        <Footer />
      </div> 
    </div>
  );
}
