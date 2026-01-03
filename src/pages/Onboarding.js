import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save onboarding data or call API here
    navigate("/dashboard"); // Move to dashboard after onboarding
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h1>Welcome to Bloom</h1>
      <p>Let's get to know you better.</p>
      <form onSubmit={handleSubmit}>
        <label>
          What’s your name?
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ display: "block", width: "100%", marginBottom: 12, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
          />
        </label>
        <label>
          How old are you?
          <input
            type="number"
            min="13"
            max="120"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            style={{ display: "block", width: "100%", marginBottom: 12, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
          />
        </label>
        <label>
          What’s your main goal with Bloom?
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
            style={{ display: "block", width: "100%", marginBottom: 12, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
          >
            <option value="">Select one</option>
            <option value="learn">Learn about myself</option>
            <option value="cope">Manage stress & emotions</option>
            <option value="support">Find support tools</option>
          </select>
        </label>
        <button
          type="submit"
          style={{ background: "#f687b3", color: "#fff", padding: "12px 24px", border: "none", borderRadius: 8, cursor: "pointer" }}
        >
          Next
        </button>
      </form>
    </div>
  );
}
