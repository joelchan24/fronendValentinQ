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
  Modal,
} from "@mui/material";
import LockPersonTwoToneIcon from "@mui/icons-material/LockPersonTwoTone";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = { username, password };

    try {
      const { data } = await loginWs(response);
      console.log("que es data en login ---->", data.user);
      props.authentication(data.user);

      if (data.user.role === "User") {
        navigate("/habits");
      } else {
        navigate("/profile");
      }
    } catch (error) {
      console.log(error.response.data.errorMessage);
      // alert(`ERROR : ${error.response.data.errorMessage}`);
      setError(error.response.data.errorMessage)
      handleOpen();
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
        <LockPersonTwoToneIcon
          sx={{ width: 75, height: 75 }}
          color="secondary"
        />

        <Typography
          component="h1"
          variant="h4"
          color="secondary"
          sx={{ fontWeight: "light" }}
        >
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
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item>
              <Link to="/signup">Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ERROR!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {error}
            </Typography>
          </Box>
        </Modal>
      </div>
    </Container>
  );
}
