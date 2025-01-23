import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const Grade11Dashboard = () => {
  const [activeTestimonialCategory, setActiveTestimonialCategory] = useState('academic');

  // Data Processing
  const subjectImprovementData = [
    { subject: 'Maths', improved: 10, notImproved: 2 },
    { subject: 'Physics', improved: 9, notImproved: 3 }
  ];

  const programBenefitsData = [
    { benefit: 'Confidence', count: 10 },
    { benefit: 'Study Skills', count: 7 },
    { benefit: 'Academic Performance', count: 9 },
    { benefit: 'Career Awareness', count: 8 }
  ];

  const testimonials = {
    academic: [
      '"The program helped me improve my problem-solving skills." - Learner 3',
      '"My marks improved, and I felt more confident." - Learner 5',
      '"I learned how to study more effectively." - Learner 9'
    ],
    personal: [
      '"It made learning more enjoyable and interactive." - Learner 11',
      '"The program motivated me to work harder." - Learner 6',
      '"I gained confidence in my abilities." - Learner 12'
    ],
    career: [
      '"I feel more ambitious about my future." - Learner 1',
      '"I have more career options now." - Learner 2',
      '"I feel empowered about my career possibilities." - Learner 11'
    ]
  };

  const improvementSuggestions = [
    'Provide more career guidance',
    'Offer more practical sessions',
    'Add guest speakers',
    'Increase mentorship opportunities',
    'Offer online support',
    'Include career workshops'
  ];

  return (
    <div className="p-6 w-full max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Grade 11 Program Impact Dashboard</h1>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Charts remain the same as previous version */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Subject Improvement</h2>
          <BarChart width={400} height={250} data={subjectImprovementData}>
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="improved" stackId="a" fill="#82ca9d" name="Improved" />
            <Bar dataKey="notImproved" stackId="a" fill="#ff6b6b" name="Not Improved" />
          </BarChart>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Student Testimonials</h2>
          <div className="flex mb-4">
            {['academic', 'personal', 'career'].map(category => (
              <button 
                key={category}
                onClick={() => setActiveTestimonialCategory(category)}
                className={`px-4 py-2 mr-2 rounded ${activeTestimonialCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div>
            {testimonials[activeTestimonialCategory].map((testimonial, index) => (
              <p key={index} className="mb-2 italic">{testimonial}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Suggestions Section */}
      <div className="mt-6 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Program Improvement Suggestions</h2>
        <ul className="list-disc pl-5">
          {improvementSuggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Grade11Dashboard;