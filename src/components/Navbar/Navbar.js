import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import "./Navbar.css";

const productLinks = [
  { label: "VisionAI", to: "/productspage/vision-ai" },
  { label: "AI Co-Operate", to: "/productspage/cooperate" },
  { label: "IIoT + AI/ML", to: "/productspage/smart-factory" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setProductsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const productRouteActive = productLinks.some(
    (product) => product.to === location.pathname,
  );

  return (
    <nav className="navbar-sp" aria-label="Primary navigation">
      <NavLink to="/" className="navbar-left" onClick={closeMenu}>
        <img
          src="/company-logo.png"
          alt="V-OptimAIse Climate Tech Solutions logo"
          className="logo"
        />
        <span className="v-optimAIse">V-OptimAIse</span>
      </NavLink>

      <button
        type="button"
        className="menu-icons"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((current) => !current)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <div
          className={`navbar-products ${productsOpen ? "open" : ""}`}
          onMouseEnter={() => setProductsOpen(true)}
          onMouseLeave={() => setProductsOpen(false)}
        >
          <button
            type="button"
            className={`nav-btn-link navbar-product-trigger ${
              productRouteActive ? "active" : ""
            }`}
            aria-expanded={productsOpen}
            onClick={() => setProductsOpen((current) => !current)}
          >
            Products
            <ChevronDown size={16} aria-hidden="true" />
          </button>

          <div className="navbar-product-menu">
            {productLinks.map((product) => (
              <NavLink to={product.to} key={product.to} onClick={closeMenu}>
                {product.label}
              </NavLink>
            ))}
          </div>
        </div>

        <NavLink to="/customers" onClick={closeMenu}>
          Customers
        </NavLink>
        <NavLink to="/store" onClick={closeMenu}>
          Store
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
