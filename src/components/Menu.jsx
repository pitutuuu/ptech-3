import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";   
import { useNavigate } from 'react-router-dom'
import React from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
]

const Menu = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{ display: "flex"}}>
      <AppBar component={"nav"}>
        <Toolbar>
          {navItems.map((item) => (
            <Button key={item.label} sx={{ color: "#fff" }} onClick={() => navigate(item.path)}>
              {item.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Menu;