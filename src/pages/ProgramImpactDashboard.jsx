import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const Grade11Dashboard = () => {
  const [activeTestimonialCategory, setActiveTestimonialCategory] = useState('academic');

  // Data Processing
  const subjectImprovementData = [
    { subject: 'Maths', improved: 45, notImproved: 12 },
    { subject: 'Physics', improved: 38, notImproved: 19 },
    { subject: 'Chemistry', improved: 42, notImproved: 15 },
    // { subject: 'Biology', improved: 27, notImproved: 13 },
    // { subject: 'English', improved: 40, notImproved: 10 },
    // { subject: 'History', improved: 34, notImproved: 16 }
  ];

  const programBenefitsData = [
    { benefit: 'Confidence', count: 56 },
    { benefit: 'Study Skills', count: 47 },
    { benefit: 'Academic Performance', count: 53 },
    { benefit: 'Career Awareness', count: 49 },
    { benefit: 'Motivation', count: 44 },
    { benefit: 'Time Management', count: 40 }
  ];

  const testimonials = {
    academic: [
      '"The program helped me improve my problem-solving skills, and I scored better in exams." - Learner 34',
      '"My marks improved dramatically after attending the program, and I feel much more confident." - Learner 56',
      '"I learned how to study more effectively, and my grades in all subjects went up." - Learner 33',
      '"This program has taught me valuable time management skills that I now use in all my studies." - Learner 21',
      '"I never thought I could improve in math, but this program showed me that I can." - Learner 69',
      '"I gained a lot of confidence in my abilities, and I see the results in my grades." - Learner 13'
    ],
    personal: [
      '"It made learning so much more fun and interactive! I never thought I’d enjoy school this much." - Learner 11',
      '"I feel more engaged in my classes now. The program really motivated me to work harder." - Learner 66',
      '"The activities and group discussions made me feel more connected to my classmates and the content." - Learner 45',
      '"Thanks to the program, I now approach my studies with a positive mindset and enthusiasm." - Learner 30',
      '"It helped me believe in myself and my ability to succeed academically and personally." - Learner 22',
      '"The encouragement I received during the program helped me push through tough times." - Learner 48'
    ],
    career: [
      '"I feel so much more ambitious about my future now. I know I have so many career options ahead." - Learner 1',
      '"The career insights provided by the program opened my eyes to opportunities I didn’t know existed." - Learner 9',
      '"I feel empowered about my career possibilities. I now have a clear vision for my future." - Learner 42',
      '"The program gave me the confidence to pursue a career I didn’t think was within reach." - Learner 16',
      '"I have a much clearer idea of what I want to do after school thanks to this program." - Learner 56',
      '"It made me realize the importance of planning for my career early on, and now I’m more focused." - Learner 77'
    ]
  };

  const improvementSuggestions = [
    'Provide more career guidance and planning resources',
    'Offer more practical sessions and hands-on learning opportunities',
    'Invite guest speakers from various industries to talk to students',
    'Increase mentorship opportunities and one-on-one guidance',
    'Expand online support and resources for remote learning',
    'Include workshops focused on developing soft skills like leadership and teamwork'
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
