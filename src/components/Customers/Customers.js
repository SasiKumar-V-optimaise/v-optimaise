import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import StatsSection from "../StatsSection/StatsSection";
import "./Customers.css";

const experienceAreas = [
  "Blast furnace intelligence",
  "Product detection and tracking",
  "High-Temperature Object Inspection and Defect Detection",
  "Hot-metal level measurement",
  "Conveyor and coke carrier volumetric flow",
  "Energy and process optimization",
  "Industrial dashboards and reports",
];

const clientValues = [
  "Quality inspection accuracy",
  "Material tracking and visibility",
  "Process stability",
  "Operator decision-making",
  "Energy intensity",
  "Measurement reliability",
  "Sustainability performance",
];

const customerLogos = [
  {
    name: "Evonith Steel",
    logo: "/Evonith_logo-removebg-preview.webp",
     engagement: "AI Co-Operate for blast furnace process intelligence",
  },
  {
    name: "Electrosteel",
    logo: "/Electrosteel_1-removebg-preview.webp",
    engagement: "VisionAI for product detection, tracking, and grading",
  },
  {
    name: "RINL Vizag Steel",
    logo: "/RINL_1-removebg-preview.webp",
    engagement: "VisionAI for coil in linedefect detection at high temperature and IIoT + AI/ML for hot-metal level measurement and flow monitoring",
  },
  {
    name: "Kalika Steels",
    logo: "/kalika-steels-logo.webp",
    engagement: "",
  },
  {
    name: "British Steel",
    logo: "/British_Steel_logo_2016.svg",
    engagement: "",
  },
];

const Customers = () => {
  return (
    <>
      <Navbar />

      <main className="customers-page">
        <section className="customers-hero" aria-labelledby="customers-title">
          <div className="customers-inner">
            <p className="customers-kicker" data-aos="fade-up">Customers</p>
            <h1 id="customers-title" data-aos="fade-up" data-aos-delay="100">Our Customers &amp; Industrial Experience</h1>
            <p data-aos="fade-up" data-aos-delay="200">
              V-OptimAIse works with steel and heavy-manufacturing environments
              where quality, process stability, safety, and measurement accuracy
              matter.
            </p>
          </div>
        </section>

        <section className="customers-trust" aria-labelledby="trust-title">
          <div className="customers-inner" data-aos="fade-up">
            <p className="customers-kicker">Trusted environments</p>
            <h2 id="trust-title">
              Trusted across steel and heavy manufacturing environments
            </h2>
            <p>
              Our work is centered on practical plant conditions, from hot,
              dusty process zones to production lines where inspection speed,
              measurement reliability, and operational visibility are critical.
            </p>
          </div>
        </section>

        <section className="customers-logos-section" aria-labelledby="customer-logos-title">
          <div className="customers-inner">
            <div className="customers-section-heading" data-aos="fade-up">
              <p className="customers-kicker">Deployed across</p>
              <h2 id="customer-logos-title">Steel and Heavy-Manufacturing Producers</h2>
            </div>

            <div className="customers-logo-grid">
              {customerLogos.map((customer, index) => (
                <article
                  className="customers-logo-card"
                  key={customer.name}
                  data-aos="fade-up"
                  data-aos-delay={(index % 5) * 80}
                >
                  <div className="customers-logo-mark">
                    <img
                      src={customer.logo}
                      alt={`${customer.name} logo`}
                      loading="lazy"
                    />
                  </div>
                  <p className="customers-logo-name">{customer.name}</p>
                  <p className="customers-logo-engagement">
                    {customer.engagement}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="customers-section" aria-labelledby="experience-areas-title">
          <div className="customers-inner">
            <div className="customers-section-heading" data-aos="fade-up">
              <p className="customers-kicker">Experience areas</p>
              <h2 id="experience-areas-title">Industrial Use Cases We Understand</h2>
            </div>

            <div className="customers-card-grid">
              {experienceAreas.map((area, index) => (
                <article
                  className="customers-card"
                  key={area}
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 100}
                >
                  <h3>{area}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="customers-section value-section" aria-labelledby="client-value-title">
          <div className="customers-inner">
            <div className="customers-section-heading" data-aos="fade-up">
              <p className="customers-kicker">Client value</p>
              <h2 id="client-value-title">What We Help Clients Improve</h2>
            </div>

            <div className="customers-card-grid">
              {clientValues.map((value, index) => (
                <article
                  className="customers-card value-card"
                  key={value}
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 100}
                >
                  <h3>{value}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <StatsSection />

        <section className="customers-cta" aria-labelledby="customers-cta-title">
          <div className="customers-inner" data-aos="zoom-in">
            <h2 id="customers-cta-title">Want to discuss a similar use case?</h2>
            <Link className="customers-cta-button" to="/contact">
              Contact for Demo
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Customers;