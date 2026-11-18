// All site content lives here. Edit this file to update the portfolio —
// the components only handle layout.

export const profile = {
  name: 'Abhishek Charan',
  headline: 'Business development and data analytics, grounded in finance',
  intro:
    'MBA in Business Analytics & Finance from the Army Institute of Management, Kolkata, and a B.Tech in Computer Science. Seven years in financial services at Angel One; now driving AI-adoption business development at TechnoStruct. I turn messy data into decisions with dashboards, data pipelines and LLM automations.',
  // Shown next to your photo at the top of the page.
  status: 'Business Development Executive at TechnoStruct, LLC',
  // Shown in the Contact section.
  availability:
    'Open to conversations about business development, analytics and AI-adoption roles and projects.',
  location: 'Kolkata, West Bengal',
  email: 'abhishekcharan.learn@gmail.com',
  phoneDisplay: '+91 79800 67604',
  phoneHref: 'tel:+917980067604',
  linkedin: 'https://linkedin.com/in/about-abhishek-charan',
  linkedinLabel: 'linkedin.com/in/about-abhishek-charan',
  // Add your GitHub profile URL here and it will appear in the header, contact section and footer.
  github: '',
  resume: '/resume.pdf',
  photo: '/photo.webp',
};

export const summary = [
  'I work where business and technology meet. Over seven years as a channel partner at Angel One I analysed 350+ client portfolios for risk appetite and credit patterns, handled onboarding and compliance, and brought inactive clients back. Since July 2026 I have been leading AI-adoption business development at TechnoStruct, finding where AI can streamline project workflows.',
  'Alongside that I build analytics: market-basket analysis for a diagnostics centre, predictive-maintenance models, KPI dashboards, and n8n workflows that run a self-hosted LLaMA model to turn unstructured financial data into structured tables.',
];

export const stats = [
  { value: 7, suffix: '+', label: 'years in financial services' },
  { value: 350, suffix: '+', label: 'client portfolios analysed at Angel One' },
  { value: 5000, suffix: '+', label: 'stocks tracked by my app, Track My Stock' },
  { value: 2500, suffix: '+', label: 'sensor records modelled at 360DigiTMG' },
];

export type Experience = {
  role: string;
  org: string;
  place?: string;
  period: string;
  type?: 'Current' | 'Full-time' | 'Internship' | 'Own business';
  points: string[];
};

export const experience: Experience[] = [
  {
    role: 'Business Development Executive',
    org: 'TechnoStruct, LLC',
    place: 'Kolkata',
    period: 'Jul 2026 – Present',
    type: 'Current',
    points: [
      'Analysed existing BIM processes and identified AI integration opportunities that improved resource utilisation and streamlined project workflows.',
      'Researched emerging AI technologies and developed implementation strategies across company operations.',
      'Led business development initiatives on AI adoption, aligning technology opportunities with organisational goals for efficiency and scale.',
    ],
  },
  {
    role: 'Channel Partner',
    org: 'Angel One Ltd.',
    place: 'Kolkata',
    period: 'May 2019 – Jul 2026',
    points: [
      'Ran financial-behaviour analysis on 350+ client portfolios to assess risk appetite and credit patterns.',
      'Worked directly with customers to evaluate their financial needs, strengthening SME credit assessments.',
      'Achieved 100% accuracy in onboarding documentation and compliance checks.',
      'Revived 5% of inactive clients through targeted outreach, reducing credit risk.',
    ],
  },
  {
    role: 'Business Development Intern',
    org: 'Green View, collection centre of Dr. Lal PathLabs',
    place: 'Kolkata',
    period: 'Aug 2025 – Sep 2025',
    type: 'Internship',
    points: [
      'Ran market-basket analysis with association rule mining on 350+ data points.',
      'Identified tests that are often ordered together and used them to design bundled diagnostic packages.',
      'Contributed to a 5% increase in monthly client registrations through targeted market analysis.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    org: '360DigiTMG',
    period: 'Feb 2025 – Mar 2025',
    type: 'Internship',
    points: [
      'Ran ETL on 2,500+ machine sensor records, turning unstructured logs into clean, model-ready datasets.',
      'Delivered a predictive model with 92% accuracy that cut false positives by 20%, reducing downtime.',
      'Built KPI dashboards and presented findings to stakeholders as maintenance recommendations.',
    ],
  },
  {
    role: 'Founder, online retail',
    org: 'Proprietorship firm',
    period: '2022 – 2023',
    type: 'Own business',
    points: [
      'Processed 500+ orders across Amazon, Flipkart and Meesho.',
      'Handled inventory, customer service and logistics end to end.',
    ],
  },
];

export type Project = {
  title: string;
  summary: string;
  points?: string[];
  tech: string[];
  links?: { label: string; href: string }[];
};

export const featuredProject: Project = {
  title: 'Track My Stock',
  summary:
    'A stock-market analytics app for Indian investors, live on Android and the web.',
  points: [
    'Tracks 5,000+ NSE/BSE stocks through market-data APIs and a cloud database.',
    'Portfolio tracking, watchlists and trend monitoring for data-driven decisions.',
    'Designed, built and published end to end.',
  ],
  tech: ['React Native', 'Firebase', 'REST APIs', 'Chart.js'],
  links: [
    {
      label: 'Google Play',
      href: 'https://play.google.com/store/apps/details?id=com.charanindustries.trackmystock',
    },
    { label: 'Web app', href: 'https://trackmystock.netlify.app/' },
  ],
};

export const projects: Project[] = [
  {
    title: 'LLM automation for unstructured financial data',
    summary:
      'n8n workflows that pass unstructured financial documents through a self-hosted LLaMA model and return clean, structured tables.',
    points: [
      'Self-hosted LLaMA deployed with Docker, orchestrated in n8n.',
      'Cuts manual data entry before analysis and reporting.',
    ],
    tech: ['n8n', 'LLaMA', 'Docker'],
  },
  {
    title: 'AI-powered attendance system',
    summary:
      'Facial-recognition attendance for classrooms and offices, with real-time reports for administrators.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Flask'],
  },
];

