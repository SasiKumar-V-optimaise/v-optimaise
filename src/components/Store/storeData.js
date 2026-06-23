export const storeCategories = [
  "Custom Water & Air Cooled Casings",
  "Radar & Laser Measurement Systems",
  "Industrial Cameras & Vision AI Systems",
  "Custom Industrial Solutions",
];

export const storeCategoryDescriptions = {
  All: "View the complete V-OptimAIse industrial technology solutions catalog.",
  "Custom Water & Air Cooled Casings":
    "Industrial protection systems designed for harsh environments with high temperatures, dust, vibration, steam, and corrosive conditions.",
  "Radar & Laser Measurement Systems":
    "Advanced measurement solutions for level, profile, dimensional, volume, speed, and positioning applications in extreme industrial environments.",
  "Industrial Cameras & Vision AI Systems":
    "Industrial-grade camera systems integrated with AI and ML algorithms for monitoring, inspection, safety, tracking, and process optimization.",
  "Custom Industrial Solutions":
    "Tailor-made sensing, automation, AI, machine vision, and IIoT systems engineered for customer requirements and plant conditions.",
};

const defaultArchitecture = [
  "Field device or sensor layer",
  "Protected edge acquisition layer",
  "AI, analytics, or measurement processing",
  "Dashboard, alerts, reports, or plant-system integration",
];

