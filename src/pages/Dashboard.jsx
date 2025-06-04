import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Navbar from '../components/Layout/Navbar';

const Dashboard = () => {
  const stats = [
    { title: 'Mis Deportes', value: '3', subtitle: 'Deportes activos' },
    { title: 'Próximos Eventos', value: '5', subtitle: 'Esta semana' },
    { title: 'Mi Plan', value: 'Premium', subtitle: 'Activo hasta Dic 2024' }
  ];

  return (
    <Box sx={{ backgroundColor: '#1a2e1a', minHeight: '100vh' }}>
      <Navbar />
      
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 'bold', mb: 1 }}>
          Dashboard
        </Typography>
        
        <Typography variant="body1" sx={{ color: '#a0a0a0', mb: 4 }}>
          Bienvenido de nuevo al club
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper 
                sx={{ 
                  backgroundColor: '#2d4a2d',
                  p: 3,
                  borderRadius: 3
                }}
              >
                <Typography variant="h6" sx={{ color: '#a0a0a0', mb: 1 }}>
                  {stat.title}
                </Typography>
                <Typography variant="h3" sx={{ color: '#ffffff', fontWeight: 'bold', mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ color: '#2e7d32' }}>
                  {stat.subtitle}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5" sx={{ color: '#ffffff', fontWeight: 'bold', mb: 3 }}>
          Actividad Reciente
        </Typography>
        
        <Paper sx={{ backgroundColor: '#2d4a2d', p: 3, borderRadius: 3 }}>
          <Typography sx={{ color: '#ffffff' }}>
            No hay actividad reciente para mostrar.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;