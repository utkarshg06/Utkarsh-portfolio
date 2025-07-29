
import React from 'react';
import resumePDF from '../assets/Utkarsh_Resume.pdf';

const Resume = () => {
  return (
    <section className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <iframe
        src={resumePDF}
        title="Utkarsh Resume"
        className="w-full h-[800px] border border-gray-300 dark:border-gray-700 mb-4"
      />
      <a
        href={resumePDF}
        download="Utkarsh_Gupta_Resume.pdf"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
