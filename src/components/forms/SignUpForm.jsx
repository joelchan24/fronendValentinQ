import { useState } from "react";
import { signupWs } from "../../services/auth-ws";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Modal
} from "@mui/material";
import LockPersonTwoToneIcon from "@mui/icons-material/LockPersonTwoTone";

export default function SignUpForm(props) {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const navigate = useNavigate();
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = {
      username,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };

    try {
      const { data } = await signupWs(response);
      console.log("que es data en signup ---->", data);
      props.authentication(data.user);
      alert("TESTING SUCCESS");
      navigate("/profile");
    } catch (error) {
      console.log(error.response.data.errorMessage);
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
        <LockPersonTwoToneIcon sx={{ width: 75, height: 75 }} color="secondary" />
        <Typography component="h1" variant="h4" color='secondary' sx={{fontWeight:'light'}} >
          sign up and get access to all the micro habits.
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                color="secondary"
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                color="secondary"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                color="secondary"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                color="secondary"
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                color="secondary"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                color="secondary"
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            color="secondary"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container sx={{
            display:'flex',
            justifyContent:'center'
          }}>
            <Grid item>
              <Link to="/login">
                Already have an account? Login
              </Link>
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
          <Box sx={props.style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" color="red">
              ERROR!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} color="red">
              {error}
            </Typography>
          </Box>
        </Modal>
      </div>
    </Container>
  );
}
