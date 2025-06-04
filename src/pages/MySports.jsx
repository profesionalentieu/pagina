import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Chip } from '@mui/material';
import Navbar from '../components/Layout/Navbar';

const MySports = () => {
  const sports = [
    { name: 'Fútbol', status: 'Activo', nextGame: 'Sábado 15:00' },
    { name: 'Tenis', status: 'Activo', nextGame: 'Miércoles 18:00' },
    { name: 'Natación', status: 'Pausado', nextGame: '-' }
  ];

  return (
    <Box sx={{ backgroundColor: '#1a2e1a', minHeight: '100vh' }}>
      <Navbar />
      
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 'bold', mb: 4 }}>
          Mis Deportes
        </Typography>

        <Grid container spacing={3}>
          {sports.map((sport, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ backgroundColor: '#2d4a2d' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#ffffff', mb: 2 }}>
                    {sport.name}
                  </Typography>
                  <Chip 
                    label={sport.status}
                    color={sport.status === 'Activo' ? 'success' : 'default'}
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="body2" sx={{ color: '#a0a0a0' }}>
                    Próximo: {sport.nextGame}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MySports;