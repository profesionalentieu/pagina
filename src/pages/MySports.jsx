import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
} from '@mui/material';
import Navbar from '../components/Layout/Navbar';

const MySports = () => {
  const sports = [
    { name: 'Fútbol', status: 'Pausado', nextGame: 'Sábado 15:00' },
    { name: 'Natación', status: 'Pausado', nextGame: '-' },
    { name: 'Patín', status: 'Pausado', nextGame: 'Viernes 17:30' },
    { name: 'Vóley', status: 'Pausado', nextGame: 'Lunes 19:00' },
    { name: 'Básquet', status: 'Pausado', nextGame: '-' },
    { name: 'Hockey', status: 'Pausado', nextGame: 'Domingo 11:00' },
    { name: 'Gimnasia', status: 'Pausado', nextGame: 'Miércoles 10:00' },
    { name: 'Karate', status: 'Pausado', nextGame: 'Jueves 18:30' },
  ];
  

  return (
    <Box sx={{ backgroundColor: '#1a2e1a', minHeight: '100vh' }}>
      <Navbar />

      <Box
        sx={{
          px: 4,
          py: 6,
          width: '100vw',
          maxWidth: '100%',
          backgroundColor: '#2d4a2d',
          overflowX: 'hidden',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#ffffff',
            fontWeight: 'bold',
            mb: 4,
            textAlign: 'center',
          }}
        >
          Mis Deportes
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {sports.map((sport, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: '#2d4a2d',
                  minHeight: 180,
                  boxShadow: 3,
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ color: '#ffffff', mb: 1 }}
                  >
                    {sport.name}
                  </Typography>
                  <Chip
                    label={sport.status}
                    color={sport.status === 'Activo' ? 'success' : 'default'}
                    sx={{ mb: 2 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: '#a0a0a0', mb: 2 }}
                  >
                    Próximo: {sport.nextGame}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      color: '#ffffff',
                      borderColor: '#a0a0a0',
                      '&:hover': {
                        backgroundColor: '#3a3a3a',
                        borderColor: '#ffffff',
                      },
                    }}
                  >
                    Inscribirse
                  </Button>
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
