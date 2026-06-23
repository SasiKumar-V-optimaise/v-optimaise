import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { storeProducts } from "./storeData";
import "./Store.css";

const ProductList = ({ title, items }) => (
  <section className="store-detail-panel">
    <h2>{title}</h2>
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </section>
);

const ProductTextPanel = ({ kicker, title, text }) => (
  <section className="store-detail-overview">
    <p className="store-kicker">{kicker}</p>
    <h2>{title}</h2>
    <p>{text}</p>
  </section>
);

const DeploymentArchitecture = ({ layers }) => (
  <section className="store-detail-panel store-architecture-panel">
    <h2>Deployment Architecture</h2>
    <div className="store-architecture-visual" aria-label="Deployment architecture layers">
      {layers.map((layer, index) => (
        <div className="store-architecture-step" key={layer}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{layer}</p>
        </div>
      ))}
    </div>
  </section>
);

const ProductOverview = () => {
  const { productId } = useParams();
  const product = storeProducts.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="store-page">
        <Navbar />
        <main className="store-not-found">
          <div className="store-inner">
            <div className="store-not-found-card">
              <p className="store-kicker">Product Not Found</p>
              <h1>We could not find that store product.</h1>
              <p>
                The product may have moved, or the link may be incorrect. Browse
                the Store to find the current solution catalog.
              </p>
              <Link className="store-button store-button-primary" to="/store">
                Back to Store
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="store-page">
      <Navbar />

      <main>
        <header className="store-detail-hero">
          <div className="store-inner store-detail-hero-grid">
            <div className="store-detail-copy">
              <p className="store-kicker">{product.category}</p>
              <h1>{product.name}</h1>
              <p>{product.shortDescription}</p>
              <div className="store-tag-list" aria-label={`${product.name} tags`}>
                {product.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="store-detail-actions">
                <Link className="store-button store-button-primary" to="/contact">
                  Request Consultation
                </Link>
                <Link className="store-button store-button-secondary" to="/contact">
                  Discuss Custom Requirement
                </Link>
              </div>
            </div>

            <div className="store-detail-media">
              <img src={product.image} alt={`${product.name} visual`} />
            </div>
          </div>
        </header>

        <section className="store-section">
          <div className="store-inner store-detail-layout">
            <ProductTextPanel
              kicker="Problem Statement"
              title="Industrial Challenge"
              text={product.problemStatement}
            />

            <ProductTextPanel
              kicker="Solution Overview"
              title="Engineered Solution"
              text={product.solutionOverview}
            />
          </div>
        </section>

        <section className="store-section store-section-panel">
          <div className="store-inner store-detail-grid">
            <ProductList title="Key Features" items={product.keyFeatures} />
            <ProductList title="Typical Applications" items={product.applications} />
            <ProductList title="Benefits" items={product.benefits} />
          </div>
        </section>

        <section className="store-section">
          <div className="store-inner store-detail-grid">
            <ProductList title="Deliverables" items={product.deliverables} />
            <DeploymentArchitecture layers={product.deploymentArchitecture} />
            <ProductList title="Industries Served" items={product.industriesServed} />
          </div>
        </section>

        <section className="store-section">
          <div className="store-inner">
            <div className="store-cta">
              <p className="store-kicker">Next Step</p>
              <h2>Need this solution adapted for your plant?</h2>
              <p>
                Share your site context, process area, and deployment goal. The
                V-OptimAIse team can map the right demo or feasibility path.
              </p>
              <div className="store-detail-actions">
                <Link className="store-button store-button-primary" to="/contact">
                  Request Consultation
                </Link>
                <Link className="store-button store-button-secondary" to="/contact">
                  Discuss Custom Requirement
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

export default ProductOverview;
