import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

// Sample quotes extracted from the dataset
const quotes = [
  "The program had a great benefit to my studies and confidence.",
  "It brought back the love I had for maths.",
  "I actually realized physics is not that difficult.",
  "The food was nice and healthy at the start, then became repetitive.",
  "The program helped me in many ways as it provided the guidance I needed.",
];

// Suggestions from learners
const suggestions = [
  "More one-on-one tutoring sessions would be helpful.",
  "Extend the program to cover more subjects.",
  "Provide additional study materials and practice tests.",
  "Organize more career guidance workshops.",
  "Offer weekend study camps for focused learning.",
];

// Sample data for charts (keep your existing data)
const data = {
  labels: ['Maths Improved', 'Physics Improved', 'Future Studies Considered', 'Accepted', 'Provisionally Accepted', 'Pending', 'Waiting List'],
  datasets: [
    {
      label: 'Number of Learners',
      data: [15, 12, 20, 10, 8, 5, 7],
      backgroundColor: ['#4CAF50', '#2196F3', '#FF9800', '#673AB7', '#E91E63', '#9C27B0', '#FFC107'],
    },
  ],
};

const fundingData = {
  labels: ['NSFAS', 'HCI Foundation', 'ISFAP', 'Other'],
  datasets: [
    {
      data: [25, 10, 8, 7],
      backgroundColor: ['#FFEB3B', '#00BCD4', '#9E9E9E', '#FF5722'],
    },
  ],
};

const ImpactDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    if (showModal) {
      const interval = setInterval(() => {
        setCurrentQuote((prevIndex) => (prevIndex + 1) % quotes.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showModal]);

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-800 tracking-wide">
        🚀 HFSA Impact Dashboard 🚀
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 shadow-xl rounded-xl transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">📊 Academic Improvement</h2>
          <Bar data={data} />
        </div>
        <div className="bg-white p-8 shadow-xl rounded-xl transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">💰 Funding Sources</h2>
          <Pie data={fundingData} />
        </div>
      </div>

      {/* Learner Quotes Section */}
      <div className="mt-16 bg-white p-10 shadow-2xl rounded-3xl transform hover:scale-105 transition-all duration-300 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800 tracking-wide">
          🎤 Learner Testimonials 🎤
        </h2>
        <p className="text-gray-500 mb-8">Hear what our learners have to say about their experience!</p>

        <div className="relative bg-gradient-to-r from-purple-300 to-indigo-400 p-6 rounded-lg shadow-lg">
          <p className="text-lg italic text-gray-900 font-semibold animate-fade-in">
            “{quotes[currentQuote]}”
          </p>
        </div>

        <div className="mt-10">
          <button 
            onClick={() => setShowModal(true)} 
            className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-800 transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Modal for More Quotes and Suggestions */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded-xl shadow-2xl max-w-3xl w-full animate-slide-in">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">📢 Learner Insights</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">🌟 More Testimonials</h3>
              <div className="relative bg-gradient-to-r from-green-300 to-blue-400 p-6 rounded-lg shadow-lg">
                <p className="text-lg italic text-gray-900 font-semibold">
                  “{quotes[currentQuote]}”
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">💡 Suggestions</h3>
              <ul className="list-disc pl-6 text-gray-700">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="mb-2">{suggestion}</li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <button 
                onClick={() => setShowModal(false)} 
                className="px-6 py-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-700 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImpactDashboard;
