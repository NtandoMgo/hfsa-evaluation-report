import React, { useState } from 'react';
import Grade11Dashboard from './pages/ProgramImpactDashboard';
//import Grade12Dashboard from './pages/Grade12Dashboard';
import ImpactDashboard from './pages/ImpactDashboard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'grade11':
        return <Grade11Dashboard />;
      case 'grade12':
        return <ImpactDashboard />;
      default:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">HFSA Program Evaluation</h2>
            <p>Select a dashboard to view program details.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">HFSA Program Evaluation</h1>
          <div className="flex space-x-4">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`px-3 py-2 rounded ${currentPage === 'home' ? 'bg-blue-800' : 'hover:bg-blue-700'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('grade11')}
              className={`px-3 py-2 rounded ${currentPage === 'grade11' ? 'bg-blue-800' : 'hover:bg-blue-700'}`}
            >
              Grade 11 Dashboard
            </button>
            <button 
              onClick={() => setCurrentPage('grade12')}
              className={`px-3 py-2 rounded ${currentPage === 'grade12' ? 'bg-blue-800' : 'hover:bg-blue-700'}`}
            >
              Grade 12 Dashboard
            </button>
          </div>
        </div>
      </nav>

      {renderPage()}
    </div>
  );
};

export default App;