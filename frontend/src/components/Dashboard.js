import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import your CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>
      <p>Here, you can manage your health data and track your progress.</p>
      <div className="dashboard-buttons">
        <Link to="/login" className="dashboard-button">Login</Link>
        <Link to="/register" className="dashboard-button">Register</Link>
      </div>
    </div>
  );
};

export default Dashboard;
