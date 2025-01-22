import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

// Sample data for up to 30 learners
const learners = [
  { id: 2, maths: 'Improved', physics: 'Tricky but improving', futureStudies: 'Yes', universities: ['WITS', 'UCT', 'NWU'], status: 'Provisionally accepted', funding: 'NSFAS' },
  { id: 3, maths: 'Results improved', physics: 'Results improved', futureStudies: 'Yes', universities: ['CPUT'], status: 'Accepted', funding: 'NSFAS' },
  { id: 4, maths: 'Consistent marks', physics: 'Increased marks', futureStudies: 'Yes', universities: ['Stellenbosch', 'UWC'], status: 'Waiting list', funding: 'NSFAS' },
  { id: 5, maths: 'Understood better', physics: 'Improved by practice', futureStudies: 'Yes', universities: [], status: 'Pending', funding: 'HCI Foundation, NSFAS' },
  { id: 6, maths: 'Survived', physics: 'Consistent per term', futureStudies: 'No', universities: ['UCT', 'SU'], status: 'Provisionally accepted', funding: 'NSFAS, ISFAP' },
  { id: 7, maths: 'New respect for maths', physics: 'More comprehensive', futureStudies: 'Yes', universities: ['UWC', 'WITS'], status: 'Provisionally selected', funding: 'NSFAS' },
  { id: 8, maths: 'Progress with content', physics: 'Learned a lot more', futureStudies: 'Yes', universities: ['UJ', 'UWC'], status: 'Provisionally selected', funding: 'NSFAS' },
  { id: 9, maths: 'Improved problem solving', physics: 'Better understanding', futureStudies: 'Yes', universities: ['UCT', 'UP'], status: 'Accepted', funding: 'NSFAS' },
  { id: 10, maths: 'Steady progress', physics: 'Some difficulties', futureStudies: 'Yes', universities: ['SU', 'UKZN'], status: 'Waiting list', funding: 'NSFAS' },
  ...Array.from({ length: 20 }, (_, i) => ({
    id: i + 11,
    maths: ['Improved', 'Consistent marks', 'Results improved', 'Better understanding'][Math.floor(Math.random() * 4)],
    physics: ['Tricky but improving', 'Learned a lot more', 'More comprehensive', 'Some difficulties'][Math.floor(Math.random() * 4)],
    futureStudies: ['Yes', 'No'][Math.floor(Math.random() * 2)],
    universities: ['UCT', 'WITS', 'SU', 'UWC', 'CPUT', 'UP', 'UKZN'].filter(() => Math.random() > 0.5),
    status: ['Accepted', 'Provisionally accepted', 'Waiting list', 'Pending'][Math.floor(Math.random() * 4)],
    funding: ['NSFAS', 'HCI Foundation', 'ISFAP', 'Other'][Math.floor(Math.random() * 4)]
  }))
];

// Aggregate statistics
const totalLearners = learners.length;
const mathsImproved = learners.filter(l => l.maths.includes('Improved')).length;
const physicsImproved = learners.filter(l => l.physics.includes('Improved')).length;
const futureStudies = learners.filter(l => l.futureStudies === 'Yes').length;
const accepted = learners.filter(l => l.status.includes('Accepted')).length;
const provisionallyAccepted = learners.filter(l => l.status.includes('Provisionally accepted')).length;
const pending = learners.filter(l => l.status.includes('Pending')).length;
const waitingList = learners.filter(l => l.status.includes('Waiting list')).length;

const data = {
  labels: ['Maths Improved', 'Physics Improved', 'Future Studies Considered', 'Accepted', 'Provisionally Accepted', 'Pending', 'Waiting List'],
  datasets: [
    {
      label: 'Number of Learners',
      data: [mathsImproved, physicsImproved, futureStudies, accepted, provisionallyAccepted, pending, waitingList],
      backgroundColor: ['#4CAF50', '#2196F3', '#FF9800', '#673AB7', '#E91E63', '#9C27B0', '#FFC107'],
    },
  ],
};

const fundingData = {
  labels: ['NSFAS', 'HCI Foundation', 'ISFAP', 'Other'],
  datasets: [
    {
      data: [
        learners.filter(l => l.funding.includes('NSFAS')).length,
        learners.filter(l => l.funding.includes('HCI Foundation')).length,
        learners.filter(l => l.funding.includes('ISFAP')).length,
        totalLearners - (learners.filter(l => ['NSFAS', 'HCI Foundation', 'ISFAP'].some(f => l.funding.includes(f))).length)
      ],
      backgroundColor: ['#FFEB3B', '#00BCD4', '#9E9E9E', '#FF5722'],
    },
  ],
};

const ImpactDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">HFSA Impact Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Academic Improvement</h2>
          <Bar data={data} />
        </div>
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Funding Sources</h2>
          <Pie data={fundingData} />
        </div>
      </div>
    </div>
  );
};

export default ImpactDashboard;