export const otherProjects: Project[] = [
  {
    title: 'Payment backend for an NGO',
    summary: 'Donation processing with a payment gateway, donor records and automatic receipts.',
    tech: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Dr. Money',
    summary: 'A Next.js site combining health-expense tracking with financial planning tools.',
    tech: ['Next.js', 'Tailwind CSS', 'Firebase'],
  },
  {
    title: 'Inventory ERP for Android',
    summary: 'Stock tracking with barcode scanning and purchase orders for small businesses.',
    tech: ['Java', 'Android SDK', 'SQLite'],
  },
  {
    title: 'Sathi',
    summary: 'An anonymous peer-support platform with moderated group chat.',
    tech: ['React', 'Node.js', 'Socket.io'],
  },
  {
    title: 'Offline video editor',
    summary: 'A desktop tool that automates scene cuts and batch edits without internet.',
    tech: ['Python', 'OpenCV', 'FFmpeg', 'PyQt'],
  },
  {
    title: 'Blooming Buds Education Center',
    summary: 'Website for a coaching centre with course listings and a parent portal.',
    tech: ['WordPress', 'PHP', 'MySQL'],
  },
];

export const skillGroups = [
  {
    name: 'Business development',
    items: ['Opportunity identification', 'Client acquisition', 'Relationship management', 'AI-adoption strategy'],
  },
  { name: 'Data & programming', items: ['Python', 'R', 'SQL', 'JavaScript'] },
  {
    name: 'Analytics & visualisation',
    items: ['Power BI', 'Tableau', 'Advanced Excel', 'Market-basket analysis', 'KPI reporting'],
  },
  {
    name: 'Business analysis',
    items: ['Efficiency analysis', 'Requirement gathering', 'Gap analysis', 'BPMN / UML', 'Stakeholder communication'],
  },
  {
    name: 'Finance',
    items: ['Portfolio analysis', 'Credit assessment', 'Onboarding & compliance', 'Mutual funds (NISM V-A)'],
  },
  {
    name: 'Data engineering & automation',
    items: ['ETL', 'n8n workflows', 'Docker', 'LLM integration (LLaMA)'],
  },
  {
    name: 'App & web development',
    items: ['React', 'React Native', 'Next.js', 'Firebase'],
  },
];

