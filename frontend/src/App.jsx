import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SubmitBook from './pages/SubmitBook';
import { useState } from 'react';

export default function App() {
  const [userEmail, setUserEmail] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage userEmail={userEmail} />} />
        <Route path="/submit" element={<SubmitBook />} />
        <Route path="/login" element={<LoginPage setUserEmail={setUserEmail} />} />
      </Routes>
    </Router>
  );
}
