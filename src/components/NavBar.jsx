import React from 'react'
import { AppBar , Box, IconButton, Toolbar, Typography } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const NavBar = () => {
  return (
    <Box sx={{  width:'100%' }} >
        <AppBar>
            <Toolbar>
                <IconButton>
                   <ShoppingBasketIcon/>
                </IconButton>
                <Typography pl='10px' component= 'div' variant = 'h6'>ClearKart</Typography>
            </Toolbar>
        </AppBar>
      
    </Box>
  )
}

export default NavBar
