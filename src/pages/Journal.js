import React, { useState } from "react";

export default function Journal() {
  const [entry, setEntry] = useState("");

  const prompts = [
    "What’s something that stayed with you today?",
    "What emotion showed up the most for you?",
    "What’s one small thing you did for yourself today?",
    "What’s been weighing on your mind lately?",
  ];

  const randomPrompt =
    prompts[Math.floor(Math.random() * prompts.length)];

  const handleSave = () => {
    // Later: save journal entry
    setEntry("");
    alert("Journal entry saved 🌸");
  };

  return (
    <div style={{ maxWidth: 700, margin: "auto", padding: 24 }}>
      <h1 style={{ color: "#d9468f" }}>Journal</h1>
      <p style={{ color: "#555", marginBottom: 16 }}>
        This space is yours. Write freely—no judgment, no pressure.
      </p>

      {/* Prompt */}
      <div
        style={{
          background: "#fff0f6",
          padding: 16,
          borderRadius: 16,
          marginBottom: 16,
        }}
      >
        <strong>Prompt:</strong>
        <p style={{ marginTop: 8 }}>{randomPrompt}</p>
      </div>

      {/* Textarea */}
      <textarea
        placeholder="Start writing here..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        rows={8}
        style={{
          width: "100%",
          padding: 14,
          borderRadius: 16,
          border: "1px solid #ccc",
          marginBottom: 16,
          fontSize: 16,
        }}
      />

      {/* Save */}
      <button
        onClick={handleSave}
        style={{
          background: "#f472b6",
          color: "white",
          border: "none",
          padding: "12px 20px",
          borderRadius: 12,
          cursor: "pointer",
        }}
      >
        Save Entry
      </button>

      <p style={{ fontSize: 12, color: "#777", marginTop: 16 }}>
        Journaling is a personal reflection tool. Bloom does not analyze or diagnose your thoughts.
      </p>
    </div>
  );
}
