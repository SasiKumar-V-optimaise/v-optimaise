import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ScanSearch,
  Bot,
  Radio,
  CircleCheck,
  TriangleAlert,
} from "lucide-react";
import "./SolutionCards.css";

const productCategories = [
  {
    id: "vision-ai",
    title: "VisionAI",
    badge: "Computer Vision",
    description:
      "Real-time industrial vision for defect detection, object tracking, OCR/ID reading, automated grading, and high-temperature quality inspection.",
    bullets: [
      "Defect detection",
      "Product tracking",
      "OCR / ID reading",
      "Edge AI camera systems",
    ],
    buttonLabel: "View VisionAI",
    link: "/productspage/vision-ai",
    image: "/vision_ai_logo.png",
    icon: ScanSearch,
    preview: "vision",
  },
  {
    id: "ai-cooperate",
    title: "AI Co-Operate",
    badge: "Agentic AI",
    description:
      "Multi-agent intelligence that monitors plant data, detects anomalies, explains root causes, and provides safe operator-ready recommendations.",
    bullets: [
      "Blast furnace intelligence",
      "Hot metal pouring optimization",
      "Energy and process optimization",
      "Shift reports and AI assistant",
    ],
    buttonLabel: "View AI Co-Operate",
    link: "/productspage/cooperate",
    image: "/Agentic_Ai.webp",
    icon: Bot,
    preview: "agent",
  },
  {
    id: "iiot-ai-ml",
    title: "IIoT + AI/ML",
    badge: "Sensors + Analytics",
    description:
      "Sensor-connected AI/ML systems for level measurement, flow monitoring, predictive analytics, dashboards, and industrial automation.",
    bullets: [
      "Hot-metal level measurement",
      "Laser and radar technologies",
      "Conveyor and coke carrier volumetric flow",
      "Harsh environment monitoring",
    ],
    buttonLabel: "View IIoT + AI/ML",
    link: "/productspage/smart-factory",
    image: "/Iiot.webp",
    icon: Radio,
    preview: "iiot",
  },
];



const VisionPreview = () => {
  const stageRef = useRef(null);
  const [pos, setPos] = useState(50);        // % divider position
  const [auto, setAuto] = useState(true);
  const dragging = useRef(false);
  const dir = useRef(1);
  const idle = useRef(null);

  // auto-sweep loop
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
  const onMove = (e) => dragging.current && setPos(pointerPos(e));
  const onUp = () => {
    dragging.current = false;
    clearTimeout(idle.current);
    idle.current = setTimeout(() => setAuto(true), 4000);
  };

  useEffect(() => {
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

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
  vision: VisionPreview,
  agent: AgentPreview,
  iiot: IiotPreview,
};

const SolutionCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = productCategories[activeIndex];
  const ActivePreview = previewComponents[active.preview];

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

        <div
          id={`product-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`product-tab-${active.id}`}
          className="product-showcase-panel"
          key={active.id}
        >
          <div className="product-showcase-content">
            <img
              src={active.image}
              alt=""
              className="product-showcase-icon"
              loading="lazy"
            />
            <h3>{active.title}</h3>
            <p className="product-showcase-description">
              {active.description}
            </p>

            <ul>
              {active.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <Link className="product-card-link" to={active.link}>
              {active.buttonLabel}
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div className="product-showcase-visual" aria-hidden="true">
            <ActivePreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionCards;