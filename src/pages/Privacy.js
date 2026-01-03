import React from "react";

export default function Privacy() {
  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 24 }}>
      <h1 style={{ color: "#d9468f" }}>Privacy Policy</h1>

      <p style={{ color: "#555", marginBottom: 16 }}>
        Bloom is designed with privacy, safety, and trust in mind.
      </p>

      <h3>What We Collect</h3>
      <p>
        Bloom may collect basic, non-identifying information such as:
      </p>
      <ul>
        <li>Optional reflections or check-ins you choose to write</li>
        <li>General usage data to improve features</li>
      </ul>

      <h3>What We Do NOT Do</h3>
      <ul>
        <li>We do not sell personal data</li>
        <li>We do not diagnose mental health conditions</li>
        <li>We do not provide therapy or medical treatment</li>
      </ul>

      <h3>For Students & Schools</h3>
      <p>
        Bloom is designed to be compliant with student privacy expectations.
        Reflections are personal and are not reviewed by educators unless
        explicitly designed as part of a class activity.
      </p>

      <h3>Your Control</h3>
      <p>
        You choose what to share. You may stop using Bloom at any time.
      </p>

      <p style={{ fontSize: 12, color: "#777", marginTop: 24 }}>
        This policy may be updated as Bloom evolves.
      </p>
    </div>
  );
}
