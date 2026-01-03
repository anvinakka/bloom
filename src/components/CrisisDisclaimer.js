import React from "react";

export default function CrisisDisclaimer() {
  return (
    <div
      style={{
        background: "#fff7ed",
        border: "1px solid #fed7aa",
        padding: 16,
        borderRadius: 12,
        marginTop: 24,
        fontSize: 14,
        color: "#7c2d12",
      }}
    >
      <strong>Important:</strong>
      <p style={{ marginTop: 8 }}>
        Bloom provides educational content and emotional support tools.
        It is not a replacement for professional mental health care.
      </p>
      <p style={{ marginTop: 8 }}>
        If you or someone you know needs immediate help, please reach out to a
        trusted adult, local emergency services, or a crisis support line.
      </p>
    </div>
  );
}
