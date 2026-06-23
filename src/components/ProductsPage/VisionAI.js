import React from "react";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "swiper/css";
import "swiper/css/pagination";
import "./VisionAI.css";

const heroChips = [
  "Defect Detection",
  "Product Tracking",
  "OCR / ID Reading",
  "High-Temperature Inspection",
  "Edge AI Cameras",
];

const overviewCards = [
  {
    image: "/realtime1.jpg",
    title: "Real-Time Detection & Tracking",
    text: "Detect and track products, pipes, coils, slabs, and process objects as they move across production lines.",
  },
  {
    image: "/multy-detection1.png",
    title: "Multi-Defect Classification",
    text: "Classify surface defects, dimension variations, visual abnormalities, and quality issues using trained AI models.",
  },
  {
    image: "/auto-grading.png",
    title: "Automated Grading & Quality Analytics",
    text: "Generate quality scores, inspection summaries, and decision-ready visual evidence for plant teams.",
  },
];

const capabilities = [
  "Defect detection and classification",
  "Pipe and product tracking",
  "OCR / ID reading",
  "Red-hot coil inspection",
  "Edge AI deployment",
  "Camera integration",
  "Visual dashboards",
  "Automated grading",
];

const experienceCards = [
  {
    title: "Iron & Steel",
    media: [
      {
        image: "/red_hot_coil.jpeg",
        alt: "Red-hot coil inspection in a steel plant",
      },
      {
        image: "/red_hot_coil2.png",
        alt: "High-temperature steel inspection result",
      },
      {
        image: "/result_red_hot_coil.png",
        alt: "AI result view for red-hot coil inspection",
      },
    ],
    bullets: [
      "High-temperature inspection for red-hot products",
      "Inline coil defect detection",
      "Defect detection in WRM and SBM environments",
      "Industrial camera and edge AI deployment",
    ],
  },
  {
    title: "Logistics & Tracking",
    video: "/pipe_detecting.mp4",
    poster: "/realtime1.jpg",
    videoLabel: "Automated product detection and tracking video",
    bullets: [
      "Product detection and tracking",
      "Slab / product ID reading",
      "Material movement visibility",
      "Automated visual traceability",
    ],
  },
  {
    title: "Quality Grading",
    media: [
      {
        image: "/auto-grading.png",
        alt: "Automated visual quality grading dashboard",
      },
      {
        image: "/multy-detection1.png",
        alt: "AI multi-defect classification result",
      },
      {
        image: "/defects.png",
        alt: "Surface defect detection evidence",
      },
    ],
    bullets: [
      "Automated grading",
      "Visual quality analytics",
      "Product classification",
      "Inspection report support",
    ],
  },
  {
    title: "Secondary Example: Tea Leaves",
    media: [
      {
        image: "/tea_leaves.png",
        alt: "Tea leaves visual quality inspection",
      },
      {
        image: "/tea1.png",
        alt: "Tea leaves image classification sample",
      },
      {
        image: "/t-leaves.png",
        alt: "Tea leaves grade visual sample",
      },
    ],
    bullets: [
      "Image-based quality prediction",
      "Visual product classification",
      "High-resolution camera assessment",
      "Edge AI processing for fast decisions",
    ],
  },
];

const flowSteps = [
  "Industrial camera captures image/video",
  "Edge AI model detects object or defect",
  "System tracks product and classifies quality",
  "Dashboard shows alerts, images, trends, and reports",
  "Plant team takes faster corrective action",
];

const businessValue = [
  "Reduce manual inspection dependency",
  "Improve defect visibility",
  "Improve traceability",
  "Reduce rework and quality losses",
  "Support faster quality decisions",
  "Enable visual evidence and reporting",
];

const renderExperienceMedia = (card) => {
  if (card.video) {
    return (
      <video
        src={card.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={card.poster}
        aria-label={card.videoLabel}
      />
    );
  }

  return (
    <Swiper
      className="product-experience-carousel"
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      speed={650}
      loop={card.media.length > 1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      aria-label={`${card.title} media carousel`}
    >
      {card.media.map((media) => (
        <SwiperSlide key={media.image}>
          <img src={media.image} alt={media.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const VisionAI = () => {
  return (
    <div className="vision-ai-container product-page">
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
          <source src="/vision_ai.webm" type="video/webm" />
        </video>
        <div className="product-hero-overlay" />

        <div className="product-inner product-hero-content">
          <p className="product-kicker">VisionAI</p>
          <h1 className="product-hero-title">
            Industrial Computer Vision for Quality, Tracking, and
            High-Temperature Inspection
          </h1>
          <p className="product-hero-text">
            VisionAI helps manufacturing plants detect defects, track products,
            read IDs, automate grading, and improve visual quality control using
            industrial cameras, edge AI, and real-time analytics.
          </p>

          <div className="product-chip-list" aria-label="VisionAI capabilities">
            {heroChips.map((chip) => (
              <span className="product-chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>

          <div className="product-hero-actions">
            <Link className="product-button product-button-primary" to="/contact">
              Contact for Demo
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
      </header>

      <main>
        <section className="product-section">
          <div className="product-inner">
            <div className="product-section-header">
              <p className="product-kicker">Product Overview</p>
              <h2>What VisionAI Solves</h2>
              <p>
                Manual inspection and delayed quality feedback create defects,
                rework, missed traceability, and production losses. VisionAI
                brings real-time visual intelligence to the production line so
                teams can identify defects, track material movement, and take
                faster quality decisions.
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

        <section className="product-section">
          <div className="product-inner">
            <div className="product-section-header">
              <p className="product-kicker">Experience</p>
              <h2>Our VisionAI Experience</h2>
              <p>
                Practical deployment experience across high-temperature steel
                environments, material tracking, and automated visual grading.
              </p>
            </div>

            <div className="product-experience-grid">
              {experienceCards.map((card) => (
                <article className="product-experience-card" key={card.title}>
                  <div className="product-experience-media">
                    {renderExperienceMedia(card)}
                  </div>
                  <div className="product-experience-content">
                    <h3>{card.title}</h3>
                    <ul>
                      {card.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="product-section product-section-panel">
          <div className="product-inner">
            <div className="product-section-header">
              <p className="product-kicker">System Flow</p>
              <h2>How VisionAI Works</h2>
            </div>

            <div className="product-flow">
              {flowSteps.map((step, index) => (
                <article className="product-flow-step" key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </article>
              ))}
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
              <h2>Want to improve visual quality control?</h2>
              <p>
                Talk to V-OptimAIse about your inspection, tracking, OCR, or
                high-temperature VisionAI use case.
              </p>
              <div className="product-hero-actions">
                <Link className="product-button product-button-primary" to="/contact">
                  Contact for Demo
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

export default VisionAI;
