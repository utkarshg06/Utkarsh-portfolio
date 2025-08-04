import React from 'react';

const publications = [
  {
    title: 'Psychological Trait Analysis Using Tweets (IEEE ICAAIC)',
    tech: 'Python, Deep Learning, NLP',
    tags: ['#NLP', '#MentalHealth', '#DeepLearning', '#Publication'],
    description:
      'Co-authored a peer-reviewed paper accepted at IEEE under ICAAIC. Proposed a hybrid CNN-LSTM model to detect psychological traits from Twitter data with 99%+ accuracy.',
    link: 'https://ieeexplore.ieee.org/document/10574935',
  },
];

const projects = [
  {
    title: 'Causal Analysis of Customer Outreach on Bank Subscription ',
    tech: 'Python, Scikit-learn, Causal Inference',
    tags: ['#Marketing', '#CausalInference', '#Banking'],
    description:
      'Analyzed 4500+ banking clients using PSM, DiD, Causal Random Forests to quantify outreach effectiveness. Identified initial contact increased subscription rates by 11.1%. Repeated calls decreased by 2.6%. Delivered data-driven recommendations to improve marketing ROI, reduce outreach costs. ',
    link: 'https://github.com/utkarshg06/Previous_Contact_and_Subscription_Rates_Market_Analytics',
  },
  {
    title: 'Duke Health – Analyzing the Impact of Medicaid Expansion on Health Outcomes ',
    tech: 'R, SQL, Tableau',
    tags: ['#Healthcare', '#Policy', '#CausalInference'],
    description: 
      "Led a data-driven analysis using SQL, R, and Tableau to assess Medicaid expansion’s impact on NCDs. Synthesized multi-source healthcare data, applied predictive modeling, and delivered strategic insights to inform policy & highlighting care gaps.",
    link: 'https://github.com/utkarshg06/Duke_Health_CMS_Coverage_Health_Outcomes',
  },
  {
    title: 'Pyramyd.AI – Predictive Bidding Engine',
    tech: 'Python, LightGBM, FastAPI',
    tags: ['#AdTech', '#ML', '#FastAPI'],
    description: 'Designed an internal AI workflow demo for Pyramyd.AI, showcasing image collaging from user inputs using segmentation models. Built a responsive UI with automated backend processing to highlight real-time media manipulation capabilities.',
    link: 'https://github.com/utkarshg06/PyramydAI-API-Project',
  }, 
  {
    title: 'Movie Recommendation System and testing',
    tech: 'Python, Pandas, Matplotlib, Seaborn',
    tags: ['#RecommendationSystem', '#ML', '#Python'],
    description: 'Built a genre-aware recommender using collaborative filtering and clustering on MovieLens data. Evaluated user-level relevance through hit-rate scoring and optimized clustering for balanced accuracy and variety.',
    link: 'https://github.com/utkarshg06/Recommendation-System-and-Testing',
  }, 
  {
    title: 'Brain Tumor Detection Using HOG and SVM',
    tech: 'CNN, Tensorflow, Keras, ML, KNN, Logistic Regression, Naive Bayes',
    tags: ['#RecommendationSystem', '#ML', '#CNN', "#SVM"],
    description: 'Developed a machine learning system for accurate brain tumor classification using MRI images. The project enhanced image quality through preprocessing techniques, extracted features via Histogram of Oriented Gradients (HOG), and applied Support Vector Machines (SVM) for classification. This approach enabled early tumor detection, supporting effective treatment planning and improving patient outcomes.',
    link: 'https://github.com/utkarshg06/Brain_Tumor_Detection_Using_HOG_and_SVM',
  }, 

  
  
];

const ProjectCard = ({ title, tech, tags, description, link, type }) => (
  <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800">
    <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-1">{title}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{tech}</p>
    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-white px-2 py-0.5 rounded-full text-xs font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
    >
      {type === 'pub' ? 'View Publication ↗' : 'View Project ↗'}
    </a>
  </div>
);

const Projects = () => (
  <section className="max-w-6xl mx-auto px-6 py-12 space-y-12">
    {/* Publications */}
    <div>
      <h2 className="text-3xl font-bold mb-6">Publications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {publications.map((pub, idx) => (
          <ProjectCard key={idx} {...pub} type="pub" />
        ))}
      </div>
    </div>

    {/* Projects */}
    <div>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} type="project" />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
