import React from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Avatar, 
  Typography, 
  Box 
} from '@mui/material';
import { 
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Event as EventIcon,
  Pages as PagesIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Panel', icon: <DashboardIcon />, path: '/admin' },
    { text: 'Miembros', icon: <PeopleIcon />, path: '/admin/members' },
    { text: 'Eventos', icon: <EventIcon />, path: '/admin/events' },
    { text: 'Pagos', icon: <PagesIcon />, path: '/admin/payments' },
    { text: 'Ajustes', icon: <SettingsIcon />, path: '/admin/settings' }
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 280,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          backgroundColor: '#1a2e1a',
          color: '#ffffff',
          borderRight: '1px solid #2d4a2d'
        },
      }}
    >
      <Box sx={{ p: 3, borderBottom: '1px solid #2d4a2d' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            sx={{ width: 48, height: 48, backgroundColor: '#2e7d32' }}
          >
            S
          </Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Sofía Rodríguez
            </Typography>
            <Typography variant="body2" sx={{ color: '#a0a0a0' }}>
              Administradora del Club
            </Typography>
          </Box>
        </Box>
      </Box>

      <List sx={{ pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => navigate(item.path)}
            sx={{
              mb: 1,
              mx: 2,
              borderRadius: 2,
              backgroundColor: location.pathname === item.path ? '#2d5a2d' : 'transparent',
              '&:hover': {
                backgroundColor: '#2d4a2d'
              }
            }}
          >
            <ListItemIcon sx={{ color: '#ffffff' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AdminSidebar;