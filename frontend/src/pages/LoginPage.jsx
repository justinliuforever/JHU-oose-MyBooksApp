import { AUTH_URL } from '../../config';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = ({ setUserEmail }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${AUTH_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to login or register');
      }

      setUserEmail(email);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Login or Register</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
      >
        Login / Register
      </button>
    </div>
  );
};

export default LoginPage;
