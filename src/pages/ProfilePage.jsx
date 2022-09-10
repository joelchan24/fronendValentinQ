import { useState } from "react";
import { HabitForm, EditProfileForm, EditVisionForm } from "../components";

import { Avatar, Button, Typography, Box, Grid, Paper } from "@mui/material";

const ProfilePage = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [visionEdit, setVisionEdit] = useState(false);

  const [showName, setShowName] = useState(props.pebblesUser.firstName);
  const [showLastName, setShowLastName] = useState(props.pebblesUser.lastName);
  const [showUsername, setShowUsername] = useState(props.pebblesUser.username);
  const [showAvatar, setShowAvatar] = useState(props.pebblesUser.avatarUrl);

  const [showVisionOne, setShowVisionOne] = useState(
    props.pebblesUser.visionOne
  );
  const [showGeneralVision, setShowGeneralVision] = useState(
    props.pebblesUser.generalVision
  );

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
            height: 640,
          },
        }}
      >
        <Paper elevation={2}>
          {!isEdit && (
            <Grid
              padding={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">{showUsername}'s profile</Typography>
              <Avatar src={showAvatar} sx={{ width: 100, height: 100 }} />
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
                color="secondary"
                fullWidth
                onClick={() => setIsEdit((prevState) => !prevState)}
              >
                Edit my Profile
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
              setShowAvatar={setShowAvatar}
            />
          )}
        </Paper>
        {props.pebblesUser.role === "Admin" && (
          <Paper elevation={2}>
            <HabitForm />
          </Paper>
        )}
        {!visionEdit && props.pebblesUser.role === "User" ? (
          <Paper elevation={2}>
            <Grid
              padding={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">My Vision Board</Typography>
              <Box>
                <img src={showVisionOne} alt="pic one" width={125} />
              </Box>
              <Typography variant="subtitle1">{showGeneralVision}</Typography>
            </Grid>
            <Grid
              padding={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={() => setVisionEdit((prevState) => !prevState)}
              >
                Edit my vision board
              </Button>
            </Grid>
          </Paper>
        ) : (
          props.pebblesUser.role === "User" && (
            <Paper elevation={2}>
              <EditVisionForm
                props={props}
                setVisionEdit={setVisionEdit}
                setShowVisionOne={setShowVisionOne}
                setShowGeneralVision={setShowGeneralVision}
              />
            </Paper>
          )
        )}
      </Box>
    </div>
  );
};

export default ProfilePage;
