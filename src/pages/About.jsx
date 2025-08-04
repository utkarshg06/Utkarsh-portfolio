import React from 'react';
import { GraduationCap } from 'lucide-react';
import portimage from '../assets/utkarsh.jpg';
const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* About Me Section */}
      <div className="mb-24">
        <h1 className="text-6xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-12 text-center tracking-tight">
          About Me
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src={portimage} 
              alt="Utkarsh Gupta"
              className="w-80 h-110 object-cover rounded-2xl shadow-lg border-4 border-indigo-200 dark:border-indigo-700"
            />
          </div>

          {/* About Description */}
          <div className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
            <p>
              I am <strong>Utkarsh Gupta</strong>, a data-driven problem solver with a background in Computer Science and a strategic edge honed through my M.S. in Quantitative Management: Business Analytics at <strong>Duke University’s Fuqua School of Business</strong>.
              I thrive at the intersection of analytics, business strategy, and stakeholder impact, turning raw data into insights that drive real-world decisions.
            </p>
            <br />
            <p>
              Whether leading capstone projects on Medicaid expansion, building fraud detection pipelines, or translating statistical models for C-suite stakeholders, I have consistently brought structure to ambiguity and clarity to complexity.
            </p>
            <br />
            <p>
              I bring a rare balance: a technical foundation in Python, SQL, and machine learning, combined with a consulting mindset shaped by storytelling, client communication, and business-first thinking. My work is not just about crunching numbers, it’s about influencing outcomes.
            </p>
            <br />
            <p>
              I am looking to join teams where data is not just a tool, but a core driver of innovation. If you're solving hard problems and need someone who can ask the right questions, challenge assumptions, and deliver with precision, I’d love to connect.
            </p>

            {/* Contact Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:utkarsh.gupta@duke.edu"
                className="px-4 py-2 text-sm font-medium border border-indigo-600 text-indigo-700 dark:text-indigo-300 rounded hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
              >
                📧 utkarsh.gupta@duke.edu 
              </a>
              <a
                href="https://www.linkedin.com/in/utkarsh-gupta060702/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium border border-indigo-600 text-indigo-700 dark:text-indigo-300 rounded hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
              >
                🔗 LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-32">
        <h2 className="text-4xl font-bold text-center text-indigo-700 dark:text-indigo-300 mb-14 flex justify-center items-center gap-2">
          <GraduationCap size={28} /> Education
        </h2>

        {/* Timeline container */}
        <div className="relative border-l-[3px] border-indigo-300 dark:border-indigo-600 ml-4 space-y-14">

          {/* Duke */}
          <div className="relative pl-8">
            <span className="absolute left-[-10px] top-1.5 w-5 h-5 bg-indigo-500 rounded-full border-4 border-white dark:border-gray-900" />
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-indigo-200 dark:border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">Duke University – Fuqua School of Business</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">M.S. in Quantitative Management: Business Analytics, May 2025</p>
              <ul className="mt-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>Capstone Lead on Medicaid Expansion strategy project</li>
                <li>Focused coursework in AI/ML, Strategic Analytics, Fraud Detection, Cyber Risk</li>
                <li>Hands-on work in stakeholder-facing model delivery and business impact</li>
              </ul>
            </div>
          </div>

          {/* SRM */}
          <div className="relative pl-8">
            <span className="absolute left-[-10px] top-1.5 w-5 h-5 bg-indigo-500 rounded-full border-4 border-white dark:border-gray-900" />
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-indigo-200 dark:border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">SRM Institute of Science and Technology</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">B.Tech in Computer Science & Engineering, June 2024</p>
              <ul className="mt-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>Capstone in Mental Health NLP & Brain Tumor Detection using ML</li>
                <li>Leadership: PR Head – TEDx Club, Technical Society Executive</li>
                <li>Hosted university-wide workshops and peer-led research meetups</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
