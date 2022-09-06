import { useState } from "react";
import { updateProfileWs } from "../../services/user-admin-ws";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";

export default function EditProfileForm({
  props,
  setIsEdit,
  setShowName,
  setShowLastName,
  setShowUsername,
}) {
  const [firstName, setFirstName] = useState(props.pebblesUser.firstName);
  const [lastName, setLastName] = useState(props.pebblesUser.lastName);
  const [username, setUsername] = useState(props.pebblesUser.username);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfileWs({
        firstName,
        lastName,
        username,
      });
      setShowLastName(lastName)
      setShowName(firstName)
      setShowUsername(username)
      setIsEdit((prevState) => !prevState);
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
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          src={props.pebblesUser.avatarUrl}
          sx={{ width: 100, height: 100 }}
        />
        <Typography component="h1" variant="h5">
          Edit my Profile
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                defaultValue={props.pebblesUser.firstName}
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                defaultValue={props.pebblesUser.lastName}
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
                fullWidth
                defaultValue={props.pebblesUser.username}
                id="username"
                label="username Address"
                name="username"
                autoComplete="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            onClick={handleSubmit}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Edit Profile
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
