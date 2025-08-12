import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, MessageSquare, Home, TrendingUp } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    {
      path: '/',
      name: 'Impact Dashboard',
      icon: <Home className="w-5 h-5" />
    },
    {
      path: '/grade12-2025-feedback',
      name: 'Grade 12 2025 Feedback',
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      path: '/feedback-analysis',
      name: 'Feedback Analysis',
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">HFSA Reports</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                  location.pathname === item.path
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 