import './test.css';

const employees = [
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

export default function test() {
  const firstRow = employees.slice(0, 2);
  const secondRow = employees.slice(2, 6);

  return (
    <div className="employee-list-container">
      <div className="row two">
        {firstRow.map((emp, idx) => (
          <div className="card" key={idx}>
            <div className="content">
              <div className="front">
                <img src={emp.image} alt={`${emp.name} profile`} className="profile-image" />
                <h3 className="title">{emp.name}</h3>
                <p className="role">{emp.role}</p>
              </div>
              <div className="back">
                <p className="description">{emp.responsibilities}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row four">
        {secondRow.map((emp, idx) => (
          <div className="card" key={idx}>
            <div className="content">
              <div className="front">
                <img src={emp.image} alt={`${emp.name} profile`} className="profile-image" />
                <h3 className="title">{emp.name}</h3>
                <p className="role">{emp.role}</p>
              </div>
              <div className="back">
                <p className="description">{emp.responsibilities}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}