import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import DailyCheckIn from "./pages/DailyCheckIn";
import Breathing from "./pages/Breathing";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/daily-checkin" element={<DailyCheckIn />} />
        <Route path="/breathing" element={<Breathing />} />


      </Routes>
    </Router>
  );
}

export default App;
