import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Team.css";

const teamMembers = [
  {
    name: "Dr Saikumar Reddy Yeddula",
    role: "CEO/FOUNDER",
    responsibilities: "Oversees company operations and strategy.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSDiEX3tBSwHgKOsMP2JgyNYfSYWdz0rx3IenNiB-GxPIs3xbrbKsw08fgD1Jya3KGybE&usqp=CAU",
  },
  {
    name: "Priyavadan Reddy Puli",
    role: "Co-founder & COO",
    responsibilities: "Manages recruitment and employee relations.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSDiEX3tBSwHgKOsMP2JgyNYfSYWdz0rx3IenNiB-GxPIs3xbrbKsw08fgD1Jya3KGybE&usqp=CAU",
  },
  {
    name: "Puneeth Sai D",
    role: "Operations and Technical Manager",
    responsibilities:
      "Talented young professional with 2 years experience in steel manufacturing and keen interest in management. With a background from a top university, he excels in machine connectivity and communication projects.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPgvEt_AL1Zv6CwdnnfWo2hKgMqn93FiIAZxXrxXrQOL4xE2M8OUT-NyGqnr-7tDhZ0Y&usqp=CAU",
  },
  {
    name: "Arun kumar P",
    role: "Software Engineer ",
    responsibilities:
      "Arun has 7 years of experience in the development of industrial software from dashboards to web-applications, using different frameworks. He also has experience in conducting UI/UX surveys with the clients.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPgvEt_AL1Zv6CwdnnfWo2hKgMqn93FiIAZxXrxXrQOL4xE2M8OUT-NyGqnr-7tDhZ0Y&usqp=CAU",
  },
  {
    name: "Shyamsundar P",
    role: "Implementation Engineer",
    responsibilities:
      "Shyam has overall 3 years of experience working in Industry 4.O & IIoT sector. His rich practical expertise with different industrial sensors (h/w & s/w) makes him an ideal candidate in commissioning sensors in our projects.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPgvEt_AL1Zv6CwdnnfWo2hKgMqn93FiIAZxXrxXrQOL4xE2M8OUT-NyGqnr-7tDhZ0Y&usqp=CAU",
  },
  {
    name: "Sasikumar K",
    role: "Software Engineer",
    responsibilities: "Manages recruitment and employee relations.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPgvEt_AL1Zv6CwdnnfWo2hKgMqn93FiIAZxXrxXrQOL4xE2M8OUT-NyGqnr-7tDhZ0Y&usqp=CAU",
  },
];

const secondRow = teamMembers.slice(2);

const Team = () => {
  return (
    <>
      <Navbar />
      <div className="core-team-container">
        <h1 className="core-team-title" data-aos="fade-up">Our Core Team</h1>

        <div className="core-team-row core-team-first-row">
          {teamMembers.slice(0, 2).map((member, index) => (
            <div
              className="core-team-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="core-team-content">
                <div className="core-team-front">
                  <img
                    className="core-team-img1"
                    src={member.image}
                    alt={member.name}
                  />
                  <h3 className="core-team-title-text">{member.name}</h3>
                  <p className="core-team-subtitle">{member.role}</p>
                </div>
                <div className="core-team-back">
                  <p className="core-team-description">
                    {member.responsibilities}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="core-team-row core-team-multiple">
          {secondRow.map((member, index) => (
            <div
              key={index + 2}
              className="core-team-card"
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 120}
            >
              <div className="core-team-content">
                <div className="core-team-front">
                  <img
                    className="core-team-img1"
                    src={member.image}
                    alt={member.name}
                  />
                  <h3 className="core-team-title-text">{member.name}</h3>
                  <p className="core-team-subtitle">{member.role}</p>
                </div>
                <div className="core-team-back">
                  <p className="core-team-description">
                    {member.responsibilities}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
