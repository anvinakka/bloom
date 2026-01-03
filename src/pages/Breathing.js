import React, { useEffect, useState } from "react";

export default function Breathing() {
  const [phase, setPhase] = useState("Inhale");
  const [count, setCount] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          if (phase === "Inhale") {
            setPhase("Hold");
            return 4;
          }
          if (phase === "Hold") {
            setPhase("Exhale");
            return 6;
          }
          if (phase === "Exhale") {
            setPhase("Inhale");
            return 4;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase]);

  return (
    <div style={{ maxWidth: 500, margin: "auto", padding: 24, textAlign: "center" }}>
      <h1 style={{ color: "#d9468f" }}>Breathing Exercise</h1>
      <p style={{ color: "#555", marginBottom: 24 }}>
        Follow the rhythm. No pressure—just breathe.
      </p>

      {/* Breathing Circle */}
      <div
        style={{
          width: 180,
          height: 180,
          margin: "auto",
          borderRadius: "50%",
          background: "#fde2f3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          fontWeight: "bold",
          color: "#9d174d",
          marginBottom: 24,
          transition: "transform 2s ease-in-out",
          transform:
            phase === "Inhale"
              ? "scale(1.1)"
              : phase === "Exhale"
              ? "scale(0.9)"
              : "scale(1)",
        }}
      >
        {count}
      </div>

      <h2>{phase}</h2>

      <p style={{ marginTop: 16, fontSize: 14, color: "#777" }}>
        This is a simple breathing tool to help calm your body.
      </p>
    </div>
  );
}
