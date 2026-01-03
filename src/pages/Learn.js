import React from "react";

export default function Learn() {
  const insights = [
    {
      title: "Why emotions feel overwhelming",
      text: "Emotions can feel intense because your brain is constantly trying to protect you. Strong feelings don’t mean something is wrong — they mean something matters."
    },
    {
      title: "Stress and your body",
      text: "When you're stressed, your body goes into alert mode. Breathing slowly can help signal safety and calm your nervous system."
    },
    {
      title: "Thoughts vs facts",
      text: "Not every thought is a fact. Learning to notice your thoughts — without judging them — can reduce emotional pressure."
    },
    {
      title: "Why self-awareness matters",
      text: "Understanding how you feel helps you respond instead of react. Awareness is the first step toward change."
    },
    {
      title: "Emotions change",
      text: "Feelings rise and fall like waves. Even strong emotions usually pass with time and care."
    },
  ];

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 24 }}>
      <h1 style={{ color: "#d9468f" }}>Learn</h1>
      <p style={{ color: "#555", marginBottom: 24 }}>
        Short psychology insights to help you understand yourself better.
      </p>

      {insights.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#fff0f6",
            padding: 20,
            borderRadius: 16,
            marginBottom: 16,
          }}
        >
          <h3 style={{ marginBottom: 8 }}>{item.title}</h3>
          <p style={{ color: "#444" }}>{item.text}</p>
        </div>
      ))}

      <p style={{ fontSize: 12, color: "#777", marginTop: 24 }}>
        Bloom provides educational content, not therapy or diagnosis.
      </p>
    </div>
  );
}
