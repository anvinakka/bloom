import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "auto" }}>
      <h1 style={{ color: "#d9468f" }}>Your Bloom Dashboard</h1>
      <p style={{ color: "#555", marginBottom: 24 }}>
        Check in with yourself and choose a tool that feels right today.
      </p>

      {/* Daily Check-In */}
      <div style={cardStyle}>
        <h2>Daily Check-In</h2>
        <p>How are you feeling right now?</p>
        <Link to="/daily-checkin">
          <button style={primaryButton}>Start Check-In</button>
        </Link>
      </div>

      {/* Tools */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
        <div style={cardStyle}>
          <h3>Breathing</h3>
          <p>Calm your body and mind.</p>
          <Link to="/breathing">Open</Link>
        </div>

        <div style={cardStyle}>
          <h3>Journal</h3>
          <p>Reflect and write freely.</p>
          <Link to="/journal">Open</Link>
        </div>

        <div style={cardStyle}>
          <h3>Learn</h3>
          <p>Short psychology insights.</p>
          <Link to="/learn">Open</Link>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#fff0f6",
  borderRadius: 16,
  padding: 16,
  marginBottom: 16,
};

const primaryButton = {
  background: "#f472b6",
  color: "white",
  border: "none",
  padding: "10px 18px",
  borderRadius: 10,
  cursor: "pointer",
};
