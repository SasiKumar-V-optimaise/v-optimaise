import React, { useRef, useEffect } from "react";
import "./Timeline.css";

const steps = [
  {
    title: "Prelim Data Acquisition",
    text: `We start with analysing the existing plant data and identify our requirements, design preliminary approaches.`,
  },
  {
    title: "Consultation with Technical team",
    text: `Results are discussed with the technical team and consolidate our findings.`,
  },
  {
    title: "Data Analysis & PLC Connection",
    text: `Serve recommendations in the first phase and procure the post-hoc data for further analysis.`,
  },
  {
    title: "GUI development, Realtime ML Analytics",
    text: `Implement Machine Learning or Reinforcement Learning based analytics using a numerical process simulator.`,
  },
  {
    title: "Deployment & Testing",
    text: `Deploy the product; get real-time operation stats and showcase the savings. Continue with CI/CD and maintenance of the model.`,
  },
];

const Timeline =() => {
  const lineWrapperRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const isSyncing = useRef(false);

  useEffect(() => {
    const syncScroll = (source, target) => {
      if (isSyncing.current) return;
      isSyncing.current = true;
      target.scrollLeft = source.scrollLeft;
      requestAnimationFrame(() => (isSyncing.current = false));
    };

    const onLineScroll = () =>
      syncScroll(lineWrapperRef.current, cardsWrapperRef.current);
    const onCardsScroll = () =>
      syncScroll(cardsWrapperRef.current, lineWrapperRef.current);

    const lineEl = lineWrapperRef.current;
    const cardsEl = cardsWrapperRef.current;
    lineEl.addEventListener("scroll", onLineScroll);
    cardsEl.addEventListener("scroll", onCardsScroll);

    return () => {
      lineEl.removeEventListener("scroll", onLineScroll);
      cardsEl.removeEventListener("scroll", onCardsScroll);
    };
  }, []);

  return (
    <div className="timeline-container">
      <h2 className="timeline-header">How we operate?</h2>

      <div ref={lineWrapperRef} className="scroll-wrapper timeline-wrapper">
        <div className="timeline-line">
          {steps.map((step, idx) => (
            <div key={idx} className="timeline-step">
              <div
                className={`circle ${idx === steps.length - 1 ? "empty" : ""}`}
              />
              <span className="step-title">{step.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={cardsWrapperRef}
        className="scroll-wrapper cards-container-wrapper"
      >
        <div className="cards-container">
          {steps.map((step, idx) => (
            <div key={idx} className="card">
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline