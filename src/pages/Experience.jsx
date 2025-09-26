import React from 'react';
import { Briefcase, Sparkles } from 'lucide-react';

const experiences = [
  {
    title: 'Student Analyst & Consultant',
    company: 'Duke Health',
    duration: 'March 2025 – May 2025',
    details: [
      "Led a data-driven analysis using SQL, R, and Tableau to assess Medicaid expansion’s impact on NCDs.",
      "Synthesized multi-source healthcare data, applied predictive modeling, and delivered strategic insights to inform policy & highlighting care gaps."
    ]
  },
  {
    title: 'Business & Product Analyst Intern',
    company: 'HCLTech',
    duration: 'Nov 2023 – Jun 2024',
    details: [
      'Optimized Bing Search algorithms using large-scale clickstream data, increasing user engagement by 20%.',
      'Designed and deployed robust data pipelines processing 100GB+ of structured and unstructured data daily.',
      'Enhanced SQL query logic across data sources, reducing ETL cycle latency by 25%.',
      'Delivered interactive Power BI dashboards, elevating business intelligence delivery speed by 30%.'
    ]
  },
  {
    title: 'Data & Operations Analyst Intern',
    company: 'Siemens – IT',
    duration: 'Jan 2023 – Jul 2023',
    details: [
      'Assessed throughput analytics across airport baggage handling systems using SQL and Python.',
      'Delivered performance insights via Basic Bag IQ for microservices scaling, improving process efficiency by 14%.',
      'Built Java-based error-checking tools that reduced false flagging in live data streams by 15%.'
    ]
  }, 
  {
    title: 'Software Engineer Intern',
    company: 'Jastech Systems Pvt Ltd.',
    duration: 'Dec 2022 – Jan 2023',
    details: [
      'Developed and optimized internal software tools to automate reporting and data workflows, reducing manual processing time by 35% and improving team efficiency.',
      'Implemented Python-based monitoring scripts to validate power distribution system parameters, enhancing diagnostic accuracy and cutting error detection time by 15%.',
      'Collaborated with senior engineers to design dashboards (Power BI/SQL) for real-time performance tracking, enabling faster decision-making for client projects.'
    ]
  }, 
  {
    title: 'Software Developer Intern',
    company: 'Sunbeam Lightweighting Solutions Pvt Ltd.',
    duration: 'May 2022 – Sep 2022',
    details: [
      'Engineered and deployed inventory tracking and monitoring modules in Java/SQL, reducing manual errors by 30% and improving reporting speed by 25% across production units.',
      'Developed Python scripts to analyze casting machine logs, enabling early detection of bottlenecks and driving a 12% improvement in throughput efficiency.',
      'Optimized database queries and error-handling routines, cutting monitoring system downtime by 15% and enhancing overall operational reliability.'
    ]
  }
];

const skillCategories = [
  {
    category: 'Languages & Tools',
    skills: ['SQL', 'Python', 'R', 'Advanced Excel', 'Jupyter', 'Java', 'Java Script', 'C++', 'noSQL', 'Node.js']
  },
  {
    category: 'Data & BI Platforms',
    skills: ['Power BI', 'Tableau', 'Looker Studio', 'Matplotlib', 'Numpy', 'Seaborn', 'Pandas', 'Jira']
  },
  {
    category: 'Cloud Platforms',
    skills: ['Spark', 'HPC','DataBricks', 'AWS', 'Azure', 'GCP' ]
  },
  {
    category: 'Analytics & Methods',
    skills: [
      'Market Research', 'Business Solutions', 'A/B Testing', 'Predictive Modeling',
      'Regression', 'Forecasting', 'Clustering', 'Data Mining', 'Stakeholder Management',
      'Hypothesis Testing', 'Neural Networks', 'Deep Learning', 'Executive Dashboarding',
      'Data Synthesis', 'Financial Reporting', 'Data Warehousing', 'Feature Engineering', 'Causal Inference'
    ]
  },
  {
    category: 'ML & NLP',
    skills: [ 'Supervised / Unsupervised Learning', 'NLP','BERT','TensorFlow','PyTorch','Keras','scikit-learn','MLOps']
  }
];

const Experience = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Sticky Jump-to Nav */}
      <div className="sticky top-0 z-30 bg-white dark:bg-gray-950 py-4 border-b border-gray-200 dark:border-gray-800 shadow backdrop-blur-md mb-24">
        <div className="flex justify-center gap-10 font-medium text-base">
          <a href="#experience" className="text-indigo-700 dark:text-indigo-300 hover:underline">🎯 Experience</a>
          <a href="#skills" className="text-indigo-700 dark:text-indigo-300 hover:underline">🚀 Skills</a>
        </div>
      </div>

      {/* Experience Section */}
      <div id="experience" className="text-center mb-24">
        <h2 className="text-5xl font-bold text-indigo-700 dark:text-indigo-300 mb-8 flex justify-center items-center gap-3">
          <Briefcase className="w-10 h-10" /> Experience
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Real-world impact through internships in software development, analytics and consulting across global organizations.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l-[3px] border-indigo-300 dark:border-indigo-600 ml-4 space-y-14">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8">
            <span className="absolute left-[-10px] top-1.5 w-5 h-5 bg-indigo-500 rounded-full border-4 border-white dark:border-gray-900" />
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-indigo-200 dark:border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">
                {exp.title} <span className="text-gray-800 dark:text-gray-200 font-medium">— {exp.company}</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.duration}</p>
              <ul className="mt-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                {exp.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div id="skills" className="mt-32 text-center">
        <h2 className="text-5xl font-bold text-indigo-700 dark:text-indigo-300 mb-14 flex justify-center items-center gap-4">
          <Sparkles className="w-10 h-10" /> Skills
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Tools, technologies, and statistical methods powering my data-driven solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 max-w-5xl mx-auto">
          {skillCategories.map((group, i) => (
            <div key={i} className="space-y-6">
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">{group.category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-4 py-2 text-sm font-medium bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-white rounded-full shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
