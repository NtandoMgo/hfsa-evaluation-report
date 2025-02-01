import React, { useState } from 'react';
import Grade11Dashboard from './pages/ProgramImpactDashboard';
import ImpactDashboard from './pages/ImpactDashboard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const dataDate = "Data based on 2024 end-of-year learner evaluation responses";

  const renderPage = () => {
    switch(currentPage) {
      case 'grade11':
        return <Grade11Dashboard dateInfo={dataDate} />;
      case 'grade12':
        return <ImpactDashboard dateInfo={dataDate} />;
      default:
        return (
          <div className="p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6 font-serif">
              HFSA Program Evaluation
            </h2>
            <p className="text-2xl text-gray-700 mb-6 font-medium">
              {dataDate}
            </p>
            <p className="text-2xl text-gray-700 font-medium">
              Select a dashboard to view program details.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <h1 className="text-3xl md:text-4xl font-bold font-serif tracking-wide">
              HFSA Program Evaluation
            </h1>
            <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
              <NavButton 
                onClick={() => setCurrentPage('home')}
                isActive={currentPage === 'home'}
                label="Home"
              />
              <NavButton 
                onClick={() => setCurrentPage('grade11')}
                isActive={currentPage === 'grade11'}
                label="Grade 11 Dashboard"
              />
              <NavButton 
                onClick={() => setCurrentPage('grade12')}
                isActive={currentPage === 'grade12'}
                label="Grade 12 Dashboard"
              />
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
    </div>
  );
};

const NavButton = ({ onClick, isActive, label }) => (
  <button 
    onClick={onClick}
    className={`
      px-6 py-3 rounded-lg font-medium transition-all duration-200 
      ${isActive 
        ? 'bg-white text-blue-800 shadow-md transform scale-105' 
        : 'text-white hover:bg-blue-500 hover:bg-opacity-50'
      }
    `}
  >
    {label}
  </button>
);

export default App;
