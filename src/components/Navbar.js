import { AppBar, Box, styled, Toolbar } from '@mui/material'
import React from 'react'


const SytledToolbar = styled(Toolbar)({
  // 对Toolbar应用样式
  
})

function Navbar() {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        Navbar
      </Toolbar>
    </AppBar>
  )
}

export default Navbar