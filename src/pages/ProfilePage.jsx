import { useState } from "react";
import { HabitForm } from "../components";
import { updateProfileWs } from '../services/user-admin-ws'
import {} from "react-router-dom";
import {
  Avatar,
  Paper,
  Button,
  Typography,
  Box,
  Container,
  Grid,
  Stack,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";

const ProfilePage = (props) => {
  console.log("props.pebblesUser ---> ", props.pebblesUser);

  const [firstName, setFirstName] = useState(props.pebblesUser.firstName)
  const [lastName, setLastName] = useState(props.pebblesUser.lastName)
  const [username, setUsename] = useState(props.pebblesUser.username)

  // ! Checar como agregar el password a los updates
  // const [password, setPassword] = useState(props.pebblesUser.password)

  const [isEdit, setIsEdit] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  // ! Checar como funciona Upload Image Button

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const response = {
      firstName, lastName, username
    }

    try {
      const { data } = await updateProfileWs(response)
      console.log('Que es data de handleEditSubmit --->', data)
      props.authentication(props.pebblesUser);
      alert("TESTING SUCCESS");
    } catch (error) {
      console.log(error.response.data.errorMessage);
      alert(`ERROR : ${error.response.data.errorMessage}`);
    }
  };

  return (
    <div>
      <>
        {/* User profile */}
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">
              {props.pebblesUser.username}'s profile{" "}
            </Typography>
            <Grid item xs={8}>
              <Avatar
                src={props.pebblesUser.avatarUrl}
                sx={{ width: 100, height: 100 }}
              />
              <Typography variant="subtitle1">
                Full Name: {props.pebblesUser.firstName}{" "} 
                {props.pebblesUser.lastName}{" "}
              </Typography>
              <Typography variant="subtitle1">
                Username: {props.pebblesUser.username}
              </Typography>
              <Typography variant="subtitle1">
                Email: {props.pebblesUser.email}
              </Typography>
              <Typography variant="subtitle1">
                Role: {props.pebblesUser.role}
              </Typography>
              <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={() => setIsEdit((prevState) => !prevState)}
              >
                Editar profile
              </Button>
              <Typography>
                {isEdit ? "Se puede editar" : "No se puede Editar"}
              </Typography>
              {props.pebblesUser.role === "Admin" && <HabitForm />}
            </Grid>
          </Box>
        </Container>
      </>

      {/* Edit profile */}
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
          <Typography component="h1" variant="h4">
            Edit my Profile
          </Typography>
          <Avatar
            src={props.pebblesUser.avatarUrl}
            sx={{ width: 100, height: 100 }}
          />
          <Button variant="contained" component="label" size="small">
            Upload Photo
            <input hidden accept="image/*" multiple type="file" />
          </Button>

          <Box
            component="form"
            noValidate
            onSubmit={handleEditSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
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
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  onChange={(e) => setUsename(e.target.value)}
                />
              </Grid>


              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid> */}


            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default ProfilePage;
