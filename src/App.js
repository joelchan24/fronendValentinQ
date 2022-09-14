import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import routes from "./config/routes";
import { Navbar } from "./components";
import { logoutWs } from "./services/auth-ws";

import {
  ThemeProvider,
  CssBaseline,
  Box,
  Modal,
  Typography
} from "@mui/material";

function App({lightTheme, darkTheme}) {
  const [pebblesUser, setPebblesUser] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    const user = localStorage.getItem("connected");
    if (user) {
      setPebblesUser(JSON.parse(user));
      setIsLoading(false);
    } else {
      setPebblesUser(null);
      setIsLoading(false);
    }
  }, []);

  const authentication = (user) => {
    localStorage.setItem("connected", JSON.stringify(user));
    setPebblesUser(user);
  };

  const handleLogout = async () => {
    try {
      const res = await logoutWs();
      console.log("res del logout --->", res);
      alert("LOGOUT SUCCESS");
      navigate("/");
      setPebblesUser(null);
      localStorage.removeItem("connected");
    } catch (error) {
      console.log(error.response.data.errorMessage);
      alert(`ERROR : ${error.response.data.errorMessage}`);
    }
  };
  if (isLoading) {
    return <div> Is loading... </div>;
  }
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box className="App">
        <Navbar pebblesUser={pebblesUser} handleLogout={handleLogout} setIsDark={setIsDark} isDark={isDark} />
        <Box
          sx={{
            marginRight: 3,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
        </Box>

        <Routes>
          {routes({ pebblesUser, authentication, handleLogout, style}).map(
            ({ path, element }) => (
              <Route key={path} {...{ path, element }} />
            )
          )}
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
