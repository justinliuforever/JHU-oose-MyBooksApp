import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SubmitBook from './pages/SubmitBook';
import { useState } from 'react';

export default function App() {
  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || '');

  return (
    <Router>
      <Routes>
        <Route path="/" element={userEmail ? <HomePage userEmail={userEmail} /> : <Navigate to="/login" />} />
        <Route path="/submit" element={userEmail ? <SubmitBook /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage setUserEmail={setUserEmail} />} />
      </Routes>
    </Router>
  );
}