export const education = [
  {
    degree: 'MBA, Business Analytics & Finance',
    school: 'Army Institute of Management, Kolkata',
    period: '2024 – 2026',
  },
  {
    degree: 'B.Tech, Computer Science & Engineering',
    school: 'Calcutta Institute of Engineering and Management',
    period: '2018 – 2022',
  },
  {
    degree: 'Higher Secondary',
    school: 'Behala High School, Kolkata',
    period: '2016 – 2018',
  },
  {
    degree: 'Secondary',
    school: 'Behala High School, Kolkata',
    period: '2013 – 2016',
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  note?: string;
  image: string;
  thumb: string;
  verify?: string;
};

export const certificates: Certificate[] = [
  {
    title: 'NISM Series V-A: Mutual Fund Distributors',
    issuer: 'National Institute of Securities Markets (SEBI)',
    date: 'May 2024',
    note: 'Valid until June 2027',
    image: '/certificates/nism-v-a.webp',
    thumb: '/certificates/nism-v-a-thumb.webp',
  },
  {
    title: 'Data for Business Analysts Using Microsoft Excel',
    issuer: 'Microsoft, via Coursera',
    date: 'Jun 2025',
    image: '/certificates/excel-business-analysts.webp',
    thumb: '/certificates/excel-business-analysts-thumb.webp',
    verify: 'https://coursera.org/verify/TBZFNYHR4T19',
  },
  {
    title: 'Business Analysis Fundamentals',
    issuer: 'Microsoft, via Coursera',
    date: 'Dec 2024',
    image: '/certificates/business-analysis-fundamentals.webp',
    thumb: '/certificates/business-analysis-fundamentals-thumb.webp',
    verify: 'https://coursera.org/verify/K6M3ICRXBYPB',
  },
  {
    title: 'Workday Basics Series',
    issuer: 'Workday, via Coursera',
    date: 'Nov 2024',
    image: '/certificates/workday-basics.webp',
    thumb: '/certificates/workday-basics-thumb.webp',
    verify: 'https://coursera.org/verify/5DSB8OWU1D28',
  },
  {
    title: 'Python CLI, industrial training',
    issuer: 'NIEDC with CIEM Kolkata',
    date: 'Jan 2019',
    image: '/certificates/python-cli.webp',
    thumb: '/certificates/python-cli-thumb.webp',
  },
];

export const otherCertificates =
  'Also completed the Deloitte Australia Data Analytics Job Simulation, and certified in Power BI (Infosys) and Tableau.';

export const awards = [
  {
    year: '2025',
    title: 'Honourable Mention, Doctoral Colloquium',
    org: '19th ISDSI-Global Conference, IMI Kolkata',
    detail:
      'Research on preventive health-package subscriptions and fasting blood sugar, using t-tests and ANOVA on 178 anonymised patient records.',
  },
  {
    year: '2025',
    title: '2nd Runner-up, Green Bengal Innovation Contest',
    org: 'Switch On Foundation',
    detail: 'For a sustainable business model.',
  },
  {
    year: '2020',
    title: 'Winner, Hack-A-Day',
    org: 'ACM',
    detail: 'Led a team of four to build a community healthcare tracker in 24 hours.',
  },
  {
    year: '2020',
    title: 'Paper published, ICDCIT 2020',
    org: 'International Conference on Distributed Computing and Internet Technology',
    detail: 'Also shortlisted in the 9th Project Innovation Contest at the same conference.',
  },
  {
    year: '2019',
    title: '1st Runner-up, Droid Blitz',
    org: 'JISTech 2K19',
    detail: 'Android app development contest.',
  },
  {
    year: '2019',
    title: '2nd Runner-up, Royal Rumble',
    org: 'Phoenix 2019',
    detail: 'Robotics competition.',
  },
];

export const leadership = [
  {
    title: 'IT Associate, Student Council',
    org: 'Army Institute of Management, Kolkata',
    period: '2024 – 2026',
    detail: 'Ran IT and digital operations for student council events.',
  },
  {
    title: 'Cybersecurity awareness drive',
    org: 'With the AIM IT Department',
    detail: 'Led sessions that trained 240 students and faculty to recognise current cyber threats.',
  },
  {
    title: 'Team lead, technical competitions',
    org: 'IIT Kharagpur, JIS Tech and others',
    detail: 'Led teams through hackathons and app-building contests.',
  },
  {
    title: 'Public speaking',
    org: 'Inter-college competitions',
    detail: 'First place in an extempore speech competition; 2nd runner-up in a debate competition.',
  },
  {
    title: 'Zoohackathon Kolkata',
    org: 'Hackathon',
    detail: 'Wrote code for wildlife-conservation challenges.',
  },
];

// Milestones plotted on the hero chart, oldest first (shown evenly spaced).
export const milestones = [
  { label: 'B.Tech, Computer Science', year: '2018' },
  { label: 'Joined Angel One', year: '2019' },
  { label: 'Won Hack-A-Day', year: '2020' },
  { label: 'MBA, AIM Kolkata', year: '2024' },
  { label: 'Analytics internships', year: '2025' },
  { label: 'Joined TechnoStruct', year: '2026' },
];
