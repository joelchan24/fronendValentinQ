import { useState } from "react";
import { HabitForm, EditProfileForm, EditVisionForm } from "../components";
import { Avatar, Button, Typography, Box, Grid, Paper } from "@mui/material";
import randomFacts from '../services/randomFacts'



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

  let randomFact = randomFacts[Math.floor(Math.random() * randomFacts.length)]

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
                pb:4.5
              }}
            >
              <Box>
                <Typography variant="h4"sx={{fontWeight: 'light'}} >{showUsername}'s profile</Typography>
              </Box>
              <Box>
                <Avatar src={showAvatar} sx={{ width: 130, height: 130 }} />
              </Box>
              <Box>
                <Typography sx={{fontWeight: 'bold'}} >
                  Hey {showName} {showLastName} did you know ?
                </Typography>
                <Typography pt={1} color="secondary" >
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
          <Paper elevation={2} 
          sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between'
          }} >
            <Grid
              padding={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ typography: { sm: "h4", xs: "h5" }, marginBottom:5 }}>My Vision Board</Typography>
              <Box mb={6} >
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
              />
            </Paper>
          )
        )}
      </Box>
    </div>
  );
};

export default ProfilePage;
