import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { BookOpen, Users, TrendingUp, Award, Target, MessageSquare, GraduationCap, Calendar, Heart, Brain, Star, AlertCircle, CheckCircle } from 'lucide-react';

// Import data processing functions from the data file
import { 
  Grade12_2025_Eval,
  getOverallMetrics,
  getCareerInterests,
  getSessionRatings,
  getStruggleAreas,
  getAttendanceData,
  getConfidenceDistribution,
  getHopefulnessData,
  getImprovementSuggestions
} from '../pages/hfsasdu_data.js';

const Grade12Feedback2025 = () => {
  const [selectedView, setSelectedView] = useState('overview');

  // Load and process data
  const rawData = useMemo(() => Grade12_2025_Eval(), []);
  const metrics = useMemo(() => getOverallMetrics(rawData), [rawData]);
  const careerData = useMemo(() => getCareerInterests(rawData), [rawData]);
  const sessionRatings = useMemo(() => getSessionRatings(rawData), [rawData]);
  const struggleAreas = useMemo(() => getStruggleAreas(rawData), [rawData]);
  const attendanceData = useMemo(() => getAttendanceData(rawData), [rawData]);
  const confidenceData = useMemo(() => getConfidenceDistribution(rawData), [rawData]);
  const hopefulnessData = useMemo(() => getHopefulnessData(rawData), [rawData]);
  const improvementSuggestions = useMemo(() => getImprovementSuggestions(rawData), [rawData]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#FF7C7C'];

  const MetricCard = ({ icon: Icon, title, value, subtitle, color = "blue" }) => (
    <div className={`bg-white rounded-lg shadow-lg p-6 border-l-4 border-${color}-500 hover:shadow-xl transition-shadow duration-300`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <Icon className={`h-8 w-8 text-${color}-600`} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">HFSA Winter Programme Evaluation Dashboard</h1>
              <p className="text-blue-100 mt-2 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                2025 Grade 12 Cohort - July 2025 Programme
              </p>
            </div>
            <div className="flex items-center space-x-2 text-blue-100">
              <Calendar className="h-5 w-5" />
              <span>UCT Winter School</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: Target },
              { id: 'sessions', name: 'Session Ratings', icon: BookOpen },
              { id: 'careers', name: 'Career Interests', icon: TrendingUp },
              { id: 'academic', name: 'Academic Support', icon: Brain },
              { id: 'feedback', name: 'Student Feedback', icon: MessageSquare }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedView(tab.id)}
                className={`flex items-center px-3 py-4 text-sm font-medium border-b-2 transition-colors ${
                  selectedView === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedView === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Programme Impact Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                  icon={Users}
                  title="Total Responses"
                  value={metrics.totalResponses}
                  subtitle="Grade 12 Students"
                  color="blue"
                />
                <MetricCard
                  icon={Award}
                  title="Overall Rating"
                  value={`${metrics.avgOverallRating}/5`}
                  subtitle="Programme satisfaction"
                  color="green"
                />
                <MetricCard
                  icon={CheckCircle}
                  title="NBT Preparation"
                  value={`${metrics.nbtHelpfulPercentage}%`}
                  subtitle="Found worksheets helpful"
                  color="purple"
                />
                <MetricCard
                  icon={Heart}
                  title="Recommendation Rate"
                  value={`${metrics.recommendationRate}%`}
                  subtitle="Would recommend HFSA"
                  color="orange"
                />
              </div>
            </div>

            {/* Confidence and Hopefulness */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-green-600" />
                  Academic Confidence Improvement
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {metrics.confidenceImprovedPercentage}%
                    </div>
                    <p className="text-gray-600">
                      of Grade 12 students report improved academic confidence after the Winter Programme
                    </p>
                  </div>
                  <div className="h-24 w-24 relative">
                    <svg className="transform -rotate-90 w-full h-full">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-200"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2.51 * metrics.confidenceImprovedPercentage} 251`}
                        className="text-green-500"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-600" />
                  Student Hopefulness Level
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-4xl font-bold text-yellow-600 mb-2">
                      {hopefulnessData.average}/10
                    </div>
                    <p className="text-gray-600">
                      Average hopefulness score about future academic success
                    </p>
                  </div>
                  <div className="text-right">
                    <ResponsiveContainer width={150} height={80}>
                      <PieChart>
                        <Pie
                          data={hopefulnessData.distribution}
                          cx="50%"
                          cy="50%"
                          innerRadius={20}
                          outerRadius={35}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {hopefulnessData.distribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Interest Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Career Interest Distribution
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={careerData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {careerData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Programme Highlights
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-900">High Engagement</h4>
                    <p className="text-sm text-gray-600">
                      Strong interest in health science careers, particularly paramedics and medicine
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-900">NBT Success</h4>
                    <p className="text-sm text-gray-600">
                      Students found the NBT preparation workshops directly helpful for their actual exams
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-purple-900">University Readiness</h4>
                    <p className="text-sm text-gray-600">
                      Increased understanding of university requirements and application processes
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-yellow-900">Confidence Building</h4>
                    <p className="text-sm text-gray-600">
                      {metrics.confidenceImprovedPercentage}% report improved academic confidence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedView === 'sessions' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Session Performance Analysis</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Average Session Ratings (1-5 Scale)
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={sessionRatings} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="session" angle={-45} textAnchor="end" height={80} />
                  <YAxis domain={[0, 5]} />
                  <Tooltip formatter={(value) => [value, 'Average Rating']} />
                  <Bar dataKey="rating" fill="#0088FE" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Attendance Patterns
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={attendanceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {attendanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {selectedView === 'careers' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Career Interest Analysis</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Most Popular Career Choices Among Grade 12s
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={careerData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0088FE" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">Top Choice: Paramedics</h4>
                <p className="text-blue-700 text-sm">
                  Most popular due to direct exposure through presentations and the appeal of helping others in emergency situations.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">Medicine Interest</h4>
                <p className="text-green-700 text-sm">
                  Traditional medical careers remain attractive, with students appreciating learning about admission requirements.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-900 mb-2">Diverse Options</h4>
                <p className="text-purple-700 text-sm">
                  Students discovered various health science careers beyond traditional expectations through programme exposure.
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedView === 'academic' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Academic Support Impact</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Top Academic Struggle Areas
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={struggleAreas} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#FF8042" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Confidence Level Changes
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={confidenceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {confidenceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Academic Support Success Indicators
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {metrics.nbtHelpfulPercentage}%
                  </div>
                  <p className="text-sm text-gray-600">Found NBT preparation helpful</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {struggleAreas.length}
                  </div>
                  <p className="text-sm text-gray-600">Key areas identified for support</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {metrics.confidenceImprovedPercentage}%
                  </div>
                  <p className="text-sm text-gray-600">Improved academic confidence</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedView === 'feedback' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Student Feedback Summary</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-green-700 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Positive Feedback Themes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-sm text-gray-700">
                      NBT preparation materials directly reflected actual exam content
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-sm text-gray-700">
                      Exposure to diverse health science careers beyond traditional medicine
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-sm text-gray-700">
                      Clear explanations of university admission requirements and processes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-sm text-gray-700">
                      Supportive mentors and engaging group activities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-sm text-gray-700">
                      Inspirational presentations that motivated career aspirations
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-orange-700 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Areas for Improvement
                </h3>
                <div className="space-y-4">
                  {improvementSuggestions.slice(0, 6).map((suggestion, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm text-gray-700">{suggestion.name}</span>
                      <span className="text-sm font-semibold text-orange-600">{suggestion.value} mentions</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Key Student Testimonials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm italic text-blue-900">
                    "The NBT preparation was incredibly helpful - questions were almost exactly like what we saw in the worksheets."
                  </p>
                  <p className="text-xs text-blue-600 mt-2">- Grade 12 Student</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm italic text-green-900">
                    "This is an amazing program that helps you be ahead of other students and exposes you to different careers in depth."
                  </p>
                  <p className="text-xs text-green-600 mt-2">- Grade 12 Student</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="text-sm italic text-purple-900">
                    "HFSA workers are incredibly amazing. Thanks for everything - you're inspiring and motivational."
                  </p>
                  <p className="text-xs text-purple-600 mt-2">- Grade 12 Student</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-sm italic text-yellow-900">
                    "I finally got hope to improve on my June marks. The programme gave me confidence."
                  </p>
                  <p className="text-xs text-yellow-600 mt-2">- Grade 12 Student</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Grade12Feedback2025;