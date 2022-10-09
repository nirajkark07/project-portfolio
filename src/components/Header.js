import React from 'react';
import { Button, Toolbar, IconButton, Typography, Box, AppBar } from '@mui/material';

export const Header = () => {
const navItems = ['About', 'Projects']
    return (
        <AppBar component="nav">
        <Toolbar>
         
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Niraj Karki
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    )
}