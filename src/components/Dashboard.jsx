import React from 'react';
import { Link } from 'react-router-dom';
import { FaGamepad, FaTrophy, FaWallet, FaChartLine } from 'react-icons/fa';
import Card from './ui/Card';
import Button from './ui/Button';

const Dashboard = () => {
  const stats = [
    { icon: <FaGamepad />, title: 'Matches Played', value: '157' },
    { icon: <FaTrophy />, title: 'Tournaments Won', value: '12' },
    { icon: <FaWallet />, title: 'Total Earnings', value: '$2,450' },
    { icon: <FaChartLine />, title: 'Win Rate', value: '68%' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-gradient">Dashboard</h1>
        <Link to="/">
          <Button variant="secondary">Back to Home</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <Card className="flex flex-col items-center p-6 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-game-accent text-4xl mb-4 group-hover:animate-bounce">{stat.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gradient">{stat.title}</h3>
              <p className="text-3xl font-bold text-game-accent group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-game-accent group-hover:to-purple-500">
                {stat.value}
              </p>
            </Card>
          </div>
        ))}
      </div>

      <Card className="mt-8">
        <h2 className="text-2xl font-bold text-gradient mb-6">Recent Activity</h2>
        <div className="space-y-4">
          <ActivityItem title="Won 1v1 Match" amount="+$50" />
          <ActivityItem title="Tournament Participation" amount="+$200" />
          <ActivityItem title="Weekly Challenge Completed" amount="+$75" />
        </div>
      </Card>
    </div>
  );
};

const ActivityItem = ({ title, amount }) => (
  <div className="glass-effect rounded-lg p-4 transition-all duration-300 hover:scale-102 group">
    <div className="flex justify-between items-center">
      <span className="text-white group-hover:text-gradient">{title}</span>
      <span className="text-game-accent group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-game-accent group-hover:to-purple-500">
        {amount}
      </span>
    </div>
  </div>
);

export default Dashboard;