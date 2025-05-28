import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User } from '../models/User';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      const res = await axios.get<User[]>(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      const users = res.data;

      if (users.length > 0) {
        login(users[0]);
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-blue-50">
      <div className="relative bg-white shadow-lg rounded-lg max-w-md w-full p-8 z-10">
        <h2 className="text-3xl font-semibold text-center mb-8 text-blue-700">WELCOME BACK!</h2>

        {error && (
          <div className="mb-4 text-center text-red-600 font-medium bg-red-100 p-3 rounded">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-5 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          autoComplete="email"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          autoComplete="current-password"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full py-3 rounded text-white font-semibold transition ${
            loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <p className="mt-6 text-center text-gray-700">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
