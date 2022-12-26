import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./styles/App.css";

import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <>
      <div className="full-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
