import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SubmitBook from './pages/SubmitBook';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} /> 
        <Route path="/submit" element={<SubmitBook/>} />
      </Routes>
    </Router>
  );
}
