import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert
} from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../imagenes/logo.png'; // 👈 Importa la imagen

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credentials.email && credentials.password) {
      const userData = {
        id: 1,
        name: 'Usuario Demo',
        email: credentials.email,
        role: credentials.email === 'admin@club.com' ? 'admin' : 'user'
      };

      login(userData);
      navigate(userData.role === 'admin' ? '/admin' : '/dashboard');
    } else {
      setError('Por favor ingresa email y contraseña');
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 4,
        backgroundColor: '#2d4a2d',
        width: '100vw',
        overflowX: 'hidden',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 6,
          width: '100%',
          maxWidth: '1200px',
          backgroundColor: '#2d4a2d',
          borderRadius: '12px',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
            <img src={logo} alt="Clubhouse logo" style={{ height: 50, marginRight: 8 }} />
            <Typography variant="h3" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
              Club Atletico Unión
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: '#a0a0a0' }}>
            Inicia sesión en tu cuenta
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            margin="normal"
            sx={{
              maxWidth: 600,
              mx: 'auto',
              '& .MuiInputLabel-root': { color: '#a0a0a0' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#2e7d32' },
                '&:hover fieldset': { borderColor: '#4caf50' },
                '&.Mui-focused fieldset': { borderColor: '#4caf50' },
                '& input': { color: '#ffffff' }
              }
            }}
          />
          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            margin="normal"
            sx={{
              maxWidth: 600,
              mx: 'auto',
              '& .MuiInputLabel-root': { color: '#a0a0a0' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#2e7d32' },
                '&:hover fieldset': { borderColor: '#4caf50' },
                '&.Mui-focused fieldset': { borderColor: '#4caf50' },
                '& input': { color: '#ffffff' }
              }
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 4,
              mb: 3,
              backgroundColor: '#2e7d32',
              '&:hover': { backgroundColor: '#4caf50' },
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Iniciar Sesión
          </Button>
        </form>

        <Typography variant="body2" sx={{ textAlign: 'center', color: '#a0a0a0', mt: 3, maxWidth: 600, mx: 'auto' }}>
          Demo: Usa cualquier email y contraseña
          <br />
          Admin: admin@club.com
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
