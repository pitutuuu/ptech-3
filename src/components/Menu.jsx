import { AppBar, Box, Button, Toolbar, Switch } from "@mui/material";   
import { useNavigate } from 'react-router-dom'
import React from "react";
import { useColorMode } from '../contexts/ColorModeContext'

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
]

const Menu = () => {
  const navigate = useNavigate()
  const colorMode = useColorMode()

  return (
    <Box sx={{ display: "flex"}}>
      <AppBar component={"nav"}>
        <Toolbar>
          {navItems.map((item) => (
            <Button key={item.label} sx={{ color: "#fff" }} onClick={() => navigate(item.path)}>
              {item.label}
            </Button>
          ))}
          <Box sx={{flexGrow: 1}}></Box>
          <Switch onClick={() => colorMode.toggleColorMode()} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Menu;