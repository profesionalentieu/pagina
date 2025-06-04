import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider, useAuth } from './context/AuthContext';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MySports from './pages/MySports';
import Profile from './pages/Profile';
import Plans from './pages/Plans';
import AdminDashboard from './pages/Admin/AdminDashboard';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2e7d32',
    },
    background: {
      default: '#1a2e1a',
      paper: '#2d4a2d',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <Routes>
      <Route 
        path="/login" 
        element={!isAuthenticated ? <Login /> : <Navigate to={user?.role === 'admin' ? '/admin' : '/dashboard'} />} 
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/my-sports"
        element={
          <ProtectedRoute>
            <MySports />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/plans"
        element={
          <ProtectedRoute>
            <Plans />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;