import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./CoOperate.css";

const heroChips = [
  "Multi-Agent Intelligence",
  "Anomaly Detection",
  "Root Cause Analysis",
  "Operator Recommendations",
  "Shift Intelligence",
];

const overviewCards = [
  {
    title: "Live Process Monitoring",
    text: "Continuously monitors live and offline process data from plant systems, sensors, dashboards, and records.",
  },
  {
    title: "Agentic Root Cause Intelligence",
    text: "Multiple AI agents collaborate to detect anomalies, identify likely causes, validate safety, and prepare operator recommendations.",
  },
  {
    title: "Shift Reports & Decision Support",
    text: "Generates clear summaries, corrective-action logs, and decision support for process engineers and shift teams.",
  },
];

const scenarios = [
  {
    title: "Hot Metal Pouring Optimization",
    image: "/pouring_image.jpeg",
    alt: "Hot metal pouring process in steel plant",
    bullets: [
      "Detects pouring speed deviations using live process data",
      "Identifies likely causes such as torpedo tilt or flow variation",
      "Recommends safe corrective action",
      "Logs root cause, action, and outcome",
    ],
    agents: [
      "Anomaly agent detects speed deviation at Pit-2",
      "Root cause agent flags torpedo tilt variation",
      "Safety agent confirms action remains within limits",
      "Report agent records cause, action, and result",
    ],
  },
  {
    title: "Energy Optimization in Furnace Operations",
    image: "/blastfurnace.jpeg",
    alt: "Furnace operation for energy optimization",
    bullets: [
      "Monitors specific energy consumption",
      "Detects abnormal energy spikes",
      "Recommends fuel, airflow, or operating adjustments",
      "Tracks savings and shift-level efficiency",
    ],
    agents: [
      "Energy agent detects abnormal SEC trend",
      "Optimization agent reviews fuel and airflow context",
      "Safety agent validates temperature constraints",
      "Shift agent summarizes savings and next actions",
    ],
  },
];

const capabilities = [
  "Real-time anomaly detection",
  "Root cause analysis",
  "Process optimization recommendations",
  "Energy optimization",
  "Safety validation",
  "Shift intelligence",
  "AI assistant for operators",
  "Audit logs and reports",
];

const architectureSteps = [
  {
    title: "Data Sources",
    text: "Sensors, PLC/SCADA, historians, spreadsheets, manual records",
  },
  {
    title: "Context Layer",
    text: "Process knowledge, equipment relationships, operating limits",
  },
  {
    title: "AI Agents",
    text: "Anomaly detection, root cause, optimization, safety, reporting",
  },
  {
    title: "Human Review",
    text: "Operator validation, engineer approval, action tracking",
  },
  {
    title: "Reports & Dashboards",
    text: "Alerts, recommendations, shift reports, audit logs",
  },
];

const businessValue = [
  "Faster abnormality detection",
  "Better operator decision-making",
  "Improved process stability",
  "Reduced energy waste",
  "Reduced manual reporting effort",
  "Traceable recommendations and actions",
];

const CoOperate = () => {
  const scrollToArchitecture = () => {
    document
      .getElementById("cooperate-architecture")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="cooperate-container product-page">
      <Navbar />

      <header className="product-hero">
        <video
          className="product-hero-media"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/286901_medium.mp4" type="video/mp4" />
        </video>
        <div className="product-hero-overlay" />

        <div className="product-inner product-hero-content">
          <p className="product-kicker">AI Co-Operate</p>
          <h1 className="product-hero-title">
            Agentic AI for Safer, Smarter, and More Efficient Plant Operations
          </h1>
          <p className="product-hero-text">
            AI Co-Operate monitors industrial data, detects anomalies, explains
            root causes, and provides safe operator-ready recommendations for
            process stability, energy efficiency, and shift intelligence.
          </p>

          <div className="product-chip-list" aria-label="AI Co-Operate capabilities">
            {heroChips.map((chip) => (
              <span className="product-chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>

          <div className="product-hero-actions">
            <Link className="product-button product-button-primary" to="/contact">
              Request Demo
            </Link>
            <button
              className="product-button product-button-secondary"
              type="button"
              onClick={scrollToArchitecture}
            >
              Explore Architecture
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="product-section">
          <div className="product-inner">
            <div className="product-section-header">
              <p className="product-kicker">Product Overview</p>
              <h2>What AI Co-Operate Solves</h2>
              <p>
                Industrial teams often receive too much raw data and too few
                actionable insights. AI Co-Operate works as a plant intelligence
                layer that watches process signals, detects abnormal behaviour,
                explains what changed, and recommends safe next actions for
                operators and engineers.
              </p>
            </div>

            <div className="product-card-grid">
              {overviewCards.map((card) => (
                <article className="product-card" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="product-section product-section-panel">
          <div className="product-inner">
            <div className="product-section-header">
              <p className="product-kicker">Agentic AI in Action</p>
              <h2>Industrial Scenarios</h2>
              <p>
                Multi-agent intelligence turns process data into explainable,
                operator-ready decisions with traceable actions.
              </p>
            </div>

            <div className="cooperate-scenario-list">
              {scenarios.map((scenario) => (
                <article className="cooperate-scenario-card" key={scenario.title}>
                  <div className="cooperate-scenario-media">
                    <img src={scenario.image} alt={scenario.alt} />
                  </div>
                  <div className="cooperate-scenario-content">
                    <h3>{scenario.title}</h3>
                    <ul className="cooperate-bullet-list">
                      {scenario.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <div className="cooperate-agent-panel" aria-label={`${scenario.title} agent messages`}>
                      {scenario.agents.map((agent) => (
                        <p key={agent}>{agent}</p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="product-section">
          <div className="product-inner">
            <div className="product-section-header">
              <p className="product-kicker">Capabilities</p>
              <h2>Core Capabilities</h2>
            </div>

            <div className="product-card-grid product-card-grid-compact">
              {capabilities.map((capability) => (
                <article className="product-card product-capability-card" key={capability}>
                  <h3>{capability}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cooperate-architecture" className="product-section product-section-panel">
          <div className="product-inner">
            <div className="product-section-header">
              <p className="product-kicker">Architecture</p>
              <h2>From Data to Decisions</h2>
              <p>
                AI Co-Operate connects plant data, process knowledge, AI models,
                and human-in-the-loop workflows to deliver safe, explainable,
                and actionable intelligence.
              </p>
            </div>

            <div className="cooperate-architecture-layout">
              <div className="product-flow">
                {architectureSteps.map((step, index) => (
                  <article className="product-flow-step" key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
              <div className="cooperate-architecture-media">
                <img src="/arch.webp" alt="AI Co-Operate architecture flow" />
              </div>
            </div>
          </div>
        </section>

        <section className="product-section">
          <div className="product-inner">
            <div className="product-section-header">
              <p className="product-kicker">Outcomes</p>
              <h2>Business Value</h2>
            </div>

            <div className="product-card-grid">
              {businessValue.map((value) => (
                <article className="product-card product-value-card" key={value}>
                  <h3>{value}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="product-section">
          <div className="product-inner">
            <div className="product-cta">
              <p className="product-kicker">Next Step</p>
              <h2>Ready to build an AI co-operator for your plant?</h2>
              <p>
                Discuss your process, data, and operational goals with
                V-OptimAIse.
              </p>
              <div className="product-hero-actions">
                <Link className="product-button product-button-primary" to="/contact">
                  Request Demo
                </Link>
                <a
                  className="product-button product-button-secondary"
                  href="/V-OptimAIse-Broucher.pdf"
                  download
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CoOperate;
