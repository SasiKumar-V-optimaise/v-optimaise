import React from "react";
import "./BlogPage.css";

const gradients = [
  { bg: ["#fdde91", "#f3d200"], hover: ["#f97316", "#ffaf11"] },
  { bg: ["#fdde91", "#f3d200"], hover: ["#f97316", "#ffaf11"] },
  { bg: ["#fdde91", "#f3d200"], hover: ["#f97316", "#ffaf11"] },
];

const blogData = [
    {
    title: "AI CoOperate – Real-Time Process Intelligence",
    description:
      "Discover how AI CoOperate transforms live operational data into verified, actionable recommendations—enhancing process stability, improving traceability, and enabling controlled automation across manufacturing environments.",
  },
  {
    title: "From Inspection to Intelligent Quality Control",
    description:
      "Discover how VisionAI turns live production imagery into accurate defect insights and operator-ready quality decisions. Powered by advanced machine vision and edge AI processing, it ensures consistent inspection accuracy, reduced manual intervention, and improved quality control across demanding industrial environments.",
  },
  {
    title: "Operator 2.0 – Intelligent Human-in-the-Loop Control",
    description:
      "Empower operators with continuous monitoring, anomaly detection, and safe optimization insights—driven by agentic AI and built for controlled, traceable automation.",
  },

];

const BlogPage = () => (
  <div className="blog-container">
    <h1 className="blog-title">
     <span className="blog-title-span"> Forging the Future: </span> Stories Where AI Meets Industry
    </h1>
    <div className="card-container">
      {blogData.map((card, index) => {
        const { bg, hover } = gradients[index % gradients.length];
        return (
          <div
            className="blog-card group"
            key={index}
            style={{
              "--bg-start": bg[0],
              "--bg-end": bg[1],
              "--hover-start": hover[0],
              "--hover-end": hover[1],
            }}
          >
            <span className="bg-circle" />
            <div className="card-content">
              <span className="icon-circle">
                <svg
                  className="card-icon"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div className="card-text">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
              {/* <div className="card-link">
                <p>
                  <span>Read More →</span>
                </p>
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default BlogPage;
