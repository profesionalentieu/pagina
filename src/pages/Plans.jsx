import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import Navbar from '../components/Layout/Navbar';

const Plans = () => {
  const plans = [
    {
      name: 'Básico',
      price: '$50',
      period: '/mes',
      features: ['Acceso a gimnasio', '2 deportes', 'Horario limitado']
    },
    {
      name: 'Premium',
      price: '$100',
      period: '/mes',
      features: ['Acceso completo', 'Todos los deportes', '24/7', 'Entrenador personal']
    },
    {
      name: 'VIP',
      price: '$200',
      period: '/mes',
      features: ['Todo incluido', 'Acceso prioritario', 'Spa incluido', 'Invitados gratis']
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#1a2e1a', minHeight: '100vh' }}>
      <Navbar />
      
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 'bold', mb: 4 }}>
          Planes de Membresía
        </Typography>

        <Grid container spacing={3}>
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ backgroundColor: '#2d4a2d', height: '100%' }}>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Typography variant="h5" sx={{ color: '#ffffff', mb: 2 }}>
                    {plan.name}
                  </Typography>
                  <Typography variant="h3" sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
                    {plan.price}
                    <Typography component="span" sx={{ fontSize: '1rem', color: '#a0a0a0' }}>
                      {plan.period}
                    </Typography>
                  </Typography>
                  
                  <List sx={{ my: 3 }}>
                    {plan.features.map((feature, idx) => (
                      <ListItem key={idx} sx={{ px: 0 }}>
                        <ListItemText 
                          primary={feature}
                          sx={{ '& .MuiListItemText-primary': { color: '#ffffff' } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ 
                      backgroundColor: '#2e7d32',
                      '&:hover': { backgroundColor: '#4caf50' }
                    }}
                  >
                    Elegir Plan
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

export default Plans;