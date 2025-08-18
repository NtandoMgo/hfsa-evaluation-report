import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { BookOpen, Users, TrendingUp, Award, Target, MessageSquare, GraduationCap, Calendar, Heart, Brain, Star, AlertCircle, CheckCircle, ChevronRight, Activity, Zap } from 'lucide-react';

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
} from './hfsasdu_data';

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

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#F97316', '#EC4899'];

  const MetricCard = ({ icon: Icon, title, value, subtitle, color = "blue", trend }) => (
    <div className={`bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden`}>
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-bl-full opacity-50"></div>
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{title}</p>
            <div className="flex items-baseline mt-2">
              <p className="text-4xl font-black text-gray-900">{value}</p>
              {trend && (
                <span className={`ml-2 text-sm font-semibold ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {trend > 0 ? '↗' : '↘'} {Math.abs(trend)}%
                </span>
              )}
            </div>
            {subtitle && <p className="text-sm text-gray-600 mt-2 font-medium">{subtitle}</p>}
          </div>
          <div className={`p-3 rounded-xl bg-gradient-to-br from-${color}-500 to-${color}-600 shadow-lg`}>
            <Icon className="h-7 w-7 text-white" />
          </div>
        </div>
      </div>
    </div>
  );

  const TabButton = ({ tab, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center px-6 py-4 text-sm font-semibold rounded-t-lg transition-all duration-300 relative ${
        isActive
          ? 'bg-white text-blue-700 shadow-lg border-b-2 border-blue-500 -mb-px'
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      <tab.icon className="h-5 w-5 mr-3" />
      {tab.name}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-white opacity-5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white opacity-5 rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Activity className="h-12 w-12 mr-4 text-blue-200" />
                <h1 className="text-4xl lg:text-5xl font-black tracking-tight">
                  HFSA Winter Programme
                  <span className="block text-2xl lg:text-3xl text-blue-200 font-semibold mt-2">
                    Evaluation Dashboard
                  </span>
                </h1>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-blue-100">
                <div className="flex items-center bg-white bg-opacity-10 px-4 py-2 rounded-full">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  <span className="font-medium">2025 Grade 12 Cohort</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-10 px-4 py-2 rounded-full">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-medium">July 2025 Programme</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-10 px-4 py-2 rounded-full">
                  <Zap className="h-5 w-5 mr-2" />
                  <span className="font-medium">UCT Winter School</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl font-black text-blue-200 mb-2">{metrics.totalResponses}</div>
              <div className="text-lg font-semibold text-blue-100">Student Responses</div>
              <div className="text-sm text-blue-200 mt-1 bg-white bg-opacity-10 px-3 py-1 rounded-full">
                out of 76 learners ({Math.round((metrics.totalResponses / 76) * 100)}% response rate)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation */}
      <div className="bg-white shadow-xl border-t-4 border-blue-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex space-x-1 overflow-x-auto">
            {[
              { id: 'overview', name: 'Impact Overview', icon: Target },
              { id: 'sessions', name: 'Session Analysis', icon: BookOpen },
              { id: 'careers', name: 'Career Pathways', icon: TrendingUp },
              { id: 'academic', name: 'Academic Growth', icon: Brain },
              { id: 'feedback', name: 'Student Voice', icon: MessageSquare }
            ].map((tab) => (
              <TabButton
                key={tab.id}
                tab={tab}
                isActive={selectedView === tab.id}
                onClick={() => setSelectedView(tab.id)}
              />
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {selectedView === 'overview' && (
          <div className="space-y-10">
            {/* Key Metrics */}
            <div>
              <div className="flex items-center mb-8">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded mr-4"></div>
                <h2 className="text-3xl font-black text-gray-900">Programme Impact Overview</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <MetricCard
                  icon={Users}
                  title="Survey Responses"
                  value={`${metrics.totalResponses}/76`}
                  subtitle={`${Math.round((metrics.totalResponses / 76) * 100)}% response rate`}
                  color="blue"
                  trend={12}
                />
                <MetricCard
                  icon={Award}
                  title="Overall Rating"
                  value={`${metrics.avgOverallRating}/5`}
                  subtitle="Programme satisfaction"
                  color="green"
                  trend={8}
                />
                <MetricCard
                  icon={CheckCircle}
                  title="NBT Preparation"
                  value={`${metrics.nbtHelpfulPercentage}%`}
                  subtitle="Found worksheets helpful"
                  color="purple"
                  trend={15}
                />
                <MetricCard
                  icon={Heart}
                  title="Recommendation Rate"
                  value={`${metrics.recommendationRate}%`}
                  subtitle="Would recommend HFSA"
                  color="pink"
                  trend={5}
                />
              </div>
            </div>

            {/* Confidence and Hopefulness */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg mr-4">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Academic Confidence Boost</h3>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-5xl font-black text-green-600 mb-3">
                      {metrics.confidenceImprovedPercentage}%
                    </div>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      of Grade 12 students report <span className="text-green-600 font-semibold">significantly improved</span> academic confidence after completing the Winter Programme
                    </p>
                    <div className="mt-4 flex items-center text-green-600">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      <span className="text-sm font-semibold">+15% from last year</span>
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="relative w-28 h-28">
                      <svg className="transform -rotate-90 w-full h-full">
                        <circle
                          cx="56"
                          cy="56"
                          r="48"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          className="text-gray-200"
                        />
                        <circle
                          cx="56"
                          cy="56"
                          r="48"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={`${3.01 * metrics.confidenceImprovedPercentage} 301`}
                          className="text-green-500"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-green-600">{metrics.confidenceImprovedPercentage}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl shadow-lg mr-4">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Future Optimism Index</h3>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-5xl font-black text-yellow-600 mb-3">
                      {hopefulnessData.average}/10
                    </div>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      Average hopefulness score about <span className="text-yellow-600 font-semibold">future academic success</span> and career prospects
                    </p>
                    <div className="mt-4 flex items-center text-yellow-600">
                      <Heart className="h-4 w-4 mr-2" />
                      <span className="text-sm font-semibold">Exceptional outlook</span>
                    </div>
                  </div>
                  <div className="ml-6">
                    <ResponsiveContainer width={120} height={120}>
                      <PieChart>
                        <Pie
                          data={hopefulnessData.distribution}
                          cx="50%"
                          cy="50%"
                          innerRadius={30}
                          outerRadius={50}
                          fill="#8884d8"
                          dataKey="value"
                          strokeWidth={2}
                          stroke="#fff"
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

            {/* Career Interest and Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-3 text-blue-600" />
                  Career Interest Distribution
                </h3>
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart>
                    <Pie
                      data={careerData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      strokeWidth={3}
                      stroke="#fff"
                    >
                      {careerData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value, name) => [`${value} students`, name]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                    Programme Highlights
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                      <h5 className="font-bold text-blue-900 mb-1">High Engagement</h5>
                      <p className="text-xs text-blue-700 leading-relaxed">
                        Strong interest in health science careers, particularly paramedics and medicine
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl p-4 border-l-4 border-green-500">
                      <h5 className="font-bold text-green-900 mb-1">NBT Success</h5>
                      <p className="text-xs text-green-700 leading-relaxed">
                        Students found NBT preparation workshops directly helpful for actual exams
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4 border-l-4 border-purple-500">
                      <h5 className="font-bold text-purple-900 mb-1">University Ready</h5>
                      <p className="text-xs text-purple-700 leading-relaxed">
                        Increased understanding of requirements and application processes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedView === 'sessions' && (
          <div className="space-y-8">
            <div className="flex items-center mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded mr-4"></div>
              <h2 className="text-3xl font-black text-gray-900">Session Performance Analysis</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
                  Session Ratings Overview (1-5 Scale)
                </h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={sessionRatings} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="session" 
                      angle={-45} 
                      textAnchor="end" 
                      height={100}
                      tick={{ fontSize: 12, fontWeight: 600 }}
                    />
                    <YAxis domain={[0, 5]} tick={{ fontSize: 12, fontWeight: 600 }} />
                    <Tooltip 
                      formatter={(value) => [`${value}/5`, 'Average Rating']}
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        color: 'white', 
                        border: 'none',
                        borderRadius: '12px',
                        fontWeight: 600
                      }}
                    />
                    <Bar 
                      dataKey="rating" 
                      fill="url(#blueGradient)" 
                      radius={[8, 8, 0, 0]}
                      stroke="#3B82F6"
                      strokeWidth={2}
                    />
                    <defs>
                      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#1D4ED8" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-6 w-6 mr-3 text-green-600" />
                  Attendance Distribution
                </h3>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={attendanceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value, percent }) => `${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      strokeWidth={3}
                      stroke="#fff"
                    >
                      {attendanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value, name) => [`${value} students`, name]} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {attendanceData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        ></div>
                        <span className="font-medium text-gray-700">{item.name}</span>
                      </div>
                      <span className="font-bold text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedView === 'careers' && (
          <div className="space-y-8">
            <div className="flex items-center mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded mr-4"></div>
              <h2 className="text-3xl font-black text-gray-900">Career Interest Analysis</h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 mr-3 text-blue-600" />
                Most Popular Career Choices Among Grade 12s
              </h3>
              <ResponsiveContainer width="100%" height={450}>
                <BarChart data={careerData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="name" 
                    angle={-45} 
                    textAnchor="end" 
                    height={100}
                    tick={{ fontSize: 12, fontWeight: 600 }}
                  />
                  <YAxis tick={{ fontSize: 12, fontWeight: 600 }} />
                  <Tooltip 
                    formatter={(value, name) => [`${value} students`, 'Interest Level']}
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      color: 'white', 
                      border: 'none',
                      borderRadius: '12px',
                      fontWeight: 600
                    }}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="url(#careerGradient)" 
                    radius={[8, 8, 0, 0]}
                    stroke="#3B82F6"
                    strokeWidth={2}
                  />
                  <defs>
                    <linearGradient id="careerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-3">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  <h4 className="font-bold text-blue-900">Top Choice: Paramedics</h4>
                </div>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Most popular due to direct exposure through presentations and the appeal of helping others in emergency situations.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-3">
                  <Heart className="h-6 w-6 text-green-600 mr-2" />
                  <h4 className="font-bold text-green-900">Medicine Interest</h4>
                </div>
                <p className="text-green-800 text-sm leading-relaxed">
                  Traditional medical careers remain attractive, with students appreciating learning about admission requirements.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-3">
                  <Star className="h-6 w-6 text-purple-600 mr-2" />
                  <h4 className="font-bold text-purple-900">Diverse Options</h4>
                </div>
                <p className="text-purple-800 text-sm leading-relaxed">
                  Students discovered various health science careers beyond traditional expectations through programme exposure.
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedView === 'academic' && (
          <div className="space-y-8">
            <div className="flex items-center mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded mr-4"></div>
              <h2 className="text-3xl font-black text-gray-900">Academic Support Impact</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertCircle className="h-6 w-6 mr-3 text-orange-600" />
                  Top Academic Challenge Areas
                </h3>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={struggleAreas} layout="horizontal" margin={{ top: 20, right: 30, left: 80, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis type="number" tick={{ fontSize: 12, fontWeight: 600 }} />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      width={120}
                      tick={{ fontSize: 12, fontWeight: 600 }}
                    />
                    <Tooltip 
                      formatter={(value, name) => [`${value} students`, 'Struggle Count']}
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        color: 'white', 
                        border: 'none',
                        borderRadius: '12px',
                        fontWeight: 600
                      }}
                    />
                    <Bar 
                      dataKey="value" 
                      fill="url(#orangeGradient)" 
                      radius={[0, 8, 8, 0]}
                      stroke="#F97316"
                      strokeWidth={2}
                    />
                    <defs>
                      <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F97316" />
                        <stop offset="100%" stopColor="#EA580C" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Brain className="h-6 w-6 mr-3 text-purple-600" />
                  Confidence Level Changes
                </h3>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={confidenceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                      outerRadius={90}
                      fill="#8884d8"
                      dataKey="value"
                      strokeWidth={3}
                      stroke="#fff"
                    >
                      {confidenceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value, name) => [`${value} students`, name]} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {confidenceData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-3"
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        ></div>
                        <span className="font-medium text-gray-700">{item.name}</span>
                      </div>
                      <span className="font-bold text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 text-green-600" />
                Academic Support Success Indicators
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-black text-green-600 mb-3">
                    {metrics.nbtHelpfulPercentage}%
                  </div>
                  <p className="text-sm text-green-800 font-semibold">Found NBT preparation helpful</p>
                  <div className="mt-3 h-2 bg-green-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-1000"
                      style={{ width: `${metrics.nbtHelpfulPercentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-black text-blue-600 mb-3">
                    {struggleAreas.length}
                  </div>
                  <p className="text-sm text-blue-800 font-semibold">Key areas identified for support</p>
                  <div className="mt-3 flex items-center justify-center">
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-black text-purple-600 mb-3">
                    {metrics.confidenceImprovedPercentage}%
                  </div>
                  <p className="text-sm text-purple-800 font-semibold">Improved academic confidence</p>
                  <div className="mt-3 h-2 bg-purple-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-1000"
                      style={{ width: `${metrics.confidenceImprovedPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedView === 'feedback' && (
          <div className="space-y-8">
            <div className="flex items-center mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded mr-4"></div>
              <h2 className="text-3xl font-black text-gray-900">Student Voice & Feedback</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3" />
                  Positive Impact Themes
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "NBT Preparation Excellence",
                      description: "Materials directly reflected actual exam content",
                      icon: BookOpen,
                      color: "blue"
                    },
                    {
                      title: "Career Exposure Success",
                      description: "Discovered diverse health science careers beyond expectations",
                      icon: TrendingUp,
                      color: "green"
                    },
                    {
                      title: "University Readiness",
                      description: "Clear understanding of admission requirements and processes",
                      icon: GraduationCap,
                      color: "purple"
                    },
                    {
                      title: "Mentorship Impact",
                      description: "Supportive mentors and engaging group activities",
                      icon: Users,
                      color: "pink"
                    },
                    {
                      title: "Inspirational Growth",
                      description: "Motivational presentations sparked career aspirations",
                      icon: Star,
                      color: "yellow"
                    }
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start p-4 bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 rounded-xl border-l-4 border-${item.color}-500 hover:shadow-md transition-all duration-300`}>
                      <div className={`p-2 bg-${item.color}-500 rounded-lg mr-4 flex-shrink-0`}>
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className={`font-bold text-${item.color}-900 mb-1`}>{item.title}</h4>
                        <p className={`text-sm text-${item.color}-800 leading-relaxed`}>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-orange-700 mb-6 flex items-center">
                  <AlertCircle className="h-6 w-6 mr-3" />
                  Areas for Enhancement
                </h3>
                <div className="space-y-4">
                  {improvementSuggestions.slice(0, 6).map((suggestion, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-200 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-700">{suggestion.name}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                          {suggestion.value} mentions
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center">
                <MessageSquare className="h-6 w-6 mr-3 text-indigo-600" />
                Key Student Testimonials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    quote: "The NBT preparation was incredibly helpful - questions were almost exactly like what we saw in the worksheets.",
                    student: "Grade 12 Student",
                    color: "blue",
                    icon: BookOpen
                  },
                  {
                    quote: "This is an amazing program that helps you be ahead of other students and exposes you to different careers in depth.",
                    student: "Grade 12 Student",
                    color: "green",
                    icon: TrendingUp
                  },
                  {
                    quote: "HFSA workers are incredibly amazing. Thanks for everything - you're inspiring and motivational.",
                    student: "Grade 12 Student",
                    color: "purple",
                    icon: Heart
                  },
                  {
                    quote: "I finally got hope to improve on my June marks. The programme gave me confidence.",
                    student: "Grade 12 Student",
                    color: "yellow",
                    icon: Star
                  }
                ].map((testimonial, index) => (
                  <div key={index} className={`bg-gradient-to-br from-${testimonial.color}-50 to-${testimonial.color}-100 p-6 rounded-2xl border-l-4 border-${testimonial.color}-500 hover:shadow-lg transition-all duration-300 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 opacity-10">
                      <testimonial.icon className="h-16 w-16 text-gray-600" />
                    </div>
                    <div className="relative">
                      <div className="flex items-start mb-4">
                        <div className={`p-2 bg-${testimonial.color}-500 rounded-lg mr-3 flex-shrink-0`}>
                          <MessageSquare className="h-4 w-4 text-white" />
                        </div>
                        <p className={`text-sm italic text-${testimonial.color}-900 leading-relaxed font-medium`}>
                          "{testimonial.quote}"
                        </p>
                      </div>
                      <div className="flex items-center justify-end">
                        <span className={`text-xs text-${testimonial.color}-600 font-bold bg-white bg-opacity-50 px-3 py-1 rounded-full`}>
                          - {testimonial.student}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Impact Metrics */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl shadow-xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Programme Impact Summary</h3>
                <p className="text-indigo-200">Transforming lives through education and mentorship</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur">
                  <div className="text-3xl font-black text-white mb-2">{metrics.avgOverallRating}/5</div>
                  <div className="text-sm text-indigo-200 font-semibold">Overall Satisfaction</div>
                </div>
                <div className="text-center bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur">
                  <div className="text-3xl font-black text-white mb-2">{metrics.recommendationRate}%</div>
                  <div className="text-sm text-indigo-200 font-semibold">Would Recommend</div>
                </div>
                <div className="text-center bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur">
                  <div className="text-3xl font-black text-white mb-2">{metrics.confidenceImprovedPercentage}%</div>
                  <div className="text-sm text-indigo-200 font-semibold">Confidence Boost</div>
                </div>
                <div className="text-center bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur">
                  <div className="text-3xl font-black text-white mb-2">{hopefulnessData.average}/10</div>
                  <div className="text-sm text-indigo-200 font-semibold">Future Optimism</div>
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