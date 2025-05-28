import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    setError('');
    setLoading(true);
    try {
      await axios.post('http://localhost:3000/users', {
        username,
        email,
        password,
      });
      alert('Registered successfully! Please login.');
      navigate('/login'); // Redirect to login after registration
    } catch (error) {
      console.error(error);
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-blue-50">
      <div className="relative bg-white shadow-lg rounded-lg max-w-md w-full p-8 z-10">
        <h2 className="text-3xl font-semibold text-center mb-8 text-blue-700">CREATE AN ACCOUNT</h2>

        {error && (
          <div className="mb-4 text-center text-red-600 font-medium bg-red-100 p-3 rounded">
            {error}
          </div>
        )}

        <input
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full mb-5 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          autoComplete="username"
        />

        <input
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
          autoComplete="new-password"
        />

        <button
          onClick={handleRegister}
          disabled={loading}
          className={`w-full py-3 rounded text-white font-semibold transition ${
            loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        <p className="mt-6 text-center text-gray-700">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
