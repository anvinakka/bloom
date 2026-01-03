import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import DailyCheckIn from "./pages/DailyCheckIn";
import Breathing from "./pages/Breathing";
import Journal from "./pages/Journal";
import Learn from "./pages/Learn";
import Guide from "./pages/Guide";

function App() {
  return (
    <Router>
      <Routes>
        {/* Pages without nav */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/onboarding" element={<Onboarding />} />

        {/* Pages WITH nav */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/daily-checkin" element={<DailyCheckIn />} />
          <Route path="/breathing" element={<Breathing />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/guide" element={<Guide />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
