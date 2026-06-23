import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./ContactUs.css";

const interestOptions = [
  "VisionAI",
  "AI Co-Operate",
  "IIoT + AI/ML",
  "Hot-metal level measurement",
  "Conveyor / coke carrier flow measurement",
  "Other",
];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  industry: "",
  productInterest: "",
  message: "",
};

const ContactUs = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.productInterest) {
      newErrors.productInterest = "Product interest is required";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage("");

    if (!validate()) return;

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey =
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY ||
      process.env.REACT_APP_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !publicKey) {
      setStatusMessage(
        "Contact form configuration is missing. Please email info@v-optimai.com.",
      );
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          industry: formData.industry,
          productInterest: formData.productInterest,
          message: formData.message,
        },
        publicKey,
      )
      .then(
        () => {
          setStatusMessage("Your message has been sent successfully.");
          setFormData(initialFormData);
        },
        (error) => {
          setStatusMessage("Failed to send message. Please try again.");
          console.error("EmailJS error:", error);
        },
      );
  };

  return (
    <>
      <Navbar />

      <main className="contact-page">
        <section className="contact-hero" aria-labelledby="contact-title">
          <div className="contact-inner">
            <p className="contact-kicker" data-aos="fade-up">
              Contact
            </p>
            <h1 id="contact-title" data-aos="fade-up" data-aos-delay="100">
              Contact V-OptimAIse
            </h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Discuss your industrial AI, vision inspection, or
              IIoT + AI/ML use case.
            </p>
          </div>
        </section>

        <section className="contact-body" aria-labelledby="contact-form-title">
          <div className="contact-inner">
            <div className="contact-card" data-aos="fade-up">
              <div className="contact-card-info">
                <p className="contact-kicker">Start a discussion</p>
                <h2 id="contact-form-title">
                  Discuss Your Industrial AI or Measurement Use Case
                </h2>
                <p>
                  Share your plant challenge. Our team will review the use case
                  and suggest the most suitable solution approach across
                  VisionAI, AI Co-Operate, and IIoT + AI/ML.
                </p>

                <div className="contact-highlights" aria-label="Solution areas">
                  <span>VisionAI</span>
                  <span>AI Co-Operate</span>
                  <span>IIoT + AI/ML</span>
                </div>

                <div className="contact-info-list" aria-label="Contact details">
                  <a href="mailto:info@v-optimai.com">
                    <span>Email</span>
                    info@v-optimai.com
                  </a>
                  <a href="tel:+918008052428">
                    <span>Office</span>
                    +91 8008052428
                  </a>
                  <a href="tel:+447407137094">
                    <span>Cell</span>
                    +44 7407137094
                  </a>
                  <p>
                    <span>Location</span>
                    KALPATARU COE, UKKUNAGARAM, VISAKAPATANAM, INDIA
                  </p>
                </div>
              </div>

              <form
                className="contact-card-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                  {errors.name && <div className="error">{errors.name}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your work email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                  {errors.email && <div className="error">{errors.email}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter phone or WhatsApp number"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={handleChange}
                    autoComplete="organization"
                  />
                  {errors.company && (
                    <div className="error">{errors.company}</div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="industry">Industry</label>
                  <input
                    type="text"
                    id="industry"
                    name="industry"
                    placeholder="Steel, coke oven, rolling mill, energy, etc."
                    value={formData.industry}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="productInterest">Product Interest</label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                  >
                    <option value="">Select an area</option>
                    {interestOptions.map((option) => (
                      <option value={option} key={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.productInterest && (
                    <div className="error">{errors.productInterest}</div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Describe your inspection, process, measurement, or monitoring challenge"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <div className="error">{errors.message}</div>
                  )}
                </div>

                <button type="submit" className="contact-submit-button">
                  Submit
                </button>

                {statusMessage && (
                  <div className="popup" role="status" aria-live="polite">
                    {statusMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactUs;
