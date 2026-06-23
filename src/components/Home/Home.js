import { Link } from "react-router-dom";
import { ArrowRight, Gauge, Network, ScanLine, Workflow } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SolutionCards from "../SolutionCards/SolutionCards";
import StatsSection from "../StatsSection/StatsSection";
import "./Home.css";

const experienceHighlights = [
  {
    title: "Extreme Level Measurement",
    text: "Hot-metal level measurement in high temperature, dust, fumes, confined spaces, vibration, and poor visibility using laser and radar technologies.",
    icon: Gauge,
  },
  {
    title: "Vision Inspection",
    text: "Defect detection, product tracking, OCR/ID reading, and automated visual quality checks using industrial cameras and edge AI.",
    icon: ScanLine,
  },
  {
    title: "Process Intelligence",
    text: "AI Co-Operate monitors live and offline process data, detects abnormal behaviour, and recommends safe operator-ready actions.",
    icon: Workflow,
  },
  {
    title: "Industrial Data Integration",
    text: "Integration with sensors, PLC/SCADA systems, dashboards, spreadsheets, databases, and AI/ML models.",
    icon: Network,
  },
];

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="home-main">
        <section className="home-hero" aria-labelledby="home-hero-title">
          <video
            className="home-hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/pouring_image.jpeg"
            aria-hidden="true"
          >
            <source src="/pouring.mp4" type="video/mp4" />
          </video>

          <div className="home-hero-overlay" />

          <div className="home-hero-content">
            <p className="home-eyebrow" data-aos="fade-up">
AI for sustainable, high-performance plants</p>
            <h1 id="home-hero-title" data-aos="fade-up" data-aos-delay="100">
              Industrial AI, Vision &amp; IIoT Intelligence for Steel and Heavy
              Manufacturing
            </h1>
            <p className="home-hero-subheadline" data-aos="fade-up" data-aos-delay="200">
              V-OptimAIse helps manufacturing plants detect defects, optimize
              processes, measure hot-metal levels, monitor conveyors, and reduce
              energy intensity using VisionAI, AI Co-Operate, and IIoT + AI/ML
              systems.
            </p>

            <div className="home-hero-actions" data-aos="fade-up" data-aos-delay="300">
              <a className="home-btn home-btn-primary" href="#product-categories">
                Explore Products
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <Link className="home-btn home-btn-secondary" to="/contact">
                Contact for Demo
              </Link>
            </div>
          </div>
        </section>

        <SolutionCards />
        <StatsSection />

        <section
          className="industrial-proof-section"
          aria-labelledby="experience-title"
        >
          <div className="home-section-heading" data-aos="fade-up">
            <p className="home-eyebrow">Plant-ready systems</p>
            <h2 id="experience-title">Built for Real Industrial Conditions</h2>
          </div>

          <div className="industrial-proof-grid">
            {experienceHighlights.map(({ title, text, icon: Icon }, index) => (
              <article
                className="industrial-proof-card"
                key={title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="industrial-proof-icon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="home-final-cta"
          aria-labelledby="home-cta-title"
        >
          <div className="home-final-cta-inner" data-aos="zoom-in">
            <h2 id="home-cta-title">
              Have an industrial AI, vision, or measurement challenge?
            </h2>
            <p>
              Talk to V-OptimAIse about your plant use case and discover how
              VisionAI, AI Co-Operate, and IIoT + AI/ML can improve quality,
              process stability, and operational visibility.
            </p>
            <Link className="home-btn home-btn-primary" to="/contact">
              Contact for Demo
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
