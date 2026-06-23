import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./AboutUs.css";

const capabilities = [
  {
    title: "VisionAI",
    text: "Industrial computer vision for defect detection, tracking, OCR/ID reading, automated grading, and quality analytics.",
  },
  {
    title: "AI Co-Operate",
    text: "Agentic AI and multi-agent intelligence for monitoring process data, detecting anomalies, explaining root causes, and providing operator-ready recommendations.",
  },
  {
    title: "IIoT + AI/ML",
    text: "Sensor-connected AI/ML systems for level measurement, flow monitoring, dashboards, predictive analytics, and industrial automation.",
  },
];

const industries = [
  "Steel Melting Shops",
  "Blast furnace operations",
  "Coke oven plants",
  "Rolling mills",
  "Energy and utilities",
  "Heavy manufacturing",
];

const reasons = [
  "Industrial problem understanding",
  "Data-to-Decision Intelligence",
  "Harsh environment measurement experience",
  "Practical plant-ready deployment",
  "Dashboards, alerts, and operator workflows",
  "Focus on quality, energy, and sustainability outcomes",
];

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <main className="about-page">
        <section className="about-hero" aria-labelledby="about-title">
          <div className="about-page-inner">
            <p className="about-kicker" data-aos="fade-up">About</p>
            <h1 id="about-title" data-aos="fade-up" data-aos-delay="100">About V-OptimAIse</h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Industrial AI, VisionAI, and IIoT + AI/ML solutions for steel,
              energy, and heavy manufacturing.
            </p>
          </div>
        </section>

        <section className="about-section about-intro" aria-labelledby="who-we-are">
          <div className="about-page-inner about-two-column">
            <div data-aos="fade-right">
              <p className="about-kicker">Company</p>
              <h2 id="who-we-are">Who We Are</h2>
            </div>
            <p data-aos="fade-left">
              V-OptimAIse Climate Tech Solutions builds practical AI, computer
              vision, and industrial IoT systems for manufacturing plants. We
              focus on solving real plant problems such as defect detection,
              process instability, hot-metal level measurement, material-flow
              monitoring, energy intensity reduction, and operator decision
              support.
            </p>
          </div>
        </section>

        <section className="about-section" aria-labelledby="what-we-do">
          <div className="about-page-inner">
            <div className="about-section-heading" data-aos="fade-up">
              <p className="about-kicker">Capabilities</p>
              <h2 id="what-we-do">What We Do</h2>
            </div>

            <div className="about-card-grid three">
              {capabilities.map((item, index) => (
                <article
                  className="about-card"
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section level-section" aria-labelledby="level-expertise">
          <div className="about-page-inner about-two-column">
            <div data-aos="fade-right">
              <p className="about-kicker">Measurement expertise</p>
              <h2 id="level-expertise">
                Expertise in Harsh-Condition Level Measurement
              </h2>
            </div>
            <p data-aos="fade-left">
              V-OptimAIse has strong expertise in hot-metal level measurement
              under adverse industrial conditions such as very high temperature,
              dust, fumes, confined spaces, vibration, glare, and poor
              visibility. We use advanced laser and radar technologies for
              accurate measurement of hot-metal levels, process-zone levels, and
              volumetric flow on conveyor belts or coke carriers, including coke
              oven plant applications.
            </p>
          </div>
        </section>

        <section className="about-section" aria-labelledby="industries-title">
          <div className="about-page-inner">
            <div className="about-section-heading" data-aos="fade-up">
              <p className="about-kicker">Industries</p>
              <h2 id="industries-title">Industries We Serve</h2>
            </div>

            <div className="about-chip-grid">
              {industries.map((industry, index) => (
                <article
                  className="about-chip-card"
                  key={industry}
                  data-aos="zoom-in"
                  data-aos-delay={index * 80}
                >
                  {industry}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section choose-section" aria-labelledby="choose-title">
          <div className="about-page-inner">
            <div className="about-section-heading" data-aos="fade-up">
              <p className="about-kicker">Why V-OptimAIse</p>
              <h2 id="choose-title">Why Clients Choose Us</h2>
            </div>

            <div className="about-card-grid">
              {reasons.map((reason, index) => (
                <article
                  className="about-card compact"
                  key={reason}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <p>{reason}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-cta" aria-labelledby="about-cta-title">
          <div className="about-page-inner" data-aos="zoom-in">
            <h2 id="about-cta-title">
              Looking for a practical industrial AI partner?
            </h2>
            <Link className="about-cta-button" to="/contact">
              Contact V-OptimAIse
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutUs;
