import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

// Categorized learner feedback with assigned colors
const categories = {
  'Confidence Building': {
    color: '#8E44AD',
    responses: [
      "I really am encouraged when I come to my future career back then. The motivation I would get from Mr. Patti, Ms. Ilhaam and the teachers.",
      "The encouragement I received from the staff helped me push through tough times. I feel more capable of achieving my goals now.",
      "I feel a lot more confident about my future career options. The positive feedback from my mentors made a huge difference."
    ]
  },
  'Maths & Science Improvements': {
    color: '#3498DB',
    responses: [
      "I'm so fortunate to be a part of HFSA. I want to be a maths and physics genius. I benefited a lot from this program as my maths and physics performance at school really, really improved.",
      "My math marks have become much more consistent, whereas in the past they fluctuated between high and low.",
      "After maths, I figured it out with the assistance of my peers, explaining that you need to practice more. Maths is all about practicing to understand. No reading or scanning of notes is necessary.",
      "My physics marks have seen stable increases throughout the year, and now I approach the subject with confidence.",
      "I always struggled with physics, but thanks to the program, I now feel more confident in solving problems and applying concepts."
    ]
  },
  'Future Aspirations': {
    color: '#27AE60',
    responses: [
      "Yes, it has helped me a lot by exposing me to many different career paths. I now have a clearer idea of what I want to do in the future.",
      "Yes, it has made me realize that I would need to work hard, as many others may pursue the same career, but I’m motivated to succeed.",
      "The program has shown me that there are many opportunities out there. I’m grateful for the exposure to different fields and career paths.",
      "Thanks to HFSA, I now have the motivation and guidance to pursue a career I never thought I could achieve. I am more focused and determined."
    ]
  },
  'General Feedback': {
    color: '#F39C12',
    responses: [
      "The food was very enjoyable and it also provided us with sufficient nutrition to allow us to continue working hard.",
      "I really appreciated the food, as it kept me energized throughout the program. It was nice to have such thoughtful arrangements.",
      "The program wasn’t just about learning; it was also about holistic growth. The meals and breaks were well organized, making the experience more enjoyable."
    ]
  }
};

const data = {
  labels: ['Maths Improved', 'Physics Improved', 'Future Studies Considered', 'Accepted', 'Provisionally Accepted', 'Pending', 'Waiting List'],
  datasets: [
    {
      label: 'Number of Learners',
      data: [28, 20, 40, 18, 25, 13, 15],
      backgroundColor: ['#4CAF50', '#2196F3', '#FF9800', '#673AB7', '#E91E63', '#9C27B0', '#FFC107'],
    },
  ],
};

const fundingData = {
  labels: ['NSFAS', 'HCI Foundation', 'ISFAP', 'Other'],
  datasets: [
    {
      data: [40, 20, 15, 10],
      backgroundColor: ['#FFEB3B', '#00BCD4', '#9E9E9E', '#FF5722'],
    },
  ],
};

const ImpactDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('Confidence Building');

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
