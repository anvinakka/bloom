import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DailyCheckIn() {
  const navigate = useNavigate();
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");

  const moods = ["😊 Good", "😐 Okay", "😕 Low", "😣 Stressed", "😴 Tired"];

  const handleSubmit = () => {
    // Later: save to database
    navigate("/dashboard");
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 24 }}>
      <h1 style={{ color: "#d9468f" }}>Daily Check-In</h1>
      <p style={{ color: "#555", marginBottom: 16 }}>
        There’s no right or wrong answer. Just check in with yourself.
      </p>

      {/* Mood Selector */}
      <div style={{ marginBottom: 20 }}>
        <h3>How are you feeling today?</h3>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {moods.map((m) => (
            <button
              key={m}
              onClick={() => setMood(m)}
              style={{
                padding: "10px 14px",
                borderRadius: 20,
                border: mood === m ? "2px solid #ec4899" : "1px solid #ccc",
                background: mood === m ? "#fde2f3" : "#fff",
                cursor: "pointer",
              }}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Reflection */}
      <div style={{ marginBottom: 20 }}>
        <h3>Want to add a thought?</h3>
        <textarea
          placeholder="What’s been on your mind today?"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={4}
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 12,
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Disclaimer */}
      <p style={{ fontSize: 12, color: "#777", marginBottom: 16 }}>
        Bloom provides emotional support and education. It is not a substitute for professional care.
      </p>

      <button
        onClick={handleSubmit}
        style={{
          background: "#f472b6",
          color: "white",
          border: "none",
          padding: "12px 20px",
          borderRadius: 12,
          cursor: "pointer",
        }}
      >
        Save Check-In
      </button>
    </div>
  );
}