export const storeProducts = [
  {
    id: "industrial-camera-cooling-enclosure",
    name: "Industrial Camera Cooling Enclosure",
    category: "Custom Water & Air Cooled Casings",
    shortDescription:
      "Water and air-cooled enclosure for protecting industrial cameras in high-temperature environments.",
    overview:
      "A rugged camera protection system for plant zones exposed to heat, dust, steam, vibration, and process contamination.",
    problemStatement:
      "Industrial cameras often fail or lose image quality when exposed to radiant heat, dust, fumes, steam, and mechanical vibration near furnaces, rolling mills, and coke ovens.",
    solutionOverview:
      "V-OptimAIse designs water and air-cooled stainless-steel camera enclosures with purge airflow, thermal isolation, and maintenance-friendly access for long-term camera operation in harsh process areas.",
    image: "/bascam_setup.webp",
    tags: ["Cooled Casing", "Camera Protection", "Steel Plants", "High Heat"],
    applications: [
      "Blast furnaces",
      "Steel plants",
      "Coke ovens",
      "Reheating furnaces",
      "Rolling mills",
    ],
    keyFeatures: [
      "Stainless steel housing",
      "Water cooling option",
      "Air purge system",
      "Dust protection",
      "High-temperature operation",
      "Easy maintenance access",
    ],
    benefits: [
      "Improves camera reliability in extreme process zones",
      "Reduces lens contamination and image-quality loss",
      "Supports continuous Vision AI deployment near hot assets",
      "Simplifies maintenance through accessible enclosure design",
    ],
    deliverables: [
      "Cooled camera enclosure design",
      "Mounting and utility connection recommendation",
      "Air purge and water-cooling interface details",
      "Commissioning and installation support",
    ],
    deploymentArchitecture: defaultArchitecture,
    industriesServed: ["Steel", "Metals", "Coke ovens", "Mining", "Heavy manufacturing"],
    idealFor:
      "Plants that need reliable camera operation in high-temperature, dusty, or corrosive production areas.",
  },
  {
    id: "laser-sensor-protective-housing",
    name: "Laser Sensor Protective Housing",
    category: "Custom Water & Air Cooled Casings",
    shortDescription:
      "Heavy-duty cooled enclosure designed for laser profilers and laser measurement systems.",
    overview:
      "A protective housing package for laser sensors installed near hot products, scale, steam, vibration, and dust-heavy measurement locations.",
    problemStatement:
      "Laser profilers and measurement instruments can be damaged or misaligned when deployed close to hot strip mills, plate mills, and billet inspection lines without proper protection.",
    solutionOverview:
      "The housing provides rugged mechanical protection, thermal isolation, optical-window protection, and air purge support so laser systems can operate closer to the process.",
    image: "",
    tags: ["Laser Protection", "Profiling", "Water Cooling", "Rugged"],
    applications: ["Plate mills", "Hot strip mills", "Billet inspection"],
    keyFeatures: [
      "Thermal isolation",
      "Water cooling",
      "Optical protection window",
      "Air purge",
      "Rugged construction",
    ],
    benefits: [
      "Protects precision laser equipment from heat and dust",
      "Supports stable profile and dimensional measurement",
      "Reduces downtime caused by instrument exposure",
      "Improves installation confidence in harsh locations",
    ],
    deliverables: [
      "Laser housing design and specification",
      "Optical window and purge configuration",
      "Mounting concept",
      "Utility interface recommendation",
    ],
    deploymentArchitecture: defaultArchitecture,
    industriesServed: ["Steel", "Metals", "Rolling mills", "Heavy fabrication"],
    idealFor:
      "Plants deploying laser profilers or measurement systems near hot, dusty, or mechanically demanding production lines.",
  },
  {
    id: "radar-instrument-protection-unit",
    name: "Radar Instrument Protection Unit",
    category: "Custom Water & Air Cooled Casings",
    shortDescription:
      "Industrial enclosure for radar-based measurement devices operating in harsh environments.",
    overview:
      "A radar protection unit designed for rugged mounting, dust protection, weather shielding, and thermal shielding in industrial measurement areas.",
    problemStatement:
      "Radar instruments in stockhouses, silos, bunkers, and outdoor measurement areas face dust loading, weather exposure, mounting constraints, and process heat.",
    solutionOverview:
      "The unit protects radar measurement devices with an industrial enclosure, mounting system, shielding, and site-specific mechanical integration.",
    image: "",
    tags: ["Radar", "Protection Unit", "Dust Shield", "Mounting"],
    applications: ["Silos", "Bunkers", "Blast furnace stockhouses"],
    keyFeatures: [
      "Dust protection",
      "Weather protection",
      "Thermal shielding",
      "Industrial mounting system",
    ],
    benefits: [
      "Improves radar instrument durability",
      "Supports stable measurement in dusty environments",
      "Reduces exposure-related maintenance",
      "Adapts to challenging mounting locations",
    ],
    deliverables: [
      "Protection enclosure",
      "Mounting and shielding recommendation",
      "Installation interface drawings",
      "Site commissioning support",
    ],
    deploymentArchitecture: defaultArchitecture,
    industriesServed: ["Steel", "Cement", "Mining", "Bulk material handling"],
    idealFor:
      "Facilities using radar instruments in dusty, outdoor, high-heat, or difficult-access areas.",
  },
  {
    id: "laser-plate-profiling-system",
    name: "Laser Plate Profiling System",
    category: "Radar & Laser Measurement Systems",
    shortDescription:
      "Laser-based dimensional measurement system for plate width, shape, flatness, and profile analysis.",
    overview:
      "A laser measurement system for real-time plate and product profiling across demanding steel processing lines.",
    problemStatement:
      "Manual or delayed dimensional measurement makes it difficult to detect width, flatness, shape, and profile deviations during production.",
    solutionOverview:
      "Laser sensors acquire product profile data in real time, while the processing layer calculates dimensional indicators and provides measurement outputs for operators and quality teams.",
    image: "",
    tags: ["Laser Profiling", "Dimensional", "Plate Mills", "Real Time"],
    applications: ["Plate mills", "Steel processing lines"],
    keyFeatures: [
      "Real-time profiling",
      "High accuracy",
      "Shape analysis",
      "Width measurement",
    ],
    benefits: [
      "Improves dimensional visibility during production",
      "Supports faster quality decisions",
      "Reduces reliance on delayed manual measurement",
      "Creates measurement records for analytics and reporting",
    ],
    deliverables: [
      "Laser measurement configuration",
      "Profile processing logic",
      "Measurement dashboard or output interface",
      "Calibration and validation support",
    ],
    deploymentArchitecture: defaultArchitecture,
    industriesServed: ["Steel", "Plate mills", "Metal processing"],
    idealFor:
      "Production lines that need online plate, slab, or product profile measurement.",
  },
  {
    id: "radar-level-measurement-system",
    name: "Radar Level Measurement System",
    category: "Radar & Laser Measurement Systems",
    shortDescription:
      "Non-contact radar system for monitoring material levels in silos, bunkers, and vessels.",
    overview:
      "A non-contact industrial level measurement package designed for dusty, harsh, or difficult-access material storage and process vessels.",
    problemStatement:
      "Material level visibility in silos, bunkers, and vessels is often unreliable when dust, temperature, access limits, or manual measurement constraints are present.",
    solutionOverview:
      "Radar instruments provide continuous non-contact measurement, with industrial networking and dashboard integration for plant visibility.",
    image: "",
    tags: ["Radar Level", "Non Contact", "Dust Tolerant", "Networking"],
    applications: ["Steel plants", "Cement plants", "Mining"],
    keyFeatures: [
      "Non-contact operation",
      "Dust tolerant",
      "Continuous measurement",
      "Industrial networking",
    ],
    benefits: [
      "Improves material-level visibility",
      "Reduces manual measurement risk",
      "Supports inventory and process monitoring",
      "Works in harsh and dusty environments",
    ],
    deliverables: [
      "Radar instrument selection support",
      "Mounting and protection recommendation",
      "Signal integration plan",
      "Dashboard or PLC output configuration",
    ],
    deploymentArchitecture: defaultArchitecture,
    industriesServed: ["Steel", "Cement", "Mining", "Power", "Bulk material handling"],
    idealFor:
      "Plants that need reliable continuous level monitoring without contact with the material or process.",
  },
  {
    id: "conveyor-volume-flow-measurement-system",
    name: "Conveyor Volume Flow Measurement System",
    category: "Radar & Laser Measurement Systems",
    shortDescription:
      "Laser-based system for material volume and flow estimation on conveyor belts.",
    overview:
      "A conveyor measurement system that estimates material volume and flow using laser profiling, tracking, and production analytics.",
    problemStatement:
      "Bulk material movement is often tracked through indirect or delayed data, making it difficult to understand actual conveyor loading and throughput.",
    solutionOverview:
      "Laser profile acquisition and analytics estimate conveyor material volume in real time, giving teams visibility into flow, movement, and production trends.",
    image: "",
    tags: ["Conveyor", "Volume Flow", "Laser", "Analytics"],
    applications: ["Mining", "Ports", "Raw material handling plants"],
    keyFeatures: [
      "Real-time volume estimation",
      "Material tracking",
      "Production analytics",
    ],
    benefits: [
      "Improves raw-material movement visibility",
      "Supports throughput and production analytics",
      "Reduces dependence on manual estimation",
      "Provides data for material accounting workflows",
    ],
    deliverables: [
      "Laser profiling setup",
      "Flow estimation algorithm",
      "Dashboard and reporting view",
      "Validation and commissioning support",
    ],
    deploymentArchitecture: defaultArchitecture,
    industriesServed: ["Mining", "Ports", "Steel", "Cement", "Raw material handling"],
    idealFor:
      "Operations that need real-time bulk material flow visibility on conveyor belts.",
  },
  {
    id: "rail-track-obstacle-detection-system",
    name: "Rail Track Obstacle Detection System",
    category: "Radar & Laser Measurement Systems",
    shortDescription:
      "Laser and AI-based obstacle detection system for locomotives and industrial rail operations.",
    overview:
      "A rail safety monitoring solution for industrial locomotives and plant rail networks where obstacle visibility and alerts are critical.",
    problemStatement:
      "Industrial rail networks can have poor visibility, mixed movement, and operational hazards that make track-obstacle detection difficult for locomotive teams.",
    solutionOverview:
      "Laser sensing and AI-based detection identify potential obstacles in the track path and trigger alerts for safer industrial rail operation.",
    image: "",
    tags: ["Rail Safety", "Laser", "AI Detection", "Alerts"],
    applications: ["Steel plant rail networks", "Industrial locomotives"],
    keyFeatures: ["Real-time alerts", "AI-based detection", "Safety monitoring"],
    benefits: [
      "Improves track-path hazard visibility",
      "Supports faster operator response",
      "Adds data-backed safety monitoring",
      "Can be adapted to site-specific locomotive workflows",
    ],
    deliverables: [
      "Sensor and camera layout concept",
      "Detection model configuration",
      "Alert interface",
      "Pilot deployment support",
    ],
    deploymentArchitecture: defaultArchitecture,
    industriesServed: ["Steel", "Mining", "Ports", "Industrial logistics"],
    idealFor:
      "Facilities operating locomotives or rail movement inside large industrial campuses.",
  },
  {
    id: "ppe-compliance-monitoring-system",
    name: "PPE Compliance Monitoring System",
    category: "Industrial Cameras & Vision AI Systems",
    shortDescription:
      "AI-powered monitoring solution for detecting safety equipment compliance.",
    overview:
      "A Vision AI safety monitoring system for detecting PPE compliance across shop floors, yards, production zones, and restricted areas.",
    problemStatement:
      "Manual safety monitoring cannot continuously observe every high-risk area, and PPE violations may be missed until after an incident or audit.",
    solutionOverview:
      "Industrial cameras and AI models detect helmet, vest, and other PPE compliance events, producing safety alerts and violation analytics.",
    image: "",
    tags: ["PPE", "Safety AI", "Compliance", "Vision AI"],
    applications: ["Manufacturing", "Steel plants", "Mining"],
    keyFeatures: [
      "Helmet detection",
      "Vest detection",
      "Safety alerts",
      "Violation analytics",
    ],
    benefits: [
      "Increases continuous safety visibility",
      "Supports compliance reporting",
      "Creates evidence for safety review",
      "Reduces dependence on manual observation",
    ],
    deliverables: [
      "Configured camera and AI model pipeline",
      "Alert and event dashboard",
      "Violation report format",
      "Commissioning and handover",
    ],
    deploymentArchitecture: defaultArchitecture,
    industriesServed: ["Manufacturing", "Steel", "Mining", "Construction materials"],
    idealFor:
      "Plants that need automated PPE monitoring in high-risk or high-traffic industrial zones.",
  },
  {
    id: "conveyor-belt-monitoring-system",
    name: "Conveyor Belt Monitoring System",
    category: "Industrial Cameras & Vision AI Systems",
    shortDescription:
      "Vision AI system for detecting belt sway, tears, damage, and abnormal operating conditions.",
    overview:
      "A continuous belt monitoring solution using cameras and Vision AI to detect conveyor abnormalities and support predictive alerts.",
    problemStatement:
      "Conveyor belt damage, sway, tears, and abnormal conditions can create downtime, safety risk, and material handling losses when detected late.",
    solutionOverview:
      "Industrial cameras monitor conveyor conditions, while AI detects visual abnormalities and raises alerts for maintenance and operations teams.",
    image: "",
    tags: ["Conveyor", "Belt Monitoring", "Predictive Alerts", "Vision AI"],
    applications: ["Mining", "Cement plants", "Steel plants"],
    keyFeatures: [
      "Belt tear detection",
      "Belt sway detection",
      "Predictive alerts",
      "Continuous monitoring",
    ],
    benefits: [
      "Improves conveyor condition visibility",
      "Supports earlier maintenance action",
      "Reduces unexpected stoppage risk",
      "Creates event records for reliability teams",
    ],
    deliverables: [
      "Camera layout recommendation",
      "AI detection model configuration",
      "Alert dashboard",
      "Site validation support",
    ],
    deploymentArchitecture: defaultArchitecture,
    industriesServed: ["Mining", "Cement", "Steel", "Ports", "Bulk material handling"],
    idealFor:
      "Facilities with critical conveyors where belt faults or abnormal operation can disrupt production.",
  },
  {
    id: "pipe-counting-tracking-system",
    name: "Pipe Counting & Tracking System",
    category: "Industrial Cameras & Vision AI Systems",
    shortDescription:
      "Automated AI system for pipe identification, counting, and production tracking.",
    overview:
      "A Vision AI production tracking system that identifies pipes, validates counts, and creates traceable movement data for pipe manufacturing lines.",
    problemStatement:
      "Manual pipe counting and tracking can introduce mismatch, delay, and limited traceability in production, storage, and dispatch workflows.",
    solutionOverview:
      "AI models detect and track pipes in camera feeds, validate counts, and provide production analytics for operations and dispatch teams.",
    image: "",
    tags: ["Pipe Tracking", "Counting", "Production Analytics", "Traceability"],
    applications: ["Pipe manufacturing plants"],
    keyFeatures: ["Object tracking", "Count validation", "Production analytics"],
    benefits: [
      "Improves count accuracy",
      "Reduces manual tracking effort",
      "Supports dispatch and production traceability",
      "Creates visual evidence for production records",
    ],
    deliverables: [
      "Pipe detection and tracking model",
      "Camera and edge setup",
      "Counting dashboard",
      "Integration output specification",
    ],
    deploymentArchitecture: defaultArchitecture,
    industriesServed: ["Pipe manufacturing", "Steel", "Tube mills"],
    idealFor:
      "Pipe plants that need reliable product count validation and line movement tracking.",
  },
  {
    id: "surface-defect-inspection-system",
    name: "Surface Defect Inspection System",
    category: "Industrial Cameras & Vision AI Systems",
    shortDescription:
      "Vision-based quality inspection system for detecting surface defects in steel products.",
    overview:
      "A machine vision inspection system for detecting, classifying, and reporting visual surface defects on industrial products.",
    problemStatement:
      "Surface defects may be missed by manual inspection or discovered too late, increasing quality losses, rework, and customer complaints.",
    solutionOverview:
      "Industrial cameras capture product surfaces while AI models identify defect patterns, classify abnormalities, and generate quality evidence.",
    image: "",
    tags: ["Defect Inspection", "Quality", "Steel Products", "AI Vision"],
    applications: ["Plates", "Coils", "Pipes", "Billets"],
    keyFeatures: [
      "Real-time inspection",
      "Defect classification",
      "Quality reporting",
    ],
    benefits: [
      "Improves defect visibility",
      "Supports faster quality decisions",
      "Creates image evidence for review",
      "Enables quality trend analytics",
    ],
    deliverables: [
      "Inspection model deployment",
      "Camera and lighting recommendation",
      "Defect report format",
      "Model validation support",
    ],
    deploymentArchitecture: defaultArchitecture,
    industriesServed: ["Steel", "Metals", "Pipe manufacturing", "Heavy manufacturing"],
    idealFor:
      "Plants that need consistent visual quality inspection and defect reporting on production lines.",
  },
  {
    id: "custom-ai-vision-solution",
    name: "Custom AI Vision Solution",
    category: "Custom Industrial Solutions",
    shortDescription:
      "Plant-specific AI and machine vision systems designed around customer requirements.",
    overview:
      "A custom engineering engagement for Vision AI use cases that require site-specific cameras, data, model logic, ruggedization, and integration.",
    problemStatement:
      "Many industrial vision use cases cannot be solved with generic software because camera placement, lighting, product behavior, process constraints, and integration needs vary by plant.",
    solutionOverview:
      "V-OptimAIse studies the site context, designs the acquisition setup, develops or configures AI models, and deploys the full workflow from edge capture to dashboard outputs.",
    image: "/vision_ai.png",
    tags: ["Custom Vision", "AI Models", "Machine Vision", "Engineering"],
    applications: [
      "Process monitoring",
      "Quality inspection",
      "Safety compliance",
      "Material tracking",
    ],
    keyFeatures: [
      "Use-case-specific model design",
      "Camera and lighting engineering",
      "Edge deployment",
      "Dashboard and alert integration",
    ],
    benefits: [
      "Fits real plant constraints",
      "Combines hardware, AI, and integration design",
      "Supports pilot-to-production deployment",
      "Creates a scalable path for future vision use cases",
    ],
    deliverables: [
      "Use-case assessment",
      "Camera and AI system design",
      "Prototype or production deployment",
      "Dashboard and integration support",
    ],
    deploymentArchitecture: defaultArchitecture,
    industriesServed: ["Steel", "Mining", "Manufacturing", "Process industries"],
    idealFor:
      "Customers with plant-specific machine vision requirements that need custom engineering rather than an off-the-shelf system.",
  },
  {
    id: "industrial-iiot-monitoring-platform",
    name: "Industrial IIoT Monitoring Platform",
    category: "Custom Industrial Solutions",
    shortDescription:
      "Custom sensor integration and industrial data acquisition solutions.",
    overview:
      "A custom IIoT monitoring platform for connecting sensors, acquisition devices, dashboards, alerts, and plant data workflows.",
    problemStatement:
      "Industrial teams often have valuable sensor signals spread across isolated equipment, manual logs, and disconnected systems.",
    solutionOverview:
      "The platform integrates sensors and acquisition units into a structured monitoring layer with dashboards, alerts, analytics, and reporting.",
    image: "",
    tags: ["IIoT", "Sensors", "Monitoring", "Dashboards"],
    applications: [
      "Equipment monitoring",
      "Process parameter tracking",
      "Energy and utility visibility",
      "Production data acquisition",
    ],
    keyFeatures: [
      "Sensor integration",
      "Edge data acquisition",
      "Dashboard visualization",
      "Alerts and reports",
    ],
    benefits: [
      "Creates centralized visibility across assets",
      "Reduces manual data collection",
      "Supports faster maintenance and process decisions",
      "Provides a foundation for AI and analytics",
    ],
    deliverables: [
      "Sensor and data mapping",
      "Acquisition and dashboard setup",
      "Alert workflow",
      "Deployment documentation",
    ],
    deploymentArchitecture: defaultArchitecture,
    industriesServed: ["Steel", "Manufacturing", "Mining", "Utilities", "Process plants"],
    idealFor:
      "Plants that need custom sensor acquisition and operational visibility across equipment or process areas.",
  },
  {
    id: "digital-twin-analytics-solution",
    name: "Digital Twin & Analytics Solution",
    category: "Custom Industrial Solutions",
    shortDescription:
      "Real-time operational analytics and digital twin platform for industrial assets.",
    overview:
      "A digital twin and analytics solution that models asset behavior, operating context, and performance indicators for industrial decision support.",
    problemStatement:
      "Industrial assets generate process data, but teams often lack a real-time contextual model that links signals, performance, events, and operational outcomes.",
    solutionOverview:
      "V-OptimAIse builds asset or process-level analytics views that combine sensor data, events, calculations, and visual dashboards into a practical digital twin layer.",
    image: "",
    tags: ["Digital Twin", "Analytics", "Assets", "Operations"],
    applications: [
      "Asset performance monitoring",
      "Operational analytics",
      "Process optimization",
      "Management review dashboards",
    ],
    keyFeatures: [
      "Real-time operational model",
      "KPI and event analytics",
      "Asset visualization",
      "Decision-support dashboards",
    ],
    benefits: [
      "Connects data to operational context",
      "Supports faster diagnosis and review",
      "Improves visibility into asset performance",
      "Enables analytics-led improvement programs",
    ],
    deliverables: [
      "Digital twin scope definition",
      "Data model and analytics layer",
      "Dashboard implementation",
      "Review and handover support",
    ],
    deploymentArchitecture: defaultArchitecture,
    industriesServed: ["Steel", "Process industries", "Manufacturing", "Energy"],
    idealFor:
      "Industrial teams that need real-time analytics around critical assets, processes, or production lines.",
  },
  {
    id: "end-to-end-automation-solution",
    name: "End-to-End Automation Solution",
    category: "Custom Industrial Solutions",
    shortDescription:
      "Custom industrial automation systems integrating sensors, AI, analytics, and control systems.",
    overview:
      "A custom automation solution for industrial workflows requiring sensing, AI, analytics, reporting, and integration with existing plant systems.",
    problemStatement:
      "Complex industrial problems often require coordinated hardware, software, AI, dashboards, and control-system integration instead of a single standalone product.",
    solutionOverview:
      "V-OptimAIse engineers an end-to-end solution architecture, integrating field devices, acquisition, AI models, dashboards, alerts, and plant interfaces as needed.",
    image: "/arch.webp",
    tags: ["Automation", "Sensors", "AI", "Integration"],
    applications: [
      "Process automation",
      "Inspection automation",
      "Monitoring and alerting",
      "Integrated plant workflows",
    ],
    keyFeatures: [
      "Custom system architecture",
      "Sensor and AI integration",
      "Dashboard and reporting layer",
      "Plant-system interface support",
    ],
    benefits: [
      "Solves multi-layer industrial requirements",
      "Reduces fragmented vendor and tool complexity",
      "Supports scalable deployment across plant areas",
      "Aligns automation with actual site constraints",
    ],
    deliverables: [
      "Requirement study and solution blueprint",
      "Hardware and software integration",
      "Deployment and commissioning support",
      "Documentation and handover",
    ],
    deploymentArchitecture: defaultArchitecture,
    industriesServed: ["Steel", "Mining", "Manufacturing", "Heavy industry"],
    idealFor:
      "Customers who need a complete engineered solution spanning devices, AI, analytics, and industrial integration.",
  },
];

