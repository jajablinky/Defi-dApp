import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./styles/App.css";

import LandingPage from "./components/LandingPage";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="full-container">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ecosystem" element={<LandingPage />} />
          <Route path="/community" element={<LandingPage />} />
          <Route path="/governance" element={<LandingPage />} />
          <Route path="/developers" element={<LandingPage />} />
          <Route path="/blog" element={<LandingPage />} />
          <Route path="/faq" element={<LandingPage />} />
          <Route path="/jobs" element={<LandingPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
