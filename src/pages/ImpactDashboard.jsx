import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

// Categorized learner feedback
const categories = {
  'Confidence Building': [
    "The program gave me confidence to tackle my studies head-on!",
    "I now believe in my ability to succeed.",
    "HFSA has helped me realize my full potential in academics.",
    "I feel more confident in solving challenging problems.",
  ],
  'Maths & Science Improvements': [
    "My math grades have improved significantly, and I feel better prepared for exams.",
    "Physics has become much easier to understand with practical examples.",
    "I have a better understanding of mathematical concepts.",
    "Science became my favorite subject thanks to HFSA's support.",
  ],
  'Future Aspirations': [
    "I am now considering a career in engineering because of the exposure I received.",
    "The program opened my eyes to the possibilities of higher education.",
    "HFSA helped me decide to pursue computer science at university.",
    "I am now excited to apply to top universities with confidence.",
  ],
  'General Feedback': [
    "The mentors were so supportive and always available for guidance.",
    "The environment created by HFSA made learning enjoyable and exciting.",
    "I learned valuable study habits that will stay with me forever.",
    "The support from peers and instructors made all the difference.",
  ]
};

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
  const [selectedCategory, setSelectedCategory] = useState('Confidence Building');
  const [showModal, setShowModal] = useState(false);

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

      {/* Learner Testimonials Section */}
      <div className="mt-16 bg-white p-10 shadow-2xl rounded-3xl transform hover:scale-105 transition-all duration-300 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800 tracking-wide">
          🎤 Learner Testimonials 🎤
        </h2>
        <p className="text-gray-500 mb-8">Explore what our learners have to say!</p>

        <div className="flex justify-center space-x-4 mb-6">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                selectedCategory === category ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories[selectedCategory].map((quote, index) => (
            <div key={index} className="p-6 bg-gradient-to-r from-purple-200 to-indigo-300 rounded-lg shadow-lg text-center">
              <p className="text-lg italic text-gray-900">“{quote}”</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-indigo-500 text-white rounded-full shadow-lg hover:bg-indigo-600 transition-all"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Modal for More Feedback */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded-xl shadow-2xl max-w-3xl w-full">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">📢 More Feedback</h2>

            {Object.entries(categories).map(([category, quotes]) => (
              <div key={category} className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  {quotes.map((quote, index) => (
                    <li key={index} className="mb-2 italic">“{quote}”</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="text-center">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-700 transition-all"
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
