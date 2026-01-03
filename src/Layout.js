import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* Header */}
      <header
        style={{
          background: "#fff0f6",
          padding: "12px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <h2 style={{ color: "#d9468f", margin: 0 }}>🌸 Bloom</h2>
        </Link>

        {/* Navigation */}
        <nav style={{ display: "flex", gap: 16 }}>
          <NavLink to="/dashboard" label="Dashboard" />
          <NavLink to="/guide" label="Guide" />
          <NavLink to="/learn" label="Learn" />
          <NavLink to="/breathing" label="Breathing" />
          <NavLink to="/journal" label="Journal" />
        </nav>
      </header>

      {/* Page content */}
      <main style={{ paddingTop: 24 }}>
        <Outlet />
      </main>
    </div>
  );
}

function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
        color: "#9d174d",
        fontWeight: 500,
      }}
    >
      {label}
    </Link>
  );
}
