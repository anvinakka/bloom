import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Brain, Shield, Flower, Users, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function createPageUrl(page) {
  switch (page) {
    case "Home":
      return "/";
    case "Onboarding":
      return "/onboarding";
    default:
      return "/";
  }
}

export default function About() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Header */}
      <div style={{ padding: 16, borderBottom: "1px solid #eee", display: "flex", alignItems: "center", gap: 12 }}>
        <Link to={createPageUrl("Home")}>
          <button style={{ borderRadius: "50%", background: "transparent", border: "none", cursor: "pointer" }}>
            <ArrowLeft size={20} />
          </button>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(to bottom right, #81e6d9, #667eea)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Sparkles size={16} color="#fff" />
          </div>
          <span style={{ fontWeight: "600", color: "#1a202c" }}>Bloom</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ padding: "64px 16px", background: "linear-gradient(to bottom right, #fff0f6, #fff, #fff0f1)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: 40, fontWeight: "bold", color: "#1a202c", marginBottom: 24 }}>
            About Bloom
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ fontSize: 18, color: "#718096", lineHeight: 1.5 }}>
            Bloom is a psychology-based self-discovery and emotional support platform designed to help people understand how their minds work and build healthier coping patterns over time.
          </motion.p>
        </div>
      </section>

      {/* Add other sections as needed */}

      {/* Footer */}
      <footer style={{ padding: 32, borderTop: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(to bottom right, #ed64a6, #f56565)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Flower size={16} color="#fff" />
          </div>
          <span style={{ fontWeight: "600", color: "#1a202c" }}>Bloom</span>
        </div>
        <p style={{ color: "#a0aec0", fontSize: 14 }}>© 2024 Bloom. All rights reserved.</p>
      </footer>
    </div>
  );
}
