import vish1 from "./asset1/vish1.jpeg";

const logotext = "VM";

const meta = {
  title: "Vishakha Maheshwari",
  description:
    "Aspiring Data Scientist with hands-on experience in ML, NLP, and predictive analytics. Currently AI Enablement Intern at Gradiant Industries in Abu Dhabi; ex-Zurich Kotak General Insurance and Deloitte (M.E.)."
};

const introdata = {
  title: "I’m Vishakha Maheshwari",
  animated: {
    first: "I make ML explain itself.",
    second: "I solve real problems with data.",
    third: "From raw data to clear decisions."
  },
  description:
    "Aspiring Data Scientist with a strong foundation in ML, NLP, and predictive analytics. I love turning messy data into deployable apps and decision-ready dashboards.",
  your_img_url: vish1
};

const dataabout = {
  title: "Introduction",
  aboutme:
    "B.Tech CSE, VIT'25 graduate. Currently an AI Enablement Intern at Gradiant Industries , where I’m building a custom GPT solution with RAG + LangChain and a Streamlit ML pipeline for sales forecasting. Previously built Qlik Sense applications at Zurich Kotak General Insurance and analytics dashboards at Deloitte (M.E.). Passionate about applied ML and data-driven decision making."
};

const worktimeline = [
  {
    jobtitle: "AI Enablement Intern",
    where: "Gradiant Industries L.L.C – S.P.C, Abu Dhabi",
    date: "08/2025 – Present"
  },
  {
    jobtitle: "Data Analyst Intern (Application Team)",
    where: "Zurich Kotak General Insurance, Mumbai",
    date: "01/2025 – 05/2025"
  },
  {
    jobtitle: "Data Analyst Intern (Audit & Assurance)",
    where: "Deloitte & Touche (M.E.), Abu Dhabi",
    date: "10/2023 – 12/2023"
  }
];

const skills = [
  { name: "Python", value: 90 },
  { name: "SQL", value: 90 },
  { name: "Qlik Sense", value: 90 },
  { name: "Power BI", value: 85 },
  { name: "Tableau", value: 80 },
  { name: "Streamlit", value: 85 },
  { name: "Scikit-learn", value: 80 },
  { name: "TensorFlow/Keras", value: 70 },
  { name: "LangChain & RAG", value: 70 }
];

const services = [
  {
    title: "RAG-Powered Knowledge Assistants",
    description:
      "Custom GPTs for internal knowledge retrieval using LangChain + vector search."
  },
  {
    title: "Decision Dashboards (Qlik/Power BI/Tableau)",
    description:
      "Operational KPI monitoring with secure row-level access and optimized ETL/refresh."
  },
  {
    title: "Forecasting & ML Pipelines",
    description:
      "End-to-end Streamlit apps for sales forecasting and what-if analysis."
  },
  {
    title: "NLP & Document Intelligence",
    description:
      "Resume parsing, classification, and text analytics with NER and deep learning."
  },
  {
    title: "Certifications",
    description: "Machine Learning by Stanford University (Coursera)"
  }
];

// Note: the template expects the (misspelled) key `desctiption`.
// `link` is intentionally left as "" to disable navigation for now.
const dataportfolio = [
  {
    img: "https://picsum.photos/400/?grayscale",
    desctiption: "Advanced Resume Parsing Tool (Python · NLP · Streamlit)",
    link: ""
  },
  {
    img: "https://picsum.photos/400/800/?grayscale",
    desctiption: "Bulldozer Price Prediction (Random Forest · FE · CV)",
    link: ""
  },
  {
    img: "https://picsum.photos/400/600/?grayscale",
    desctiption: "Fake News Detection with LSTM (~90% accuracy)",
    link: ""
  },
  {
    img: "https://picsum.photos/400/500/?grayscale",
    desctiption: "RAG Knowledge Assistant (LangChain + Vector DB)",
    link: ""
  }
];

const contactConfig = {
  YOUR_EMAIL: "vishakhamaheshwari19@gmail.com",
  YOUR_FONE: "+971 *******83",
  description:
    "Open to research internships and full-time roles in Data Science / ML. Let’s collaborate on applied ML, analytics dashboards, or AI enablement projects.",
  YOUR_SERVICE_ID: "service_zb3bmu8",
  YOUR_TEMPLATE_ID: "template_uz8avrh",
  YOUR_USER_ID: "Yj5ojzhdk8jHrR9mG"
};

const socialprofils = {
  github: "https://github.com/CodeByVish",
  linkedin: "https://www.linkedin.com/in/vishakha-maheshwari-7a6b9731a/"
};

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext
};
