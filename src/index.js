import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    primary: {
      main: "#6A95CF",
      light: "#9DC2F3",
      dark: "#3B71BA",
    },
    secondary: {
      main: "#D3749B",
      light: "#E895B7",
      dark: "#BE698C",
    },
  },
});

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
