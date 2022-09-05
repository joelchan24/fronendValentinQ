import { useState } from "react";
import { HabitForm, EditProfileForm } from "../components";

import {} from "react-router-dom";
import {
  Avatar,
  Button,
  Typography,
  Box,
  Container,
  Grid,
} from "@mui/material";

const ProfilePage = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      {!isEdit && (
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
              {props.pebblesUser.username}'s profile
            </Typography>
            <Grid item xs={8}>
              <Avatar
                src={props.pebblesUser.avatarUrl}
                sx={{ width: 100, height: 100 }}
              />
              <Typography variant="subtitle1">
                Full Name: {props.pebblesUser.firstName}{" "}
                {props.pebblesUser.lastName}
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
            </Grid>
          </Box>
        </Container>
      )}
      {isEdit && <EditProfileForm props={props} setIsEdit={setIsEdit} />}

      {props.pebblesUser.role === "Admin" && <HabitForm />}
    </div>
  );
};

export default ProfilePage;
