import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

// Categorized learner feedback with assigned colors
const categories = {
  'Confidence Building': {
    color: '#8E44AD',
    responses: [
      "I really am encouraged when I come to my future career back then. The motivation I would get from Mr. Patti, Ms. Ilhaam and the teachers."
    ]
  },
  'Maths & Science Improvements': {
    color: '#3498DB',
    responses: [
      "I'm so fortunate to be a part of HFSA to a point that I want to be a maths and physics genius. I benefited a lot from this program as my maths and physics performance at my school really, really improved.",
      "My math marks have become much more consistent, whereas in the past it used to fluctuate between high and low.",
      "After maths, I figured it out by the assistance of my peers explaining that you need to do more practice. Maths is all about practicing in order to understand. No reading or scanning of notes is necessary.",
      "My physics marks have seen stable increases throughout the year.",
      "When you are working on boosting your marks in this subject, you need to put in dedication or wishing you will master it. By practicing problem-solving it will be easy to do practical problems."
    ]
  },
  'Future Aspirations': {
    color: '#27AE60',
    responses: [
      "Yes, it has helped me a lot by exposing me to many different career paths.",
      "Yes, it has made me realize that I would need to work hard as many other people may pursue the same career.",
      "I really am encouraged when I come to my future career back then. The motivation I would get from Mr. Patti, Ms. Ilhaam and the teachers."
    ]
  },
  'General Feedback': {
    color: '#F39C12',
    responses: [
      "The food was very enjoyable and it also provided us with sufficient nutrition to allow us to continue working hard."
    ]
  }
};

const ImpactDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('Confidence Building');

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-800 tracking-wide">
        🚀 HFSA Impact Dashboard 🚀
      </h1>

      <div className="mt-16 bg-white p-10 shadow-2xl rounded-3xl text-center">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-800 tracking-wide">
          🎤 Learner Testimonials 🎤
        </h2>

        <div className="flex justify-center space-x-8 mb-10">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                selectedCategory === category ? `text-white` : `text-gray-700`
              }`}
              style={{ backgroundColor: categories[category].color }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories[selectedCategory].responses.map((quote, index) => (
            <div key={index} className="p-10 bg-gray-100 rounded-lg shadow-lg text-center">
              <p className="text-xl italic text-gray-900">“{quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactDashboard;
