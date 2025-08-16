import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import ImpactDashboard from './pages/ImpactDashboard'
import Grade12Feedback2025 from './pages/Grade12Feedback2025'
import FeedbackAnalysis from './pages/FeedbackAnalysis'

function App() {
  return (
    <Router>

         https://forms.gle/Gi1gUrA4bNxSxTDo6

      {/* <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<ImpactDashboard />} />
          <Route path="/grade12-2025-feedback" element={<Grade12Feedback2025 />} />
          <Route path="/feedback-analysis" element={<FeedbackAnalysis />} />
        </Routes>
      </div> */}
    </Router>
  )
}

export default App
