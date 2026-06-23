import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ScanSearch,
  Bot,
  Radio,
  CircleCheck,
  TriangleAlert,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./SolutionCards.css";

const CAROUSEL_AUTOPLAY_MS = 3000;

const productCategories = [
  {
    id: "vision-ai",
    title: "VisionAI",
    badge: "Computer Vision",
    buttonLabel: "View VisionAI",
    link: "/productspage/vision-ai",
    image: "/vision_ai_logo.png",
    icon: ScanSearch,
    slides: [
      {
        id: "ai-defect-detection",
        title: "AI Defect Detection",
        description:
          "Detect surface defects, cracks, dents, scratches, and manufacturing anomalies in real time using advanced computer vision models.",
        bullets: [
          "Surface defect detection",
          "Crack and dent identification",
          "Quality grading automation",
          "Real-time inspection",
        ],
        visualType: "vision-defect",
      },
      {
        id: "production-detection-tracking",
        title: "Production Detection & Tracking",
        description:
          "Track products, assets, and material movement throughout the production line with AI-powered object detection and tracking.",
        bullets: [
          "Object detection",
          "Product counting",
          "Conveyor tracking",
          "Production flow visibility",
        ],
        visualType: "production-tracking",
      },
      {
        id: "operator-performance-monitoring",
        title: "Operator Performance Monitoring",
        description:
          "Monitor workforce productivity, safety compliance, and operational efficiency using AI-powered activity recognition.",
        bullets: [
          "Productivity analytics",
          "PPE compliance monitoring",
          "Task completion tracking",
          "Workforce insights",
        ],
        visualType: "operator-monitoring",
      },
    ],
  },
  {
    id: "ai-cooperate",
    title: "AI Co-Operate",
    badge: "Agentic AI",
    buttonLabel: "View AI Co-Operate",
    link: "/productspage/cooperate",
    image: "/Agentic_Ai.webp",
    icon: Bot,
    slides: [
      {
        id: "ai-cooperate-overview",
        title: "AI Co-Operate",
        description:
          "Multi-agent intelligence that monitors plant data, detects anomalies, explains root causes, and provides safe operator-ready recommendations.",
        bullets: [
          "Blast furnace intelligence",
          "Hot metal pouring optimization",
          "Energy and process optimization",
          "Shift reports and AI assistant",
        ],
        visualType: "agent",
      },
    ],
  },
  {
    id: "industrial-intelligence",
    title: "Industrial Intelligence Platform",
    badge: "Connected Operations",
    buttonLabel: "View Industrial Intelligence Platform",
    link: "/productspage/smart-factory",
    image: "/Iiot.webp",
    icon: Radio,
    slides: [
      {
        id: "industrial-intelligence-overview",
        title: "Industrial Intelligence Platform",
        description:
          "Connected industrial intelligence for sensor data, AI/ML analytics, level measurement, flow monitoring, predictive insights, dashboards, and automation.",
        bullets: [
          "Hot-metal level measurement",
          "Laser and radar technologies",
          "Conveyor and coke carrier volumetric flow",
          "Harsh environment monitoring",
        ],
        visualType: "industrial-intelligence",
      },
    ],
  },
];

const trackedProducts = [
  { id: "one", label: "P-041" },
  { id: "two", label: "P-042" },
  { id: "three", label: "P-043" },
];

const operatorMetrics = [
  { id: "productivity", label: "Productivity", value: "92%" },
  { id: "ppe", label: "PPE compliance", value: "98%" },
  { id: "cycle", label: "Cycle adherence", value: "87%" },
];

const wrapSlideIndex = (index, total) => (index + total) % total;



