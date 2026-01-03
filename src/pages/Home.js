import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to Bloom</h1>
      <p>Your mental wellness platform.</p>
      <Link to="/about">Learn More About Bloom</Link>
    </div>
  );
}
