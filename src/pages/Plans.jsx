import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';

const Plans = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Básico',
      price: 30,
      period: '/mes',
      features: ['Estandar según tu edad']
    },
    {
      name: 'Premium',
      price: 50,
      period: '/mes',
      features: ['30% Mr Jhon','15% tienda oficial','50% de descuento entradas LRF']
    },
    {
      name: 'Vip',
      price: 100,
      period: '/mes',
      features: ['Beneficios Vip','Acceso libre a Mr Jhon','Entradas LRF']
    },
  ];

  // Deportes con costo para simular selección
  const sports = [
    { name: 'Futbol', price: 10 },
    { name: 'Natación', price: 15 },
    { name: 'Patin', price: 12 },
    { name: 'Voley', price: 10 },
    { name: 'Basquet', price: 10 },
    { name: 'Hockey', price: 14 },
    { name: 'Gimnasia', price: 11 },
    { name: 'Karate', price: 13 },
  ];

  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);
  const [selectedSports, setSelectedSports] = useState([]);

  const toggleSport = (sportName) => {
    setSelectedSports((prev) =>
      prev.includes(sportName)
        ? prev.filter(s => s !== sportName)
        : [...prev, sportName]
    );
  };

  const handleProceedToPayment = () => {
    if (selectedPlanIndex === null) {
      alert('Por favor, selecciona una membresía.');
      return;
    }
    // Preparamos datos para enviar a la pantalla de resumen
    const plan = plans[selectedPlanIndex];
    const chosenSports = sports.filter(s => selectedSports.includes(s.name));
    navigate('/payment-summary', { state: { plan, chosenSports } });
  };

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
          Planes de Membresía
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mb: 5 }}>
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: selectedPlanIndex === index ? '#4caf50' : '#2d4a2d',
                  height: '100%',
                  boxShadow: 3,
                  borderRadius: 3,
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onClick={() => setSelectedPlanIndex(index)}
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Typography variant="h5" sx={{ color: '#ffffff', mb: 2 }}>
                    {plan.name}
                  </Typography>
                  <Typography variant="h3" sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
                    ${plan.price}
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Selector de deportes */}
        <Box sx={{ maxWidth: 600, mx: 'auto', mb: 4, backgroundColor: '#254125', borderRadius: 2, p: 3 }}>
          <Typography variant="h5" sx={{ color: '#ffffff', mb: 2, textAlign: 'center' }}>
            Selecciona los deportes
          </Typography>
          <Grid container spacing={1} justifyContent="center">
            {sports.map((sport) => (
              <Grid key={sport.name} item xs={6} sm={4} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedSports.includes(sport.name)}
                      onChange={() => toggleSport(sport.name)}
                      sx={{
                        color: '#a0a0a0',
                        '&.Mui-checked': { color: '#4caf50' },
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ color: '#ffffff' }}>
                      {sport.name} (${sport.price})
                    </Typography>
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Botón global para proceder al pago */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#2e7d32',
              '&:hover': { backgroundColor: '#4caf50' },
              px: 4,
            }}
            onClick={handleProceedToPayment}
          >
            Proceder al pago
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Plans;