/*
Previous catalog content kept out of runtime:
export const deprecatedStoreProducts = [
  {
    id: "ppe-detection-system",
    name: "PPE Detection System",
    category: "Vision AI Systems",
    shortDescription:
      "Camera-based safety compliance system for detecting helmets, jackets, gloves, and restricted-area violations.",
    overview:
      "A deployable VisionAI safety layer that monitors live camera feeds and flags PPE non-compliance in production zones, yards, and maintenance areas. The system supports alerts, evidence capture, and dashboard reporting for safety teams.",
    image: "/multy-detection.png",
    tags: ["Safety AI", "Edge Vision", "Alerts", "Compliance"],
    applications: [
      "Shop-floor PPE monitoring",
      "Restricted-zone safety checks",
      "Contractor compliance tracking",
      "Incident evidence capture",
    ],
    keyFeatures: [
      "Helmet, vest, glove, and person detection",
      "Zone-wise rule configuration",
      "Real-time alert and event capture",
      "Dashboard-ready safety analytics",
    ],
    deliverables: [
      "Configured AI model and camera pipeline",
      "Edge deployment package",
      "Safety event dashboard",
      "Commissioning and operator handover",
    ],
    idealFor:
      "Plants that need automated safety visibility across high-risk work areas without increasing manual patrol dependency.",
  },
  {
    id: "conveyor-belt-monitoring-vision-system",
    name: "Conveyor Belt Monitoring Vision System",
    category: "Vision AI Systems",
    shortDescription:
      "Vision system for monitoring conveyor movement, material presence, abnormal loading, and belt-side events.",
    overview:
      "A production-grade camera and AI setup for conveyor lines where material movement, spillage, loading behavior, or abnormal conditions must be tracked continuously.",
    image: "/realtime.jpg",
    tags: ["Conveyor", "Monitoring", "Vision AI", "Events"],
    applications: [
      "Material presence detection",
      "Conveyor occupancy monitoring",
      "Spillage and abnormal event detection",
      "Shift-wise movement evidence",
    ],
    keyFeatures: [
      "Live object and material detection",
      "Camera stream processing at the edge",
      "Event snapshots and timestamps",
      "Integration-ready outputs for plant systems",
    ],
    deliverables: [
      "Camera positioning recommendation",
      "Edge inference configuration",
      "Event log and dashboard view",
      "Site deployment support",
    ],
    idealFor:
      "Steel, mining, cement, and bulk-material operations that rely on conveyor movement visibility.",
  },
  {
    id: "pipe-counting-tracking-system",
    name: "Pipe Counting & Tracking System",
    category: "Vision AI Systems",
    shortDescription:
      "High-speed pipe detection, counting, and movement tracking for production and dispatch lines.",
    overview:
      "A VisionAI tracking solution for pipe, product, and bundle movement. It helps teams count products, detect movement patterns, and improve traceability across production stages.",
    image: "/realtime1.jpg",
    tags: ["Tracking", "Counting", "Traceability", "Edge AI"],
    applications: [
      "Pipe counting on moving lines",
      "Product flow tracking",
      "Dispatch and transfer validation",
      "Visual traceability records",
    ],
    keyFeatures: [
      "Real-time object counting",
      "Movement direction and zone tracking",
      "Snapshot-based evidence capture",
      "Configurable product classes",
    ],
    deliverables: [
      "Trained tracking model",
      "Camera and edge-processing setup",
      "Counting dashboard",
      "Integration output specification",
    ],
    idealFor:
      "Pipe mills and long-product lines where manual counting creates delay, mismatch, or traceability gaps.",
  },
  {
    id: "surface-defect-detection-system",
    name: "Surface Defect Detection System",
    category: "Vision AI Systems",
    shortDescription:
      "AI inspection system for detecting surface defects, visual abnormalities, and quality deviations.",
    overview:
      "A configurable defect-detection package for industrial visual inspection. It combines camera acquisition, model inference, defect classification, and quality evidence for plant teams.",
    image: "/defects.png",
    tags: ["Defect Detection", "Quality", "Inspection", "VisionAI"],
    applications: [
      "Surface defect identification",
      "Inline quality inspection",
      "Defect evidence capture",
      "Quality reporting workflows",
    ],
    keyFeatures: [
      "Defect localization and classification",
      "Image evidence with timestamps",
      "Model retraining support",
      "Quality dashboard compatibility",
    ],
    deliverables: [
      "Inspection model deployment",
      "Camera and lighting recommendation",
      "Defect report format",
      "Model performance validation",
    ],
    idealFor:
      "Manufacturers that need faster visual quality feedback and consistent defect visibility on production lines.",
  },
  {
    id: "blast-furnace-ai-recommender",
    name: "Blast Furnace AI Recommender",
    category: "AI Co-Operate / Agentic AI",
    shortDescription:
      "AI recommender for blast furnace operating decisions, trends, alerts, and action validation.",
    overview:
      "An AI Co-Operate solution that supports plant teams with recommendations based on process data, operating patterns, and engineer-defined rules. It is designed to assist, explain, and record decisions rather than replace operators.",
    image: "/blastfurnace.jpeg",
    tags: ["Recommender", "Blast Furnace", "Decision Support", "AI"],
    applications: [
      "Operating recommendation support",
      "Trend-based intervention planning",
      "Engineer validation workflows",
      "Shift handover intelligence",
    ],
    keyFeatures: [
      "Context-aware recommendation cards",
      "Operator approval and action tracking",
      "Rule and model-based insights",
      "Historical recommendation review",
    ],
    deliverables: [
      "Use-case discovery and data mapping",
      "AI recommendation workflow",
      "Operator interface",
      "Performance review dashboard",
    ],
    idealFor:
      "Blast furnace teams that want structured, explainable AI support for recurring operational decisions.",
  },
  {
    id: "daily-plant-reporter-agent",
    name: "Daily Plant Reporter Agent",
    category: "AI Co-Operate / Agentic AI",
    shortDescription:
      "Agentic reporting assistant that compiles daily production, quality, energy, and exception summaries.",
    overview:
      "A plant reporting agent that gathers operational data, highlights exceptions, drafts daily summaries, and prepares review-ready reports for managers and engineers.",
    image: "/optimise-dash.png",
    tags: ["Agentic AI", "Reports", "Dashboards", "Operations"],
    applications: [
      "Daily production reporting",
      "Quality and delay summaries",
      "Energy and process snapshot reporting",
      "Management review preparation",
    ],
    keyFeatures: [
      "Automated report drafting",
      "Exception highlighting",
      "Source-linked operational summaries",
      "Configurable report sections",
    ],
    deliverables: [
      "Report template setup",
      "Data connector mapping",
      "Agent workflow configuration",
      "User acceptance and handover",
    ],
    idealFor:
      "Plant teams spending significant time preparing repetitive operational reports from multiple data sources.",
  },
  {
    id: "process-anomaly-detection-agent",
    name: "Process Anomaly Detection Agent",
    category: "AI Co-Operate / Agentic AI",
    shortDescription:
      "AI agent that detects abnormal process behavior and routes insights to the right plant team.",
    overview:
      "A monitoring and decision-support agent that watches process signals, detects abnormal behavior, explains likely context, and helps teams investigate deviations faster.",
    image: "/anomoly.png",
    tags: ["Anomaly", "Agent", "Process AI", "Alerts"],
    applications: [
      "Process deviation detection",
      "Early warning workflows",
      "Root-cause investigation support",
      "Shift exception review",
    ],
    keyFeatures: [
      "Signal anomaly detection",
      "Event explanation and context",
      "Alert routing and acknowledgement",
      "Trend review dashboard",
    ],
    deliverables: [
      "Signal selection and baseline study",
      "Anomaly model configuration",
      "Alert workflow",
      "Review dashboard",
    ],
    idealFor:
      "Operations teams that need early visibility into abnormal process behavior across complex equipment or production lines.",
  },
  {
    id: "operator-decision-support-agent",
    name: "Operator Decision Support Agent",
    category: "AI Co-Operate / Agentic AI",
    shortDescription:
      "Human-in-the-loop AI assistant for operators, engineers, approvals, and action tracking.",
    overview:
      "A decision-support layer for production teams that turns data, rules, model outputs, and expert knowledge into traceable recommendations and action workflows.",
    image: "/Agentic_Ai.webp",
    tags: ["Human-in-loop", "Workflow", "Agentic AI", "Actions"],
    applications: [
      "Operator guidance workflows",
      "Engineer approval queues",
      "Action tracking and closure",
      "SOP-linked recommendations",
    ],
    keyFeatures: [
      "Recommendation and approval flow",
      "Operator notes and evidence",
      "SOP and context linking",
      "Action history for audits",
    ],
    deliverables: [
      "Workflow design",
      "Agent interface",
      "Approval and action tracking setup",
      "Role-based access configuration",
    ],
    idealFor:
      "Plants that want AI-supported decisions with clear human control, review, and accountability.",
  },
  {
    id: "hot-metal-level-measurement-system",
    name: "Hot Metal Level Measurement System",
    category: "IIoT + Sensor Systems",
    shortDescription:
      "Non-contact level measurement system for harsh, high-temperature hot-metal environments.",
    overview:
      "An IIoT measurement solution for difficult hot-metal areas where temperature, fumes, dust, glare, and access constraints make manual measurement unreliable or unsafe.",
    image: "/pouring_image.jpeg",
    tags: ["Level", "Hot Metal", "IIoT", "Sensors"],
    applications: [
      "Hot-metal level monitoring",
      "Vessel and process-zone measurement",
      "Safety-critical visibility",
      "Dashboard and alarm integration",
    ],
    keyFeatures: [
      "Non-contact measurement approach",
      "Harsh-environment sensor integration",
      "Edge processing and signal validation",
      "Dashboard and alert outputs",
    ],
    deliverables: [
      "Site feasibility assessment",
      "Sensor and mounting recommendation",
      "Measurement dashboard",
      "Commissioning support",
    ],
    idealFor:
      "Steel plants that need reliable measurement in high-temperature areas with poor visibility and manual access risk.",
  },
  {
    id: "laser-plate-profiling-system",
    name: "Laser Plate Profiling System",
    category: "IIoT + Sensor Systems",
    shortDescription:
      "Laser-based profiling package for plate, slab, or product geometry measurement and inspection.",
    overview:
      "A sensor-based profiling system that captures product geometry, surface profile, or dimensional behavior and turns it into plant-ready measurement outputs.",
    image: "/steelbackground.webp",
    tags: ["Laser", "Profiling", "Measurement", "Geometry"],
    applications: [
      "Plate profile measurement",
      "Slab geometry checks",
      "Dimensional deviation monitoring",
      "Process quality feedback",
    ],
    keyFeatures: [
      "Laser sensor integration",
      "Profile acquisition and filtering",
      "Measurement trend visualization",
      "Configurable tolerance checks",
    ],
    deliverables: [
      "Sensor layout plan",
      "Profiling data pipeline",
      "Measurement dashboard",
      "Calibration and validation support",
    ],
    idealFor:
      "Production lines where dimensional measurement and profile visibility improve quality and process control.",
  },
  {
    id: "conveyor-volume-flow-measurement",
    name: "Conveyor Volume Flow Measurement",
    category: "IIoT + Sensor Systems",
    shortDescription:
      "Sensor and analytics system for estimating material volume flow on conveyors and carriers.",
    overview:
      "A flow-measurement solution for bulk material movement that combines field sensors, signal processing, and dashboard analytics for production and material accounting.",
    image: "/Smart_mfg.webp",
    tags: ["Conveyor", "Flow", "Sensors", "Analytics"],
    applications: [
      "Conveyor material flow monitoring",
      "Coke carrier and bulk movement tracking",
      "Material accounting support",
      "Production throughput visibility",
    ],
    keyFeatures: [
      "Volume-flow estimation pipeline",
      "Sensor data acquisition",
      "Trend and event dashboard",
      "Plant-system integration options",
    ],
    deliverables: [
      "Sensor selection and layout",
      "Flow analytics configuration",
      "Dashboard and reporting view",
      "Validation support",
    ],
    idealFor:
      "Plants that need better bulk material movement visibility across conveyors, carriers, and transfer points.",
  },
  {
    id: "edge-camera-acquisition-unit",
    name: "Edge Camera Acquisition Unit",
    category: "IIoT + Sensor Systems",
    shortDescription:
      "Industrial edge acquisition package for camera capture, preprocessing, AI inference, and data transfer.",
    overview:
      "A deployable edge unit for industrial vision projects that handles camera acquisition, preprocessing, inference readiness, storage, and integration with dashboards or plant networks.",
    image: "/bascam_setup.webp",
    tags: ["Edge", "Camera", "Acquisition", "AI Ready"],
    applications: [
      "VisionAI camera acquisition",
      "Edge preprocessing",
      "Image evidence storage",
      "Industrial network integration",
    ],
    keyFeatures: [
      "Multi-camera acquisition support",
      "Edge preprocessing and buffering",
      "AI inference-ready architecture",
      "Configurable data transfer",
    ],
    deliverables: [
      "Edge acquisition configuration",
      "Camera integration support",
      "Data storage and transfer setup",
      "Deployment documentation",
    ],
    idealFor:
      "Teams building industrial vision systems that need reliable image capture and edge processing infrastructure.",
  },
  {
    id: "production-monitoring-dashboard",
    name: "Production Monitoring Dashboard",
    category: "Industrial Software & Dashboards",
    shortDescription:
      "Operations dashboard for production status, throughput, downtime, shift metrics, and exceptions.",
    overview:
      "A plant dashboard that consolidates production signals, manual inputs, and system outputs into a clean operations view for supervisors, engineers, and managers.",
    image: "/visualisation.png",
    tags: ["Production", "Dashboard", "KPIs", "Operations"],
    applications: [
      "Production status monitoring",
      "Shift and line KPI review",
      "Downtime and exception tracking",
      "Management reporting",
    ],
    keyFeatures: [
      "Live and historical KPI cards",
      "Line, area, and shift filters",
      "Exception and downtime views",
      "Export-ready reporting",
    ],
    deliverables: [
      "Dashboard design and implementation",
      "Data connector configuration",
      "KPI definition workshop",
      "User training and handover",
    ],
    idealFor:
      "Plants that need a unified production view across shifts, lines, and operational teams.",
  },
  {
    id: "quality-analytics-dashboard",
    name: "Quality Analytics Dashboard",
    category: "Industrial Software & Dashboards",
    shortDescription:
      "Quality dashboard for defects, grades, inspection evidence, trends, and product-level analytics.",
    overview:
      "A quality analytics layer for inspection outputs, lab data, production records, and VisionAI events. It helps teams review defect patterns, product grades, and recurring quality issues.",
    image: "/optimise.png",
    tags: ["Quality", "Analytics", "Defects", "Reports"],
    applications: [
      "Defect trend review",
      "Product-level quality analytics",
      "Inspection evidence browsing",
      "Quality meeting preparation",
    ],
    keyFeatures: [
      "Defect and grade dashboards",
      "Image and event linking",
      "Trend and Pareto analysis",
      "Configurable report exports",
    ],
    deliverables: [
      "Quality dashboard build",
      "Data mapping and model",
      "Report templates",
      "User acceptance support",
    ],
    idealFor:
      "Quality teams that want faster insight into recurring defects, inspection outcomes, and product grade performance.",
  },
  {
    id: "data-submission-portal",
    name: "Data Submission Portal",
    category: "Industrial Software & Dashboards",
    shortDescription:
      "Structured portal for plant teams to submit, validate, review, and track operational data.",
    overview:
      "A secure data-entry and validation portal for recurring plant submissions. It reduces spreadsheet dependency, improves traceability, and creates cleaner data for analytics.",
    image: "/v-boards.webp",
    tags: ["Portal", "Forms", "Validation", "Traceability"],
    applications: [
      "Shift data submission",
      "Quality and process logs",
      "Approval-based data workflows",
      "Audit-ready data history",
    ],
    keyFeatures: [
      "Role-based submission forms",
      "Validation rules and required fields",
      "Review and approval states",
      "Downloadable submission history",
    ],
    deliverables: [
      "Portal screens and workflows",
      "Form and validation setup",
      "User-role configuration",
      "Deployment support",
    ],
    idealFor:
      "Plants that rely on spreadsheets or messages for critical daily data submission and review.",
  },
  {
    id: "industrial-ai-model-monitoring-dashboard",
    name: "Industrial AI Model Monitoring Dashboard",
    category: "Industrial Software & Dashboards",
    shortDescription:
      "Monitoring dashboard for AI model performance, drift indicators, inference health, and events.",
    overview:
      "A model monitoring dashboard for deployed industrial AI systems. It helps teams observe inference volume, confidence trends, drift indicators, data quality, and service health.",
    image: "/opti.png",
    tags: ["ModelOps", "AI Monitoring", "Drift", "Health"],
    applications: [
      "AI model health monitoring",
      "Inference volume and confidence review",
      "Data drift checks",
      "Maintenance and retraining planning",
    ],
    keyFeatures: [
      "Model performance trend cards",
      "Confidence and data-quality indicators",
      "Inference event review",
      "Retraining readiness signals",
    ],
    deliverables: [
      "Monitoring dashboard",
      "Model and event data mapping",
      "Health indicator configuration",
      "Deployment and review workflow",
    ],
    idealFor:
      "Organizations deploying multiple AI models that need operational visibility after go-live.",
  },
];
*/
