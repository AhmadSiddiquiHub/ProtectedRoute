import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = (authenticated) => {
    setIsAuthenticated(authenticated);
  };

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Home handleAuthentication={handleAuthentication} isAuthenticated={isAuthenticated}/>}
        />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} Component={Dashboard}/>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
