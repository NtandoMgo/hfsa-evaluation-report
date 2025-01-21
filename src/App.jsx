import { useState } from 'react'

import './App.css'
import ImpactDashboard from './pages/ImpactDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImpactDashboard/>
    </>
  )
}

export default App
