import React from 'react';
import { Box, Paper, Typography, Avatar, Grid, TextField, Button } from '@mui/material';
import Navbar from '../components/Layout/Navbar';

const Profile = () => {
  return (
    <Box sx={{ backgroundColor: '#1a2e1a', minHeight: '100vh' }}>
      <Navbar />
      
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 'bold', mb: 4 }}>
          Mi Perfil
        </Typography>

        <Paper sx={{ backgroundColor: '#2d4a2d', p: 4, borderRadius: 3 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <Avatar
                sx={{ width: 120, height: 120, mx: 'auto', mb: 2, backgroundColor: '#2e7d32', fontSize: '3rem' }}
              >
                U
              </Avatar>
              <Typography variant="h6" sx={{ color: '#ffffff' }}>
                Usuario Demo
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nombre"
                    defaultValue="Usuario"
                    sx={{
                      '& .MuiInputLabel-root': { color: '#a0a0a0' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#2e7d32' },
                        '& input': { color: '#ffffff' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Apellido"
                    defaultValue="Demo"
                    sx={{
                      '& .MuiInputLabel-root': { color: '#a0a0a0' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#2e7d32' },
                        '& input': { color: '#ffffff' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    defaultValue="usuario@club.com"
                    sx={{
                      '& .MuiInputLabel-root': { color: '#a0a0a0' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#2e7d32' },
                        '& input': { color: '#ffffff' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#2e7d32', '&:hover': { backgroundColor: '#4caf50' } }}
                  >
                    Guardar Cambios
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default Profile;