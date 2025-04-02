import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/IconButton";

const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(systemDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <IconButton
        onClick={toggleDarkMode}
        sx={{
          position: "fixed",
          top: 15,
          right: 15,
          bgcolor: "gray",
          boxShadow: 3,
          "&:hover": { bgcolor: "lightgray" },
        }}
      >
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>

      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
