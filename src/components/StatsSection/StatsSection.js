import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import "./StatsSection.css";

const statsData = [
  {
    value: 50,
    suffix: "k+",
    label: (
      <>
        Tonnes CO<sub>2</sub> Saved
      </>
    ),
    ariaLabel: "50k plus tonnes CO2 saved",
  },
  {
    value: 20,
    suffix: "k+",
    label: "Tonnes Material Saved",
    ariaLabel: "20k plus tonnes material saved",
  },
  {
    value: 4,
    suffix: "M+",
    label: "Tonnes Production Impacted",
    ariaLabel: "4 million plus tonnes production impacted",
  },
  {
    value: 7.5,
    suffix: "k+",
    label: "Trees Equivalent",
    ariaLabel: "7.5k plus trees equivalent",
  },
];

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="stats-section"
      aria-labelledby="industrial-impact-title"
    >
      <div className="stats-header" data-aos="fade-up">
        <p>Industrial impact</p>
        <h2 id="industrial-impact-title">
          Industrial Impact Through AI, Vision, and Measurement
        </h2>
      </div>

      <div className="stats-grid">
        {statsData.map((item, index) => (
          <article
            className="stat-box"
            key={item.ariaLabel}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="stat-value" aria-label={item.ariaLabel}>
              {shouldAnimate ? (
                <CountUp
                  start={0}
                  end={item.value}
                  duration={8}
                  decimals={item.value % 1 !== 0 ? 1 : 0}
                />
              ) : (
                item.value.toFixed(item.value % 1 !== 0 ? 1 : 0)
              )}
              <span className="stat-suffix">{item.suffix}</span>
            </h3>
            <p className="stat-label">{item.label}</p>
          </article>
        ))}
      </div>

      <p className="stats-note">
        Impact metrics based on internal project estimates.
      </p>
    </section>
  );
};

export default StatsSection;
