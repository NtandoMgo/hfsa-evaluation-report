import React, { useState, useEffect } from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import { BarChart3, Users, TrendingUp, MessageSquare, Star, Calendar } from 'lucide-react';
import axios from 'axios';

const Grade12Feedback2025 = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Overall Experience');

  useEffect(() => {
    fetchFeedbackData();
  }, []);

  const fetchFeedbackData = async () => {
    try {
      setLoading(true);
      console.log('🔄 Fetching feedback data from API...');
      const response = await axios.get('http://localhost:5000/api/evaluations/grade12-2025-feedback');
      console.log('✅ API Response:', response.data);
      setFeedbackData(response.data.data);
    } catch (err) {
      console.error('❌ Error fetching feedback data:', err);
      console.error('Error details:', err.response?.data || err.message);
      setError(`Failed to load feedback data: ${err.response?.data?.error || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Process data for charts
  const processDataForCharts = () => {
    if (!feedbackData.length) return {};

    // Calculate overall satisfaction ratings (using Winter School Programme rating)
    const satisfactionRatings = feedbackData.reduce((acc, item) => {
      const rating = parseInt(item['F. Overall Winter Programme Feedback  16. How would you rate the entire Winter School Programme?'] || 0);
      if (rating > 0) {
        acc[rating] = (acc[rating] || 0) + 1;
      }
      return acc;
    }, {});

    // Calculate subject improvements (using the actual field names)
    const subjectImprovements = feedbackData.reduce((acc, item) => {
      const mathImprovement = item['Rate your improvement in these areas:  1. Mathematics'];
      const physicsImprovement = item['2. Physical Sciences'];
      
      if (mathImprovement && mathImprovement > 0) {
        acc['Mathematics'] = (acc['Mathematics'] || 0) + 1;
      }
      if (physicsImprovement && physicsImprovement > 0) {
        acc['Physical Sciences'] = (acc['Physical Sciences'] || 0) + 1;
      }
      return acc;
    }, {});

    // Calculate future study intentions (using career interests)
    const futureStudy = feedbackData.reduce((acc, item) => {
      const careerInterest = item['5. Which of the health science careers interested you the most and why?'];
      if (careerInterest && careerInterest !== 'null' && careerInterest.trim() !== '') {
        // Extract career name from the response
        const careerMatch = careerInterest.match(/^([^,]+)/);
        const career = careerMatch ? careerMatch[1].trim() : 'Other';
        acc[career] = (acc[career] || 0) + 1;
      }
      return acc;
    }, {});

    return {
      satisfactionRatings,
      subjectImprovements,
      futureStudy
    };
  };

  const chartData = processDataForCharts();

  const satisfactionData = {
    labels: Object.keys(chartData.satisfactionRatings || {}).map(rating => `${rating}/5`),
    datasets: [{
      label: 'Number of Students',
      data: Object.values(chartData.satisfactionRatings || {}),
      backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'],
      borderWidth: 2,
      borderColor: '#fff'
    }]
  };

  const subjectData = {
    labels: Object.keys(chartData.subjectImprovements || {}),
    datasets: [{
      label: 'Students Reporting Improvement',
      data: Object.values(chartData.subjectImprovements || {}),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      borderWidth: 2,
      borderColor: '#fff'
    }]
  };

  const futureStudyData = {
    labels: Object.keys(chartData.futureStudy || {}),
    datasets: [{
      data: Object.values(chartData.futureStudy || {}),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      borderWidth: 2,
      borderColor: '#fff'
    }]
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600">Loading Grade 12 2025 Feedback...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-xl text-gray-600">{error}</p>
          <button 
            onClick={fetchFeedbackData}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            📚 Grade 12 2025 Feedback Report
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive analysis of student feedback from the 2025 academic year
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <Users className="text-blue-600" />
                <span className="font-semibold">{feedbackData.length} Students</span>
              </div>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <Calendar className="text-green-600" />
                <span className="font-semibold">2025 Academic Year</span>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Responses</p>
                <p className="text-3xl font-bold text-gray-800">{feedbackData.length}</p>
              </div>
              <BarChart3 className="text-blue-600 text-4xl" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Avg Satisfaction</p>
                <p className="text-3xl font-bold text-gray-800">
                  {Object.keys(chartData.satisfactionRatings || {}).length > 0 
                    ? (Object.keys(chartData.satisfactionRatings).reduce((sum, rating) => 
                        sum + (parseInt(rating) * chartData.satisfactionRatings[rating]), 0) / 
                      Object.values(chartData.satisfactionRatings).reduce((sum, count) => sum + count, 0)
                    ).toFixed(1)
                    : 'N/A'
                  }
                </p>
              </div>
              <Star className="text-yellow-500 text-4xl" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Subjects Improved</p>
                <p className="text-3xl font-bold text-gray-800">
                  {Object.keys(chartData.subjectImprovements || {}).length}
                </p>
              </div>
              <TrendingUp className="text-green-600 text-4xl" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Future Study Plans</p>
                <p className="text-3xl font-bold text-gray-800">
                  {Object.keys(chartData.futureStudy || {}).length}
                </p>
              </div>
              <MessageSquare className="text-purple-600 text-4xl" />
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Satisfaction Ratings */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📊 Overall Satisfaction Ratings
            </h3>
            <Bar 
              data={satisfactionData} 
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      stepSize: 1
                    }
                  }
                }
              }}
            />
          </div>

          {/* Subject Improvements */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📈 Subject Improvements
            </h3>
            <Doughnut 
              data={subjectData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom'
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Future Study Intentions */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            🎓 Future Study Intentions
          </h3>
          <div className="max-w-2xl mx-auto">
            <Pie 
              data={futureStudyData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom'
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Sample Feedback */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            💬 Sample Student Feedback
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feedbackData.slice(0, 6).map((feedback, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800">Student {index + 1}</p>
                    <p className="text-sm text-gray-500">
                      Satisfaction: {feedback['F. Overall Winter Programme Feedback  16. How would you rate the entire Winter School Programme?'] || 'N/A'}/5
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "{feedback['Any final comments or suggestions for the general HFSA sessions?'] || feedback['17. What was your highlight of the week?'] || 'No additional comments provided'}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grade12Feedback2025; 