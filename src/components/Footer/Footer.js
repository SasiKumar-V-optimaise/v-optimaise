import { Link } from "react-router-dom";
import {
  SiGmail,
  SiLinkedin,
  SiWhatsapp,
  SiYoutube,
} from "react-icons/si";
import "./Footer.css";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "VisionAI", to: "/productspage/vision-ai" },
  { label: "AI Co-Operate", to: "/productspage/cooperate" },
  { label: "IIoT + AI/ML", to: "/productspage/smart-factory" },
  { label: "Customers", to: "/customers" },
  { label: "Store", to: "/store" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <img
            src="/company-logo.png"
            alt="V-OptimAIse Climate Tech Solutions logo"
            className="footer-logo"
          />
          <h2 className="company-name">
            <span className="v-optimAIse">V-OptimAIse</span>
          </h2>
          <p>VOPTIMAISE CLIMATE TECH SOLUTIONS</p>
          <p>Office: +91 8008052428 | Cell: +44 7407137094</p>
          <p>
            <a
              href="https://maps.app.goo.gl/ZmLQjNWhFWdTC9Ee9?g_st=awb"
              target="_blank"
              rel="noopener noreferrer"
              className="company-address"
            >
              KALPATARU COE, UKKUNAGARAM, VISAKAPATANAM, INDIA
            </a>
          </p>
        </div>

        <div className="right-part">
          <div className="footer-right">
            <h3>Quick Links</h3>
            <ul className="footer-nav-links">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} onClick={scrollToTop}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-right-social">
            <h3>Follow Us</h3>
            <ul className="wrapper">
              <li className="icon youtube">
                <a
                  href="https://youtube.com/@v-optimai-aiforabetterfuture?si=t7z7eo0U3n6OhzQy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="tooltip">YouTube</span>
                  <SiYoutube size={24} />
                </a>
              </li>

              <li className="icon linkedin">
                <a
                  href="https://www.linkedin.com/company/voptimaiseclimatetechsolutions/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="tooltip">LinkedIn</span>
                  <SiLinkedin size={24} />
                </a>
              </li>

              <li className="icon gmail">
                <a href="mailto:info@v-optimai.com">
                  <span className="tooltip">Gmail</span>
                  <SiGmail size={24} />
                </a>
              </li>

              <li className="icon whatsapp">
                <a
                  href="https://wa.me/9176489658"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="tooltip">WhatsApp</span>
                  <SiWhatsapp size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright {new Date().getFullYear()} VOPTIMAISE CLIMATE TECH
          SOLUTIONS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
