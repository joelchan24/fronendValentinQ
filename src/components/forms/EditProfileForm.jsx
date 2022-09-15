import { useState, useRef } from "react";
import { updateProfileWs } from "../../services/user-admin-ws";
import { singleImageWs } from "../../services/updatePicWs";

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
  setShowAvatar,
}) {
  const [firstName, setFirstName] = useState(props.pebblesUser.firstName);
  const [lastName, setLastName] = useState(props.pebblesUser.lastName);
  const [username, setUsername] = useState(props.pebblesUser.username);

  const [avatarUrl, setAvatarUrl] = useState(props.pebblesUser.avatarUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfileWs({
        firstName,
        lastName,
        username,
        avatarUrl,
      });
      setShowLastName(lastName);
      setShowName(firstName);
      setShowUsername(username);
      setShowAvatar(avatarUrl);
      setIsEdit((prevState) => !prevState);
    } catch (error) {
      alert(`ERROR : ${error.response.data.errorMessage}`);
    }
  };
  const elInput = useRef("input");

  const openImage = () => {
    elInput.current.click();
  };

  const editImage = (e) => {
    const fromData = new FormData();
    fromData.append("image", e.target.files[0]);

    singleImageWs(fromData)
      .then((res) => {
        setAvatarUrl(res.data.url.uri);
      })
      .catch((error) => {
        alert(error)});
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ height: "100%" }}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box>
          <Typography component="h1" variant="h4" sx={{ fontWeight: "light", mt:2 }}>
            Edit my Profile
          </Typography>
          <Typography sx={{ fontWeight: "light", mt:2 }} >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis cum ab vitae quia illum omnis.
          </Typography>
        </Box>

        <Box sx={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center'
        }} >
          <Avatar
            src={
              typeof avatarUrl != "string"
                ? URL.createObjectURL(avatarUrl)
                : avatarUrl
            }
            sx={{ width: 100, height: 100 }}
          />

          <input
            hidden
            ref={elInput}
            accept="image/*"
            multiple
            type="file"
            onChange={editImage}
          />

          <Button
            variant="contained"
            component="label"
            size="small"
            color="secondary"
            onClick={openImage}
            sx={{mt:1}}
          >
            Upload Photo
          </Button>
        </Box>

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
                color="secondary"
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
                color="secondary"
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
                color="secondary"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            color="secondary"
            onClick={handleSubmit}
            variant="contained"
            sx={{ mt: 6, mb: 3.4 }}
          >
            Edit Profile
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
