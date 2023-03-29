import React from 'react'
import { Box,AppBar, Toolbar,IconButton,Typography,Button} from '@mui/material'


const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Book Library App
          </Typography>
          <Button color="inherit">View</Button>
          <Button color="inherit">Add Book</Button>
        </Toolbar>
      </AppBar>
    </Box>
      
    </div>
  )
}

export default Navbar