import React, { useState, useEffect } from 'react';
import { Line, Radar, Bar } from 'react-chartjs-2';
import { TrendingUp, Users, Star, Target, BookOpen, Lightbulb } from 'lucide-react';
import axios from 'axios';

const FeedbackAnalysis = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    fetchFeedbackData();
  }, []);

  const fetchFeedbackData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/evaluations/grade12-2025-feedback');
      setFeedbackData(response.data.data);
    } catch (err) {
      console.error('Error fetching feedback data:', err);
      setError('Failed to load feedback data');
    } finally {
      setLoading(false);
    }
  };

  const analyzeFeedback = () => {
    if (!feedbackData.length) return {};

    const analysis = {
      totalResponses: feedbackData.length,
      satisfactionBreakdown: {},
      subjectPerformance: {},
      improvementAreas: {},
      positiveFeedback: [],
      suggestions: [],
      careerAspirations: {}
    };

    feedbackData.forEach(item => {
      // Satisfaction analysis
      const satisfaction = item['F. Overall Winter Programme Feedback  16. How would you rate the entire Winter School Programme?'];
      if (satisfaction) {
        analysis.satisfactionBreakdown[satisfaction] = (analysis.satisfactionBreakdown[satisfaction] || 0) + 1;
      }

      // Subject performance
      const mathPerformance = item['Rate your improvement in these areas:  1. Mathematics'];
      const physicsPerformance = item['2. Physical Sciences'];
      
      if (mathPerformance && mathPerformance > 0) {
        analysis.subjectPerformance['Mathematics'] = (analysis.subjectPerformance['Mathematics'] || 0) + 1;
      }
      if (physicsPerformance && physicsPerformance > 0) {
        analysis.subjectPerformance['Physical Sciences'] = (analysis.subjectPerformance['Physical Sciences'] || 0) + 1;
      }

      // Collect positive feedback
      const comments = item['Any final comments or suggestions for the general HFSA sessions?'] || item['17. What was your highlight of the week?'] || '';
      if (comments && comments.length > 10) {
        if (comments.toLowerCase().includes('good') || comments.toLowerCase().includes('great') || 
            comments.toLowerCase().includes('improved') || comments.toLowerCase().includes('helpful') ||
            comments.toLowerCase().includes('excellent') || comments.toLowerCase().includes('amazing')) {
          analysis.positiveFeedback.push(comments);
        }
        if (comments.toLowerCase().includes('suggest') || comments.toLowerCase().includes('could') || 
            comments.toLowerCase().includes('would like') || comments.toLowerCase().includes('improve')) {
          analysis.suggestions.push(comments);
        }
      }

      // Career aspirations
      const career = item['5. Which of the health science careers interested you the most and why?'];
      if (career && career !== 'null' && career.trim() !== '') {
        const careerMatch = career.match(/^([^,]+)/);
        const careerName = careerMatch ? careerMatch[1].trim() : 'Other';
        analysis.careerAspirations[careerName] = (analysis.careerAspirations[careerName] || 0) + 1;
      }
    });

    return analysis;
  };

  const analysis = analyzeFeedback();

  const satisfactionData = {
    labels: Object.keys(analysis.satisfactionBreakdown || {}).map(rating => `${rating}/5`),
    datasets: [{
      label: 'Number of Students',
      data: Object.values(analysis.satisfactionBreakdown || {}),
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 2,
      tension: 0.4
    }]
  };

  const subjectData = {
    labels: Object.keys(analysis.subjectPerformance || {}),
    datasets: [{
      label: 'Students Reporting Improvement',
      data: Object.values(analysis.subjectPerformance || {}),
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 2
    }]
  };

  const careerData = {
    labels: Object.keys(analysis.careerAspirations || {}).slice(0, 8),
    datasets: [{
      label: 'Students',
      data: Object.values(analysis.careerAspirations || {}).slice(0, 8),
      backgroundColor: 'rgba(147, 51, 234, 0.8)',
      borderColor: 'rgba(147, 51, 234, 1)',
      borderWidth: 2
    }]
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600">Analyzing feedback data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-xl text-gray-600">{error}</p>
          <button 
            onClick={fetchFeedbackData}
            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            🔍 Detailed Feedback Analysis
          </h1>
          <p className="text-xl text-gray-600">
            Deep dive into Grade 12 2025 student feedback and performance metrics
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Responses</p>
                <p className="text-3xl font-bold text-gray-800">{analysis.totalResponses}</p>
              </div>
              <Users className="text-blue-600 text-4xl" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Avg Satisfaction</p>
                <p className="text-3xl font-bold text-gray-800">
                  {Object.keys(analysis.satisfactionBreakdown || {}).length > 0 
                    ? (Object.keys(analysis.satisfactionBreakdown).reduce((sum, rating) => 
                        sum + (parseInt(rating) * analysis.satisfactionBreakdown[rating]), 0) / 
                      Object.values(analysis.satisfactionBreakdown).reduce((sum, count) => sum + count, 0)
                    ).toFixed(1)
                    : 'N/A'
                  }
                </p>
              </div>
              <Star className="text-yellow-500 text-4xl" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Subjects Improved</p>
                <p className="text-3xl font-bold text-gray-800">
                  {Object.keys(analysis.subjectPerformance || {}).length}
                </p>
              </div>
              <TrendingUp className="text-green-600 text-4xl" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Career Paths</p>
                <p className="text-3xl font-bold text-gray-800">
                  {Object.keys(analysis.careerAspirations || {}).length}
                </p>
              </div>
              <Target className="text-purple-600 text-4xl" />
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Satisfaction Trend */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📊 Satisfaction Distribution
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

          {/* Subject Performance */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📚 Subject Performance
            </h3>
            <Bar 
              data={subjectData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Career Aspirations */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            🎯 Career Aspirations
          </h3>
          <div className="max-w-4xl mx-auto">
            <Bar 
              data={careerData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Qualitative Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Positive Feedback */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
              <Lightbulb className="mr-2 text-yellow-500" />
              Positive Feedback
            </h3>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {analysis.positiveFeedback.slice(0, 5).map((feedback, index) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="text-gray-700 italic">"{feedback}"</p>
                </div>
              ))}
              {analysis.positiveFeedback.length === 0 && (
                <p className="text-gray-500 text-center">No positive feedback available</p>
              )}
            </div>
          </div>

          {/* Suggestions */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
              <BookOpen className="mr-2 text-blue-500" />
              Student Suggestions
            </h3>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {analysis.suggestions.slice(0, 5).map((suggestion, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 italic">"{suggestion}"</p>
                </div>
              ))}
              {analysis.suggestions.length === 0 && (
                <p className="text-gray-500 text-center">No suggestions available</p>
              )}
            </div>
          </div>
        </div>

        {/* Summary Insights */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            💡 Key Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">Response Rate</h4>
              <p className="text-blue-700">
                {analysis.totalResponses} students provided comprehensive feedback, 
                representing a strong engagement level.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">Subject Impact</h4>
              <p className="text-green-700">
                Students reported improvements across {Object.keys(analysis.subjectPerformance || {}).length} 
                core subjects, indicating broad academic enhancement.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">Career Guidance</h4>
              <p className="text-purple-700">
                {Object.keys(analysis.careerAspirations || {}).length} different career paths identified, 
                showing diverse student aspirations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackAnalysis; 