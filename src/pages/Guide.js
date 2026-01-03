import React, { useState } from "react";

export default function Guide() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const replies = [
    "Thanks for sharing that. Want to tell me a little more?",
    "That sounds like it’s been on your mind for a while.",
    "It makes sense to feel that way sometimes.",
    "You’re not alone in feeling this way.",
    "Would a calming exercise or journaling help right now?",
  ];

  const handleSend = () => {
    if (!input) return;

    const randomReply =
      replies[Math.floor(Math.random() * replies.length)];

    setResponse(randomReply);
    setInput("");
  };

  return (
    <div style={{ maxWidth: 700, margin: "auto", padding: 24 }}>
      <h1 style={{ color: "#d9468f" }}>Bloom Guide</h1>
      <p style={{ color: "#555", marginBottom: 16 }}>
        I’m here to listen and help you reflect.
      </p>

      <div
        style={{
          background: "#fff0f6",
          padding: 16,
          borderRadius: 16,
          marginBottom: 16,
        }}
      >
        <strong>Guide:</strong>
        <p style={{ marginTop: 8 }}>
          What’s been going on for you lately?
        </p>
      </div>

      {response && (
        <div
          style={{
            background: "#fde2f3",
            padding: 16,
            borderRadius: 16,
            marginBottom: 16,
          }}
        >
          <strong>Guide:</strong>
          <p style={{ marginTop: 8 }}>{response}</p>
        </div>
      )}

      <textarea
        placeholder="Type here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        style={{
          width: "100%",
          padding: 14,
          borderRadius: 16,
          border: "1px solid #ccc",
          marginBottom: 12,
        }}
      />

      <button
        onClick={handleSend}
        style={{
          background: "#f472b6",
          color: "white",
          border: "none",
          padding: "12px 20px",
          borderRadius: 12,
          cursor: "pointer",
        }}
      >
        Send
      </button>

      <p style={{ fontSize: 12, color: "#777", marginTop: 16 }}>
        Bloom Guide offers emotional support and reflection prompts.
        It does not provide therapy, diagnosis, or crisis intervention.
      </p>
    </div>
  );
}
