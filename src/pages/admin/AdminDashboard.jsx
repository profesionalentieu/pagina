import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import AdminSidebar from '../../components/Layout/AdminSidebar';

const AdminDashboard = () => {
  const stats = [
    { title: 'Miembros Totales', value: '250', change: '+10%', color: '#2e7d32' },
    { title: 'Miembros Activos', value: '200', change: '+5%', color: '#2e7d32' },
    { title: 'Próximos Eventos', value: '5', change: '+2', color: '#2e7d32' }
  ];

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#1a2e1a', minHeight: '100vh' }}>
      <AdminSidebar />
      
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 'bold', mb: 1 }}>
          Panel
        </Typography>
        
        <Typography variant="body1" sx={{ color: '#a0a0a0', mb: 4 }}>
          Bienvenida de nuevo, Sofía Rodríguez
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
                <Typography variant="body2" sx={{ color: stat.color }}>
                  {stat.change}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5" sx={{ color: '#ffffff', fontWeight: 'bold', mb: 3 }}>
          Estado de los Miembros
        </Typography>
        
        <Paper sx={{ backgroundColor: '#2d4a2d', p: 3, borderRadius: 3 }}>
          <Typography sx={{ color: '#ffffff' }}>
            Panel de administración funcional
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default AdminDashboard;