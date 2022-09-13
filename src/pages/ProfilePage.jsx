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
        <Paper elevation={2} >
          {!isEdit && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height:'100%',
                pt:3,
                pl:6.2,
                pr:6.2,
                pb:3
              }}
            >
              <Box>
                <Typography variant="h4"sx={{fontWeight: 'light'}} >{showUsername}'s profile</Typography>
              </Box>
              <Box>
                <Avatar src={showAvatar} sx={{ width: 100, height: 100 }} />
              </Box>
              <Box>
                <Typography sx={{fontWeight: 'light'}} >
                  Hey {showName} , Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vel recusandae blanditiis vel recusandae blanditiis ullam? Impedit eligendi facilis animi corrupti, sint nobis a iure, aut consequuntur harum itaque dolorem sapiente fugiat quaerat!
                </Typography>
              </Box>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={() => setIsEdit((prevState) => !prevState)}
                >
                  Edit my Profile
                </Button>
              </Box>

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
                <img src={showVisionOne} alt="pic one" width={300} />
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
