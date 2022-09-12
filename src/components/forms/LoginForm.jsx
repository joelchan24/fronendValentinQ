import { useState } from "react";
import { loginWs } from "../../services/auth-ws";
import { useNavigate, Link } from "react-router-dom";

import {
  Button,
  TextField,
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockPersonTwoToneIcon from "@mui/icons-material/LockPersonTwoTone";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = { username, password };

    try {
      const { data } = await loginWs(response);
      console.log("que es data en login ---->", data.user);
      props.authentication(data.user);

      if(data.user.role === 'User'){
        navigate('/habits')
      } else {
        navigate('/profile')
      }


    } catch (error) {
      console.log(error.response.data.errorMessage);
      alert(`ERROR : ${error.response.data.errorMessage}`);

    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
          <LockPersonTwoToneIcon sx={{ width: 75, height: 75 }} color="secondary" />

        <Typography component="h1" variant="h4" color='secondary' sx={{fontWeight:'light'}}>
          login and continue with your habits
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            color="secondary"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            color="secondary"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            color="secondary"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container 
            sx={{
              display:'flex',
              justifyContent:'center'
            }} >
            <Grid item>
              <Link to="/signup">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
