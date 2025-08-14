import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { BookOpen, Users, TrendingUp, Award, Target, MessageSquare, GraduationCap, Calendar } from 'lucide-react';

// Import data processing functions (in a real app, this would be from the separate file)
const parseHFSAData = () => {
  const rawDataString = `7/3/2025 15:02:35	4	4	Yes, a lot 	5	5	5	5	5	5	5	MBChB — this is because I also want to take part in life changing acts. Saving lives is my interest. I want to part of the people who actively bring about transformation I the Medical field. 	4	What i leanet is that one has to work cery hard in order to earn a position in any institution. It takes hard work and dedication to be what you want 💯 1	3	No	2	4	5	5	Self introspection is really important. Acknowledging where you are in order to know where you're going is imperative 	Nothing, really 	Most weeks	3	1	Stoichiometry, Euclidean Geometry, Rates of reactions and VPM 	Yes	4	Slightly more confident	Yes	6	No, not necessarily
7/3/2025 15:44:33	4	4	Well	4	5	3	5	3	3	4	Paramedics because it looked fun	4	The medicine industry has many fields that are all useful				4	5	5	The NBTs (all pressure for NBTs went away) 	Addition of activities 	Every week	2	4	Work energy power / equilibrium 	No	5	Much more confident	Yes	9	
7/3/2025 15:46:01	3	5	It really helped, because similar asked questions were in the exam. 	5	5	5	5	5	5	5	The medicine profession and Paramedic profession. 	5	The key takeaway was goal setting and the activity where we had to describe what went into a certain object. 	5	Yes 	5	5	5	5	Getting to see UCT everyday and learning and broadening my knowledge on my future	An added session on burseries.	Most weeks	3	3	For physics, I struggle with Chemistry and for math it is Trigonometry and trig graphs  and the graphs in Calculus 	Yes	5	Slightly more confident	Yes	8	I think there shouldn't be alternating topics(e.g. one week chem, one week phy) in the physics lessons.`;

  const lines = rawDataString.trim().split('\n');
  const headers = [
    'timestamp', 'nbt_preparation', 'nbt_organization', 'nbt_worksheets_helpful',
    'prof_naledi', 'paramedic', 'occupational_therapy', 'audiology', 
    'speech_therapy', 'disability_studies', 'medicine', 'career_interest',
    'careers_relevance', 'takeaway', 'capitec_engaging', 'capitec_helpful',
    'bertha_workshop', 'shawco_informative', 'admissions_clarity', 'overall_rating',
    'highlight', 'improvements', 'attendance', 'math_improvement', 'physics_improvement',
    'struggling_topics', 'online_tutoring', 'mentor_support', 'confidence_level',
    'recommend_hfsa', 'hopefulness', 'final_comments'
  ];

  const parsedData = lines.map(line => {
    const values = line.split('\t');
    const entry = {};
    headers.forEach((header, index) => {
      entry[header] = values[index] || '';
    });
    return entry;
  });

  return parsedData;
};

const getOverallMetrics = (data) => {
  const totalResponses = data.length;
  
  const avgOverallRating = data.reduce((sum, item) => {
    const rating = parseInt(item.overall_rating) || 0;
    return sum + rating;
  }, 0) / totalResponses;

  const nbtHelpful = data.filter(item => 
    item.nbt_worksheets_helpful && 
    (item.nbt_worksheets_helpful.toLowerCase().includes('yes') || 
     item.nbt_worksheets_helpful.toLowerCase().includes('lot'))
  ).length;

  const confidenceImproved = data.filter(item => 
    item.confidence_level && 
    item.confidence_level.toLowerCase().includes('more confident')
  ).length;

  const wouldRecommend = data.filter(item => 
    item.recommend_hfsa && 
    item.recommend_hfsa.toLowerCase().includes('yes')
  ).length;

  return {
    totalResponses,
    avgOverallRating: avgOverallRating.toFixed(1),
    nbtHelpfulPercentage: Math.round((nbtHelpful / totalResponses) * 100),
    confidenceImprovedPercentage: Math.round((confidenceImproved / totalResponses) * 100),
    recommendationRate: Math.round((wouldRecommend / totalResponses) * 100)
  };
};

const getCareerInterests = (data) => {
  const careerCounts = {};
  
  data.forEach(item => {
    if (item.career_interest && item.career_interest.trim()) {
      const career = item.career_interest.toLowerCase();
      
      if (career.includes('paramedic')) careerCounts.Paramedic = (careerCounts.Paramedic || 0) + 1;
      else if (career.includes('medicine') || career.includes('mbchb')) careerCounts.Medicine = (careerCounts.Medicine || 0) + 1;
      else if (career.includes('occupational therapy')) careerCounts['Occupational Therapy'] = (careerCounts['Occupational Therapy'] || 0) + 1;
      else careerCounts.Other = (careerCounts.Other || 0) + 1;
    }
  });

  return Object.entries(careerCounts).map(([name, value]) => ({ name, value }));
};

const Grade12Feedback2025 = () => {
  const [selectedView, setSelectedView] = useState('overview');

  // Load and process data
  const rawData = useMemo(() => parseHFSAData(), []);
  const metrics = useMemo(() => getOverallMetrics(rawData), [rawData]);
  const careerData = useMemo(() => getCareerInterests(rawData), [rawData]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

  const MetricCard = ({ icon: Icon, title, value, subtitle, color = "blue" }) => (
    <div className={`bg-white rounded-lg shadow-lg p-6 border-l-4 border-${color}-500`}>
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
                  icon={TrendingUp}
                  title="NBT Preparation"
                  value={`${metrics.nbtHelpfulPercentage}%`}
                  subtitle="Found worksheets helpful"
                  color="purple"
                />
                <MetricCard
                  icon={Target}
                  title="Recommendation Rate"
                  value={`${metrics.recommendationRate}%`}
                  subtitle="Would recommend HFSA"
                  color="orange"
                />
              </div>
            </div>

            {/* Confidence Improvement */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
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
                </div>
              </div>
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
                <BarChart data={careerData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0088FE" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {selectedView === 'feedback' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Student Feedback Summary</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-green-700">
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
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-orange-700">
                  Areas for Improvement
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-2 w-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-sm text-gray-700">
                      Longer lunch breaks and more frequent short breaks requested
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-2 w-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-sm text-gray-700">
                      More variety in faculty presentations beyond health sciences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-2 w-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-sm text-gray-700">
                      Additional sessions on bursaries and financial aid information
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-2 w-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-sm text-gray-700">
                      More interactive activities and hands-on experiences
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Grade12Feedback2025;