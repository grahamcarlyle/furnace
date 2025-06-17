import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router basename="/furnace">
      <div className="app">
        <header className="app-header">
          <h1>Furnace - GitHub Actions Monitor</h1>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h2>Build Status Dashboard</h2>
      <p>GitHub Actions build statuses will appear here.</p>
    </div>
  );
};

const Settings: React.FC = () => {
  return (
    <div className="settings">
      <h2>Settings</h2>
      <p>Repository configuration will be available here.</p>
    </div>
  );
};

export default App;
