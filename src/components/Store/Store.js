import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  storeCategories,
  storeCategoryDescriptions,
  storeProducts,
} from "./storeData";
import "./Store.css";

const allCategory = "All";

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState(allCategory);
  const categories = [allCategory, ...storeCategories];

  const categoryCounts = useMemo(() => {
    return storeProducts.reduce(
      (counts, product) => ({
        ...counts,
        [product.category]: (counts[product.category] || 0) + 1,
      }),
      { [allCategory]: storeProducts.length },
    );
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === allCategory) {
      return storeProducts;
    }

    return storeProducts.filter(
      (product) => product.category === selectedCategory,
    );
  }, [selectedCategory]);

  return (
    <div className="store-page">
      <Navbar />

      <main>
        <header className="store-hero">
          <img
            className="store-hero-media"
            src="/steelbackground.webp"
            alt=""
            aria-hidden="true"
          />
          <div className="store-hero-overlay" />
          <div className="store-inner store-hero-content">
            <p className="store-kicker">Industrial Technology Solutions Catalog</p>
            <h1>Industrial Technology Solutions</h1>
            <p>
              AI, Vision Systems, Radar, Laser Instrumentation, Industrial
              Sensors, and Custom Engineering Solutions for Extreme Industrial
              Environments.
            </p>
          </div>
        </header>

        <section className="store-section" aria-labelledby="store-categories">
          <div className="store-inner">
            <div className="store-section-header">
              <p className="store-kicker">Solution Families</p>
              <h2 id="store-categories">Browse industrial technology areas</h2>
            </div>

            <div className="store-category-grid">
              {categories.map((category) => {
                const categoryDescription =
                  storeCategoryDescriptions[category] ||
                  "Explore deployable and custom-engineered industrial technology solutions.";

                return (
                  <button
                    type="button"
                    className={`store-category-card ${
                      selectedCategory === category ? "active" : ""
                    }`}
                    key={category}
                    aria-pressed={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <span>{category}</span>
                    <p>{categoryDescription}</p>
                    <strong>{categoryCounts[category] || 0}</strong>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="store-section store-products-section">
          <div className="store-inner">
            <div className="store-results-bar">
              <div>
                <p className="store-kicker">Solutions</p>
                <h2>{selectedCategory}</h2>
              </div>
              <span>
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "solution" : "solutions"}
              </span>
            </div>

            <div className="store-product-grid">
              {filteredProducts.map((product) => (
                <article className="store-product-card" key={product.id}>
                  <div className="store-product-media">
                    <img src={product.image} alt={`${product.name} visual`} />
                    <span>{product.category}</span>
                  </div>
                  <div className="store-product-content">
                    <h3>{product.name}</h3>
                    <p>{product.shortDescription}</p>
                    <div className="store-tag-list" aria-label={`${product.name} tags`}>
                      {product.tags.slice(0, 4).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <Link
                      className="store-button store-button-primary"
                      to={`/store/${product.id}`}
                    >
                      View Product
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Store;
