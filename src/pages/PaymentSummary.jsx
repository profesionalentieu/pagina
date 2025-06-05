import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

const sportPrices = {
  Futbol: 10,
  Natación: 15,
  Patin: 12,
  Voley: 10,
  Basquet: 10,
  Hockey: 14,
  Gimnasia: 11,
  Karate: 13,
};

const PaymentSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { plan, chosenSports } = location.state || {};

  if (!plan || !chosenSports) {
    navigate('/plans');
    return null;
  }

  const sportsCost = chosenSports.reduce(
    (acc, sport) => acc + (sportPrices[sport.name] || 0),
    0
  );

  const planCost = Number(plan.price.toString().replace(/[^0-9.-]+/g, ''));
  const totalCost = planCost + sportsCost;

  const [paymentMethod, setPaymentMethod] = React.useState('mercadoPago');

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleConfirmPayment = () => {
    alert(`Pagando $${totalCost} con método: ${paymentMethod}`);
  };

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: '#1e1e2f', // fondo oscuro
        py: 4,
        px: { xs: 2, md: 6 },
        boxSizing: 'border-box',
        color: '#f0f0f0', // texto claro
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: '#ffffff' }}>
        Resumen del Pago
      </Typography>

      <Box
        component={Paper}
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          p: 4,
          borderRadius: 3,
          backgroundColor: '#2c2c3c', // panel gris medio
          gap: 4,
          color: '#f0f0f0',
        }}
      >
        {/* Columna izquierda */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ color: '#90caf9' }}>
            Membresía seleccionada
          </Typography>
          <Typography sx={{ mb: 2 }}>
            {plan.name} — ${plan.price} {plan.period}
          </Typography>

          <Divider sx={{ my: 2, borderColor: '#555' }} />

          <Typography variant="h6" sx={{ color: '#90caf9' }}>
            Deportes seleccionados
          </Typography>
          <List dense>
            {chosenSports.map((sport) => (
              <ListItem key={sport.name} disableGutters>
                <ListItemText
                  primary={sport.name}
                  secondary={`Costo: $${sportPrices[sport.name] || 0}`}
                  primaryTypographyProps={{ color: '#ffffff' }}
                  secondaryTypographyProps={{ color: '#b0bec5' }}
                />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2, borderColor: '#555' }} />

          <Typography variant="h6" sx={{ color: '#90caf9' }}>
            Total a pagar
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#66bb6a' }}>
            ${totalCost}
          </Typography>
        </Box>

        {/* Columna derecha */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 2, color: '#90caf9' }}>
            Métodos de pago
          </Typography>
          <RadioGroup value={paymentMethod} onChange={handlePaymentChange}>
            <FormControlLabel
              value="mercadoPago"
              control={<Radio sx={{ color: '#90caf9' }} />}
              label="Mercado Pago"
              sx={{ color: '#ffffff' }}
            />
            <FormControlLabel
              value="creditCard"
              control={<Radio sx={{ color: '#90caf9' }} />}
              label="Tarjeta de Crédito"
              sx={{ color: '#ffffff' }}
            />
            <FormControlLabel
              value="debitCard"
              control={<Radio sx={{ color: '#90caf9' }} />}
              label="Tarjeta de Débito"
              sx={{ color: '#ffffff' }}
            />
          </RadioGroup>

          <Box sx={{ mt: 4, textAlign: 'right' }}>
            <Button variant="contained" onClick={handleConfirmPayment}>
              Confirmar Pago
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentSummary;