const VisionPreview = () => {
  const stageRef = useRef(null);
  const [pos, setPos] = useState(50);
  const [auto, setAuto] = useState(true);
  const dragging = useRef(false);
  const dir = useRef(1);
  const idle = useRef(null);

  useEffect(() => {
    let raf;
    const tick = () => {
      if (auto && !dragging.current) {
        setPos((p) => {
          let next = p + dir.current * 0.35;
          if (next > 92) dir.current = -1;
          if (next < 8) dir.current = 1;
          return next;
        });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [auto]);

  const pointerPos = useCallback((e) => {
    const r = stageRef.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
    return Math.max(2, Math.min(98, (x / r.width) * 100));
  }, []);

  const onDown = (e) => {
    dragging.current = true;
    setAuto(false);
    setPos(pointerPos(e));
  };

  const onMove = useCallback(
    (e) => {
      if (dragging.current) setPos(pointerPos(e));
    },
    [pointerPos]
  );

  const onUp = useCallback(() => {
    dragging.current = false;
    clearTimeout(idle.current);
    idle.current = setTimeout(() => setAuto(true), 4000);
  }, []);

  useEffect(() => {
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      clearTimeout(idle.current);
    };
  }, [onMove, onUp]);

  // annotations: x is the % from left where the label sits; revealed once divider passes it
  const annos = [
    { x: 10, top: 22, kind: "ok", label: "Surface OK · 99.4%" },
    { x: 69, top: 60, kind: "alert", label: "Crack 0.4mm · 96.1%" },
  ];

  return (
    <div className="preview-frame preview-vision">
      <div
        className="va-stage"
        ref={stageRef}
        onPointerDown={onDown}
        style={{ "--pos": `${pos}%` }}
      >
        {/* RAW frame — swap this <img> for your real camera still */}
        <div className="va-layer va-layer--before">
          <img src="/vision-billet-raw.jpg" alt="" loading="lazy" />
        </div>

        {/* ANNOTATED frame — same image, clipped to the divider */}
        <div className="va-layer va-layer--after" style={{ "--pos": `${pos}%` }}>
          <img src="/vision-billet-raw.jpg" alt="" loading="lazy" />
          <svg className="va-boxes" viewBox="0 0 400 250" preserveAspectRatio="none" aria-hidden="true">
            <rect x="40" y="55" width="120" height="80" rx="3" fill="none" stroke="#5fc38c" strokeWidth="2" />
            <rect x="278" y="150" width="92" height="66" rx="3" fill="none" stroke="#d9823f" strokeWidth="2" />
          </svg>
          {annos.map((a) => (
            <div
              key={a.label}
              className={`va-anno va-anno--${a.kind} ${pos <= a.x + 6 ? "is-on" : ""}`}
              style={{ left: `${a.x}%`, top: `${a.top}%` }}
            >
              <span className="va-dot" />
              {a.label}
            </div>
          ))}
          <span className="va-scan" aria-hidden="true" />
        </div>

        <span className="va-tag va-tag--raw">Camera feed</span>
        <span className="va-tag va-tag--ai">VisionAI</span>
        <div className="va-divider">
          <div className="va-knob">⇄</div>
        </div>
      </div>

      <div className="preview-readout">
        <div className="preview-readout-row"><span>Frame rate</span><strong>62 fps</strong></div>
        <div className="preview-readout-row"><span>Units inspected</span><strong>18,204</strong></div>
        <div className="preview-readout-row"><span>Detection accuracy</span><strong>99.2%</strong></div>
      </div>
    </div>
  );
};

const ProductionTrackingPreview = () => (
  <div className="preview-frame preview-production">
    <div className="production-track-stage">
      <span className="production-track-label">Line A live tracking</span>
      <span className="production-track-status">Live</span>
      <div className="production-conveyor" aria-hidden="true" />
      <span className="production-scan-beam" aria-hidden="true" />

      {trackedProducts.map((product) => (
        <span
          key={`product-${product.id}`}
          className={`production-product production-product--${product.id}`}
          aria-hidden="true"
        />
      ))}

      {trackedProducts.map((product) => (
        <span
          key={`box-${product.id}`}
          className={`production-bounding-box production-bounding-box--${product.id}`}
        >
          {product.label}
        </span>
      ))}
    </div>

    <div className="preview-readout">
      <div className="preview-readout-row">
        <span>Products tracked</span>
        <strong>384</strong>
      </div>
      <div className="preview-readout-row">
        <span>Count confidence</span>
        <strong>98.7%</strong>
      </div>
      <div className="preview-readout-row">
        <span>Flow status</span>
        <strong>Live</strong>
      </div>
    </div>
  </div>
);

const OperatorMonitoringPreview = () => (
  <div className="preview-frame preview-operator">
    <div className="operator-monitor-stage">
      <div className="operator-camera-feed">
        <span className="operator-zone operator-zone--safe">PPE OK</span>
        <span className="operator-zone operator-zone--task">Task active</span>
        <span className="operator-silhouette" aria-hidden="true">
          <span className="operator-head" />
          <span className="operator-body" />
          <span className="operator-arm operator-arm--left" />
          <span className="operator-arm operator-arm--right" />
          <span className="operator-leg operator-leg--left" />
          <span className="operator-leg operator-leg--right" />
        </span>
      </div>

      <div className="operator-metrics">
        {operatorMetrics.map((metric) => (
          <div
            key={metric.id}
            className={`operator-metric operator-metric--${metric.id}`}
          >
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <em aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>

    <div className="preview-readout">
      <div className="preview-readout-row">
        <span>Safety compliance</span>
        <strong>96%</strong>
      </div>
      <div className="preview-readout-row">
        <span>Active task</span>
        <strong>Assembly</strong>
      </div>
      <div className="preview-readout-row">
        <span>Shift productivity</span>
        <strong>+12%</strong>
      </div>
    </div>
  </div>
);

const AgentPreview = () => (
  <div className="preview-frame preview-agent">
    <div className="agent-line agent-line--warn">
      <TriangleAlert size={14} aria-hidden="true" />
      <span>Furnace 3 temperature trending high</span>
    </div>
    <div className="agent-line agent-line--reco">
      <Bot size={14} aria-hidden="true" />
      <span>Recommend reducing blast airflow by 4%</span>
    </div>
    <div className="agent-line agent-line--ok">
      <CircleCheck size={14} aria-hidden="true" />
      <span>Shift report generated for 06:00–14:00</span>
    </div>
    <div className="preview-readout">
      <div className="preview-readout-row">
        <span>Anomalies caught today</span>
        <strong>7</strong>
      </div>
      <div className="preview-readout-row">
        <span>Avg. response time</span>
        <strong>1.8s</strong>
      </div>
    </div>
  </div>
);

const IiotPreview = () => (
  <div className="preview-frame preview-iiot">
    <div className="preview-iiot-bars" aria-hidden="true">
      <span style={{ height: "38%" }} />
      <span style={{ height: "64%" }} />
      <span style={{ height: "50%" }} />
      <span style={{ height: "82%" }} />
      <span style={{ height: "58%" }} />
      <span style={{ height: "91%" }} />
      <span style={{ height: "70%" }} />
    </div>
    <div className="preview-readout">
      <div className="preview-readout-row">
        <span>Hot-metal level</span>
        <strong>2.41 m</strong>
      </div>
      <div className="preview-readout-row">
        <span>Conveyor flow rate</span>
        <strong>340 t/h</strong>
      </div>
      <div className="preview-readout-row">
        <span>Sensor uptime</span>
        <strong>99.97%</strong>
      </div>
    </div>
  </div>
);

const previewComponents = {
  "vision-defect": VisionPreview,
  "production-tracking": ProductionTrackingPreview,
  "operator-monitoring": OperatorMonitoringPreview,
  agent: AgentPreview,
  "industrial-intelligence": IiotPreview,
};

const ProductContent = ({ category, slide }) => (
  <div className="product-showcase-content product-slide-content">
    <img
      src={category.image}
      alt=""
      className="product-showcase-icon"
      loading="lazy"
    />
    <h3>{slide.title}</h3>
    <p className="product-showcase-description">{slide.description}</p>

    <ul>
      {slide.bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>

    <Link className="product-card-link" to={category.link}>
      {category.buttonLabel}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  </div>
);

const CarouselControls = ({
  category,
  slides,
  activeSlideIndex,
  onPrevious,
  onNext,
  onSelect,
}) => (
  <div
    className="product-carousel-controls"
    role="group"
    aria-label={`${category.title} slides`}
  >
    <button
      type="button"
      className="product-carousel-arrow"
      onClick={onPrevious}
      aria-label={`Previous ${category.title} slide`}
    >
      <ChevronLeft size={18} aria-hidden="true" />
    </button>

    <div className="product-carousel-dots" role="group" aria-label="Slide pagination">
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          type="button"
          className={`product-carousel-dot${
            index === activeSlideIndex ? " is-active" : ""
          }`}
          onClick={() => onSelect(index)}
          aria-label={`Show ${slide.title}`}
          aria-current={index === activeSlideIndex ? "true" : undefined}
        />
      ))}
    </div>

    <button
      type="button"
      className="product-carousel-arrow"
      onClick={onNext}
      aria-label={`Next ${category.title} slide`}
    >
      <ChevronRight size={18} aria-hidden="true" />
    </button>
  </div>
);

const ProductSlideCarousel = ({ category }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideCount = category.slides.length;
  const hasMultipleSlides = slideCount > 1;
  const activeSlide = category.slides[activeSlideIndex];
  const ActivePreview = previewComponents[activeSlide.visualType] || VisionPreview;

  const goToSlide = useCallback(
    (index) => {
      setActiveSlideIndex(wrapSlideIndex(index, slideCount));
    },
    [slideCount]
  );

  const goToPreviousSlide = useCallback(() => {
    setActiveSlideIndex((current) => wrapSlideIndex(current - 1, slideCount));
  }, [slideCount]);

  const goToNextSlide = useCallback(() => {
    setActiveSlideIndex((current) => wrapSlideIndex(current + 1, slideCount));
  }, [slideCount]);

  const pauseAutoPlay = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resumeAutoPlay = useCallback((event) => {
    if (
      event?.currentTarget &&
      event.currentTarget.contains(document.activeElement)
    ) {
      return;
    }

    setIsPaused(false);
  }, []);

  const handleBlur = useCallback((event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false);
    }
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (!hasMultipleSlides) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPreviousSlide();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNextSlide();
      }
    },
    [goToNextSlide, goToPreviousSlide, hasMultipleSlides]
  );

  useEffect(() => {
    setActiveSlideIndex(0);
  }, [category.id]);

  useEffect(() => {
    if (!hasMultipleSlides || isPaused) return undefined;

    const interval = window.setInterval(goToNextSlide, CAROUSEL_AUTOPLAY_MS);
    return () => window.clearInterval(interval);
  }, [goToNextSlide, hasMultipleSlides, isPaused]);

  return (
    <div
      id={`product-panel-${category.id}`}
      role="tabpanel"
      aria-labelledby={`product-tab-${category.id}`}
      aria-roledescription={hasMultipleSlides ? "carousel" : undefined}
      aria-label={
        hasMultipleSlides ? `${category.title} product showcase` : undefined
      }
      className={`product-showcase-panel${
        hasMultipleSlides ? " has-product-carousel" : ""
      }`}
      tabIndex={hasMultipleSlides ? 0 : undefined}
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
      onFocus={pauseAutoPlay}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <ProductContent
        category={category}
        slide={activeSlide}
        key={activeSlide.id}
      />

      <div className="product-showcase-visual">
        <div
          className="product-showcase-preview"
          aria-hidden="true"
          key={activeSlide.id}
        >
          <ActivePreview />
        </div>
      </div>

      {hasMultipleSlides && (
        <CarouselControls
          category={category}
          slides={category.slides}
          activeSlideIndex={activeSlideIndex}
          onPrevious={goToPreviousSlide}
          onNext={goToNextSlide}
          onSelect={goToSlide}
        />
      )}
    </div>
  );
};

const SolutionCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = productCategories[activeIndex];

  return (
    <section
      id="product-categories"
      className="product-overview-section"
      aria-labelledby="product-overview-title"
    >
      <div className="product-overview-heading" data-aos="fade-up">
        <p className="product-overview-kicker">Product overview</p>
        <h2 id="product-overview-title">Our Product Categories</h2>
        <p>
          Three connected platforms for industrial visibility, intelligence,
          and optimization.
        </p>
      </div>

      <div className="product-showcase" data-aos="fade-up">
        <div
          className="product-showcase-tabs"
          role="tablist"
          aria-label="Product categories"
        >
          {productCategories.map((product, index) => {
            const Icon = product.icon;
            const isActive = index === activeIndex;
            return (
              <button
                key={product.id}
                id={`product-tab-${product.id}`}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`product-panel-${product.id}`}
                className={`product-showcase-tab${
                  isActive ? " is-active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="product-showcase-tab-icon">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="product-showcase-tab-text">
                  <span className="product-showcase-tab-title">
                    {product.title}
                  </span>
                  <span className="product-showcase-tab-badge">
                    {product.badge}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <ProductSlideCarousel category={active} key={active.id} />
      </div>
    </section>
  );
};

export default SolutionCards;
