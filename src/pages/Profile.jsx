import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Avatar,
  Grid,
  TextField,
  Button
} from '@mui/material';
import Navbar from '../components/Layout/Navbar';

const Profile = () => {
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
          sx={{ color: '#ffffff', fontWeight: 'bold', mb: 4, textAlign: 'center' }}
        >
          Mi Perfil
        </Typography>

        <Paper
          sx={{
            backgroundColor: '#2d4a2d',
            p: 4,
            borderRadius: 3,
            maxWidth: '1000px',
            margin: '0 auto',
          }}
          elevation={3}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: '#2e7d32',
                  fontSize: '3rem',
                }}
              >
                U
              </Avatar>
              <Typography variant="h6" sx={{ color: '#ffffff', mb: 1 }}>
                Usuario Demo
              </Typography>
              <Button
                variant="outlined"
                component="label"
                sx={{
                  color: '#ffffff',
                  borderColor: '#a0a0a0',
                  mt: 1,
                  '&:hover': {
                    backgroundColor: '#3a3a3a',
                    borderColor: '#ffffff',
                  },
                }}
              >
                Cambiar Foto
                <input hidden accept="image/*" type="file" />
              </Button>
            </Grid>

            <Grid item xs={12} md={8}>
              <Grid container spacing={3}>
                {[
                  { label: 'Nombre', defaultValue: 'Usuario' },
                  { label: 'Apellido', defaultValue: 'Demo' },
                  { label: 'Email', defaultValue: 'usuario@club.com' },
                  { label: 'DNI', defaultValue: '12345678' },
                  { label: 'Fecha de Nacimiento', defaultValue: '1990-01-01', type: 'date' },
                  { label: 'Domicilio', defaultValue: 'Calle Falsa 123' }
                ].map((field, i) => (
                  <Grid item xs={12} sm={i === 2 || i === 5 ? 12 : 6} key={i}>
                    <TextField
                      fullWidth
                      label={field.type !== 'date' ? field.label : ''}
                      type={field.type || 'text'}
                      defaultValue={field.defaultValue}
                      InputLabelProps={field.type === 'date' ? { shrink: true } : {}}
                      sx={{
                        '& .MuiInputLabel-root': { color: '#a0a0a0' },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#2e7d32' },
                          '& input': { color: '#ffffff' }
                        }
                      }}
                    />
                  </Grid>
                ))}
              </Grid>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  mt: 4
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#2e7d32',
                    '&:hover': { backgroundColor: '#4caf50' },
                  }}
                >
                  Guardar Cambios
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default Profile;
