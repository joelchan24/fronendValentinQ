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
  Paper,
} from "@mui/material";

const ProfilePage = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const [showName, setShowName] = useState(props.pebblesUser.firstName);
  const [showLastName, setShowLastName] = useState(props.pebblesUser.lastName);
  const [showUsername, setShowUsername] = useState(props.pebblesUser.username);

  return (
    <div>
      <Box
        sx={{
          marginTop: "25px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
          "& > :not(style)": {
            m: 1,
            width: 500,
            height: 500,
          },
        }}
      >
        <Paper elevation={10}>
          {!isEdit && (

                <Grid padding={5} sx={{
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'space-between',
                  alignItems:'center'
                }} >
                  <Typography variant="h4">{showUsername}'s profile</Typography>
                  <Avatar
                    src={props.pebblesUser.avatarUrl}
                    sx={{ width: 100, height: 100 }}
                  />
                  <Typography variant="subtitle1">
                    Full Name: {showName} {showLastName}
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
                    fullWidth
                    onClick={() => setIsEdit((prevState) => !prevState)}
                  >
                    Editar profile
                  </Button>
                </Grid>
          )}
          {isEdit && (
            <EditProfileForm
              props={props}
              setIsEdit={setIsEdit}
              setShowName={setShowName}
              setShowLastName={setShowLastName}
              setShowUsername={setShowUsername}
            />
          )}
        </Paper>
        {props.pebblesUser.role === "Admin" && (
          <Paper elevation={10}>
            <HabitForm />
          </Paper>
        )}
      </Box>
    </div>
  );
};

export default ProfilePage;
