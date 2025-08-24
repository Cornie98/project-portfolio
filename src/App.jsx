import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Portfolio from './Portfolio';
import DevLogsPage from './Components/DevLogsPage';
import ProjectTimeline from './Components/ProjectTimeline';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <NavBar />
            <Portfolio />
          </>
        } />
        <Route path="/dev-logs" element={<DevLogsPage />} />
        <Route path="/dev-logs/project/:projectId" element={<ProjectTimeline />} />
      </Routes>
    </Router>
  );
}

export default App;
