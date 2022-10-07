import { AppBar, Box, styled, Toolbar, Typography } from '@mui/material'
import { Pets } from '@mui/icons-material'
import React from 'react'


const SytledToolbar = styled(Toolbar)({
  // 对Toolbar应用样式
  display:"flex",
  justifyContent:"space-between",
})

function Navbar() {
  return (
    <AppBar position='sticky'>
      <SytledToolbar>
        <Typography variant='h6' sx={{dispaly:{xs:"none", sm:"block"}}}>
            练习MUI
        </Typography>
        <Pets sx={{dispaly:{xs:"block", sm:"none"}}}/>
      </SytledToolbar>
    </AppBar>
  )
}

export default Navbar