// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComp from "./components/HeaderComp";
import FooterComp from "./components/FooterComp";
import InfoComponent from "./components/InfoComponent";
import CarouselComponent from "./components/CarouselComponent";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import AboutUsComp from "./pages/AboutUsComp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderComp />
              <InfoComponent />
              <CarouselComponent />
              <FooterComp />
            </>
          }
        />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUsComp />} />
      </Routes>
    </Router>
  );
};

export default App;
