import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import App from '../App';
import ProtectedRoute from './ProtectedRoute';  // import from the same folder or adjust path

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        }
      />
    </Routes>
  </Router>
);

export default AppRoutes;
