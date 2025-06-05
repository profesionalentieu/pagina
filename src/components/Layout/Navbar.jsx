import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Box, Container } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../../imagenes/logo.png'; // Importa la imagen

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    { label: 'Inicio', path: '/dashboard' },
    { label: 'Mis Deportes', path: '/my-sports' },
    { label: 'Planes', path: '/plans' },
    { label: 'Perfil', path: '/profile' },
  ];

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#1a2e1a',
        boxShadow: 'none',
        borderBottom: '1px solid #2d4a2d'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', px: 0 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer' 
            }}
            onClick={() => navigate('/dashboard')}
          >
            <img 
              src={logo} 
              alt="Logo" 
              style={{ height: 40, marginRight: 8 }} 
            />
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 'bold',
                color: '#ffffff'
              }}
            >
              Club Atletico Unión
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                onClick={() => navigate(item.path)}
                sx={{ 
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#2d4a2d'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
              <Avatar
                sx={{ width: 32, height: 32, backgroundColor: '#2e7d32' }}
              >
                {user?.name?.charAt(0) || 'U'}
              </Avatar>
              <Button
                color="inherit"
                onClick={handleLogout}
                sx={{ 
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#2d4a2d'
                  }
                }}
              >
                Salir
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
