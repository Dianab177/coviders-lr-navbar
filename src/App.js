import React from "react";
import "./App.css";
//import TrackerRaiz from "./components/render/trackers/tracker-raiz/Tracker-raiz";
import Trackerdos from "./components/render/trackers/tracker-dos/Mol-trackerdos";
import TrackerCuatro from "./components/render/trackers/tracker-cuatro/Tracker-cuatro";
import TrackerCinco from "./components/render/trackers/tracker-cinco/Tracker-cinco";
import TrackerSeis from "./components/render/trackers/tracker-seis/Tracker_seis";
import TableTracker from './components/moleculas/mol-track-tres-table/Mol-track-tres-table';
// import DataApi from './services/Services-data-api-countries';
// import TrackerDiecinueve from "./components/render/trackers/tracker-covid19/Tracker-covid-diecinueve";
//import Question from "./components/render/landing/landing-view-questions/landing-view-question";
//import Washed from "./components/render/landing/landing-view-wash/landing-view-wash";
//import PreventLanding from "./components/moleculas/Mol-Landing-prevent";
// import News from "./components/render/landing/landing-news/News";
// import Symptom from "./components/render/landing/landing-symptom/Symptom";
//import Spreads from "./components/render/landing/landing-spreads/Spreads";
import Footer from "./components/render/landing/footer/Footer";
//import LandingMobile from "./components/render/landing/landing-mobile/Landing-mobile";
import BannerUno from "./components/render/landing/landing-home/BannerUno";
import NavbarLanding from "./components/render/landing/landing-navbar/NavbarLanding";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import BannerUnoPrevention from "./components/render/landing/landing-home-prevention/BannerUnoPrevention";
import BannerUnoHansWash from "./components/render/landing/landing-home-hand-wash/BannerUnoHandWash";
import BannerUnoAbout from "./components/render/landing/landing-home-about/BannerUnoAbout";
import BannerUnoNews from "./components/render/landing/landing-home-news/BannerUnoNews";
import BannerUnoQurantine from "./components/render/landing/landing-home-qurantine/BannerUnoQurantine";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavbarLanding />
          <Routes>
            <Route index element={<BannerUno />} />
            <Route path="/prevention" element={<BannerUnoPrevention />} />
            <Route path="/hand-wash" element={<BannerUnoHansWash />} />
            <Route path="/about" element={<BannerUnoAbout />} />
            <Route path="/blog" element={<BannerUnoNews />} />
            <Route path="/qurantine" element={<BannerUnoQurantine />} />
            {/* <Route path="/social-distance" element={<BannerUnoSpreads />} />
            <Route path="/blog-details" element={<BannerUnoBlogDetails />} /> */}


            {/* <Route path="/qurantine" element={<Symptom />} /> */}
            {/* <Route path="/prevention" element={<PreventLanding />} /> */}
            {/* <Route path="/social-distance" element={<Spreads />} /> */}
            {/* <Route path="/about" element={<Question />} /> */}
            {/* <Route path="/hand-wash" element={<Washed />} /> */}
            {/* <Route path="/blog-details" element={<LandingMobile />} /> */}
            {/* <Route path="/blog" element={<News />} /> */}
            <Route path="/help" element={<Footer />} />
            {/* <Route path="/tracker" element={<TrackerRaiz />} /> */}
            <Route path="/Trackerdos" element={<Trackerdos />} />
            <Route path="/TrackerTres" element={<TableTracker />} />
            <Route path="/TrackerCuatro" element={<TrackerCuatro />} />
            <Route path='/TrackerCinco' element={<TrackerCinco/>}/>
            <Route path="/TrackerSeis" element={<TrackerSeis />} />
            {/* <Route path='/TrackerSiete'/>
            <Route path='/TrackerOcho'/> */}
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
