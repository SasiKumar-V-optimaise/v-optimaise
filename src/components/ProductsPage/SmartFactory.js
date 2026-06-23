import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./SmartFactory.css";

const heroChips = [
  "Laser / Radar Measurement",
  "Hot-Metal Level",
  "Conveyor Flow",
  "Predictive Analytics",
  "Industrial Dashboards",
];

const overviewCards = [
  {
    image: "/pouring_image.jpeg",
    title: "Harsh-Condition Level Measurement",
    text: "Hot-metal and process-zone level measurement under very high temperature, dust, fumes, confined spaces, vibration, glare, and poor visibility.",
  },
  {
    image: "/steelbackground.webp",
    title: "Conveyor & Coke Carrier Flow Monitoring",
    text: "Volumetric flow measurement on conveyor belts and coke carriers, including coke oven plant material movement applications.",
  },
  {
    image: "/optimise-dash.png",
    title: "AI/ML Dashboards & Predictive Analytics",
    text: "Sensor data is converted into dashboards, alerts, trends, predictions, and decision-ready insights for plant teams.",
  },
];

const levelHighlights = [
  "Very high temperature environments",
  "Dust, fumes, glare, and poor visibility",
  "Confined and difficult-access spaces",
  "Laser and radar-based measurement",
  "Hot-metal and vessel level monitoring",
  "Conveyor and coke carrier volumetric flow",
];

const capabilities = [
  "Hot-metal level measurement",
  "Laser measurement systems",
  "Radar measurement systems",
  "Volumetric conveyor flow",
  "Coke carrier monitoring",
  "Sensor data acquisition",
  "Edge processing",
  "Industrial dashboards",
  "AI/ML predictive analytics",
  "Alerts and reporting",
];

const flowSteps = [
  {
    title: "Sensors capture industrial signals",
    text: "Laser, radar, level, flow, temperature, pressure, camera, or process data",
  },
  {
    title: "Edge layer cleans and validates data",
    text: "Noise filtering, calibration, signal processing, and data quality checks",
  },
  {
    title: "AI/ML layer detects patterns",
    text: "Anomaly detection, prediction, trend analysis, and optimization models",
  },
  {
    title: "Dashboard and alerts guide teams",
    text: "Real-time visibility, historical trends, alerts, reports, and recommendations",
  },
  {
    title: "Integration connects plant systems",
    text: "PLC/SCADA, databases, spreadsheets, dashboards, APIs, and reporting tools",
  },
];

const useCases = [
  "Hot-metal level measurement",
  "Coke oven plant material monitoring",
  "Conveyor belt volumetric flow",
  "Equipment health monitoring",
  "Production line optimization",
  "Energy and process monitoring",
  "Safety and abnormal condition alerts",
  "Predictive maintenance",
];

const businessValue = [
  "Improve measurement reliability",
  "Reduce manual inspection risk",
  "Improve material accounting",
  "Improve plant visibility",
  "Enable predictive maintenance",
  "Support faster decisions",
  "Improve safety and process control",
];

const SmartFactory = () => {
  const scrollToCapabilities = () => {
    document
      .getElementById("iiot-capabilities")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="smartfactory-container product-page">
      <Navbar />

      <header className="product-hero">
        <img
          className="product-hero-media"
          src="/Iiot.webp"
          alt="Industrial IIoT dashboards and connected plant systems"
        />
        <div className="product-hero-overlay" />

        <div className="product-inner product-hero-content">
          <p className="product-kicker">IIoT + AI/ML</p>
          <h1 className="product-hero-title">
            Sensor-Connected Intelligence for Measurement, Monitoring, and
            Predictive Analytics
          </h1>
          <p className="product-hero-text">
            V-OptimAIse connects industrial sensors, laser/radar measurement
            systems, dashboards, and AI/ML models to help plants measure
            critical levels, monitor material flow, detect abnormal conditions,
            and improve operational visibility.
          </p>

          <div className="product-chip-list" aria-label="IIoT and AI/ML capabilities">
            {heroChips.map((chip) => (
              <span className="product-chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>

          <div className="product-hero-actions">
            <Link className="product-button product-button-primary" to="/contact">
              Request Site Assessment
            </Link>
            <button
              className="product-button product-button-secondary"
              type="button"
              onClick={scrollToCapabilities}
            >
              Explore Capabilities
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="product-section">
          <div className="product-inner">
            <div className="product-section-header">
              <p className="product-kicker">Product Overview</p>
              <h2>What IIoT + AI/ML Solves</h2>
              <p>
                Industrial plants often struggle to measure and monitor critical
                process conditions in harsh environments. V-OptimAIse combines
                sensors, laser/radar technologies, edge processing, dashboards,
                and AI/ML analytics to convert difficult field measurements into
                reliable operational intelligence.
              </p>
            </div>

            <div className="product-card-grid">
              {overviewCards.map((card) => (
                <article className="product-card product-card-with-media" key={card.title}>
                  <img src={card.image} alt="" aria-hidden="true" />
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="product-section product-section-panel">
          <div className="product-inner level-measurement-layout">
            <div className="product-section-header">
              <p className="product-kicker">Measurement Expertise</p>
              <h2>Expertise in Hot-Metal Level Measurement</h2>
              <p>
                V-OptimAIse is experienced in hot-metal level measurement
                despite adverse industrial conditions such as very high
                temperature, dust, fumes, confined spaces, vibration, glare, and
                poor visibility. We use advanced laser and radar technologies for
                accurate and reliable non-contact measurement in demanding plant
                environments.
              </p>
            </div>

            <div className="level-media-card">
              <img
                src="/blastfurnace.jpeg"
                alt="Harsh steel plant environment for level measurement"
              />
            </div>
          </div>

          <div className="product-inner level-highlight-grid">
            {levelHighlights.map((highlight) => (
              <article className="product-card product-capability-card" key={highlight}>
                <h3>{highlight}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="iiot-capabilities" className="product-section">
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

        <section className="product-section product-section-panel">
          <div className="product-inner">
            <div className="product-section-header">
              <p className="product-kicker">System Flow</p>
              <h2>How IIoT + AI/ML Works</h2>
            </div>

            <div className="product-flow">
              {flowSteps.map((step, index) => (
                <article className="product-flow-step" key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="product-section">
          <div className="product-inner">
            <div className="product-section-header">
              <p className="product-kicker">Experience</p>
              <h2>Industrial Use Cases</h2>
            </div>

            <div className="use-case-layout">
              <div className="use-case-media-card">
                <img
                  src="/visualisation.png"
                  alt="Industrial dashboard visualization for sensor data"
                />
              </div>
              <div className="product-card-grid product-card-grid-compact">
                {useCases.map((useCase) => (
                  <article className="product-card product-value-card" key={useCase}>
                    <h3>{useCase}</h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="product-section product-section-panel">
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
              <h2>
                Need reliable measurement or monitoring in harsh plant
                conditions?
              </h2>
              <p>
                Talk to V-OptimAIse about your level measurement, conveyor flow,
                sensor dashboard, or AI/ML analytics use case.
              </p>
              <div className="product-hero-actions">
                <Link className="product-button product-button-primary" to="/contact">
                  Request Site Assessment
                </Link>
                <Link className="product-button product-button-secondary" to="/contact">
                  Contact for Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SmartFactory;
