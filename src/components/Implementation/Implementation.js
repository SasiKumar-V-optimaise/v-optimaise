// import React from "react";
// import {
//   FaIndustry,
//   FaDatabase,
//   FaServer,
//   FaCloud,
//   FaRobot,
//   FaArrowRight,
// } from "react-icons/fa";
// import "./Implementation.css";

// const steps = [
//   {
//     icon: <FaIndustry />,
//     label: "Live data from the mill",
//     desc: "Mill sensors feed real-time data",
//   },
//   {
//     icon: (
//       <>
//         <FaCloud />
//         <FaDatabase className="db-icon" />
//       </>
//     ),
//     label: "Securely stored in database",
//     desc: "Encrypted cloud storage",
//   },
//   {
//     icon: <FaRobot />,
//     label: "On‑premise ML & data analytics",
//     desc: "Local machine learning processing",
//   },
//   {
//     icon: <FaServer />,
//     label: "Hosted in web‑servers",
//     desc: "High-availability server hosting",
//   },
//   {
//     icon: <FaCloud />,
//     label: "Model inferences",
//     desc: "Cloud-based AI predictions",
//   },
// ];

// const Implementation = () => {
//   return (
//     <div className="impl-container">
//       <h2 className="impl-title">How We Implement?</h2>
//       <div className="impl-scroll-wrapper">
//         <div className="impl-grid">
//           {steps.map((step, idx) => (
//             <React.Fragment key={idx}>
//               <div className={`impl-step impl-step${idx + 1}`}>
//                 <div className="icon-wrap">{step.icon}</div>
//                 <div
//                   className="step-label"
//                   dangerouslySetInnerHTML={{
//                     __html: step.label.replace(/ /g, " "),
//                   }}
//                 />
//                 <span className="tooltip">{step.desc}</span>
//               </div>
//               {idx < steps.length - 1 && (
//                 <div className="impl-arrow">
//                   <FaArrowRight />
//                 </div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Implementation;
import React from 'react';
import './Implementation.css';
import { FaDatabase, FaUserCog, FaCog, FaDesktop } from 'react-icons/fa';

const steps = [
  { icon: <FaDatabase />, title: 'Prelim Data Acquisition', desc: 'Analyzing plant data and identify requirements.' },
  { icon: <FaUserCog />, title: 'Consultation with Technical Team', desc: 'Results as diversed identify findings' },
  { icon: <FaCog />, title: 'Data Analysis & PLC Connection', desc: 'Reinforcement! Learning based analytics' },
  { icon: <FaDesktop />, title: 'Deployment & Testing', desc: 'Deploy the product and gateme opeation stats' },
];

export default function Implementation() {
  return (
    <section className="implement-container">
      <h2 data-aos="fade-up">How We Implement</h2>
      <div className="implement-grid">
        {steps.map((s,i) => (
          <div
            key={i}
            className="implement-card"
            data-aos="fade-up"
            data-aos-delay={i * 120}
          >
            <div className="icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

