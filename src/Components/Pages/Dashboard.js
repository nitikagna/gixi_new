import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <header className="dashboard-header">
        <img
          src="https://via.placeholder.com/50"
          alt="Logo Left"
          className="dashboard-logo left-logo"
        />
        <h1 className="dashboard-title">IGX Dashboard</h1>
        <img
          src="https://via.placeholder.com/50"
          alt="Logo Right"
          className="dashboard-logo right-logo"
        />
      </header>

      {/* Subheading and Overview Section */}
      <div className="dashboard-subheader">
        <span className="dashboard-overview">Overview</span>
        <span className="dashboard-date">04 July 24</span>
      </div>

      {/* Parent Div */}
      <div className="dashboard-content">
        {/* Child Divs */}
        <div className="dashboard-item">
          <p className="dashboard-item-title">Month</p>
          <h3 className="dashboard-item-value">November</h3>
          <span className="dashboard-item-subvalue">October</span>
        </div>
        <div className="dashboard-item">
          <p className="dashboard-item-title">Net Production</p>
          <h3 className="dashboard-item-value">694.00</h3>
          <span className="dashboard-item-subvalue">694.00</span>
        </div>
        <div className="dashboard-item">
          <p className="dashboard-item-title">Volume Imported</p>
          <h3 className="dashboard-item-value">694.00</h3>
          <span className="dashboard-item-subvalue">694.00</span>
        </div>
        <div className="dashboard-item">
          <p className="dashboard-item-title">Gas Consumption</p>
          <h3 className="dashboard-item-value">694.00</h3>
          <span className="dashboard-item-subvalue">694.00</span>
        </div>
        <div className="dashboard-item">
          <p className="dashboard-item-title">Gas Generation</p>
          <h3 className="dashboard-item-value">694.00</h3>
          <span className="dashboard-item-subvalue">694.00</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
