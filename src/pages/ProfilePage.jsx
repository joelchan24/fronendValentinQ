import { useState, useEffect } from "react";
import { HabitForm, EditProfileForm, EditVisionForm } from "../components";
import { Avatar, Button, Typography, Box, Grid, Paper } from "@mui/material";
import randomFacts from "../services/randomFacts";
import { profileWs } from "../services/user-admin-ws";

const ProfilePage = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [visionEdit, setVisionEdit] = useState(false);
  const [showName, setShowName] = useState();
  const [showLastName, setShowLastName] = useState();
  const [showUsername, setShowUsername] = useState();
  const [showAvatar, setShowAvatar] = useState();
  const [showVisionOne, setShowVisionOne] = useState();
  const [showGeneralVision, setShowGeneralVision] = useState();

  let randomFact = randomFacts[Math.floor(Math.random() * randomFacts.length)];

  const testing = async () => {
    const data = await profileWs();
    setShowName(data.data.user.firstName);
    setShowLastName(data.data.user.lastName);
    setShowUsername(data.data.user.username);
    setShowAvatar(data.data.user.avatarUrl);
    setShowVisionOne(data.data.user.visionOne);
    setShowGeneralVision(data.data.user.generalVision);
  };

  useEffect(() => {
    testing();
  }, []);

  return props.pebblesUser ? (
    <div>
      {showName && (
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                  pt: 3,
                  pl: 6.2,
                  pr: 6.2,
                  pb: 4.5,
                }}
              >
                <Box mt={2}>
                  <Typography sx={{ typography: { sm: "h4", xs: "h5" } }}>
                    {showUsername}'s profile
                  </Typography>
                </Box>
                <Box>
                  <Avatar src={showAvatar} sx={{ width: 130, height: 130 }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Hey {showName} {showLastName} did you know ?
                  </Typography>
                  <Typography pt={1} color="secondary">
                    {randomFact}
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
              <HabitForm props={props} />
            </Paper>
          )}
          {!visionEdit && props.pebblesUser.role === "User" ? (
            <Paper
              elevation={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Grid
                padding={5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ typography: { sm: "h4", xs: "h5" }, marginBottom: 5 }}
                >
                  My Vision Board
                </Typography>
                <Box mb={6}>
                  <img src={showVisionOne} alt="pic one" width={200} />
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
                  showGeneralVision={showGeneralVision}
                />
              </Paper>
            )
          )}
        </Box>
      )}
    </div>
  ) : (
    <h1>Hey! you need to be logged in to see this content </h1>
  );
};

export default ProfilePage;
