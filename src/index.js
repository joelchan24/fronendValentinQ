import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {createTheme} from '@mui/material'

const lightTheme = createTheme({
  palette:{
    mode:"light",
    primary:{
      main: "#FAF8EC" ,
      light: "#FDFDF3" ,
      dark: "#E7E6D1"
    },
    secondary:{
      main: "#2B4D9A",
      light: "#0B4DA5",
      dark: "#172A56"
    },
    text:{
      primary:"rgba(2,6,13,0.87)",
      secondary:"rgba(2,6,13,0.61)",
      disabled:"rgba(2,6,13,0.38)"
    },
    background:{
      paper: "#FFFFFC",
      dafault: "#FFFFFC"
    }
  }
})
const darkTheme = createTheme({
  palette:{
    mode:"dark",
    primary:{
      main:"#9FF6DB",
      light:"#B7FDE8",
      dark:"#7CF0CD"
    },
    secondary:{
      main:"#8356D8",
      light:"#7A57BD",
      dark:"#5F3BA2"
    },
    text:{
      primary:"rgba(253,253,249, 0.8)",
      secondary:"rgba(253,253,249, 0.7)",
      disabled:"rgba(253,253,249, 0.6)",
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <App lightTheme={lightTheme} darkTheme={darkTheme} />
    </Router>
  </React.StrictMode>
);
