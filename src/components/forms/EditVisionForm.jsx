import { useState } from "react";
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

export default function EditVisionForm({
  props,
  setVisionEdit,
  setShowVisionOne,
  setShowVisionTwo,
  setShowVisionThree,
  setShowGeneralVision,
}) {
  const [visionOne, setVisionOne] = useState(props.pebblesUser.visionOne);
  const [visionTwo, setVisionTwo] = useState(props.pebblesUser.visionTwo);
  const [visionThree, setVisionThree] = useState(props.pebblesUser.visionThree);

  const [generalVision, setGeneralVision] = useState(
    props.pebblesUser.generalVision
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfileWs({
        visionOne,
        visionTwo,
        visionThree,
        generalVision,
      });
      setShowVisionOne(visionOne);
      setShowVisionTwo(visionTwo);
      setShowVisionThree(visionThree);
      setShowGeneralVision(generalVision);
      setVisionEdit((prevState) => !prevState);
    } catch (error) {
      console.log(Error);
      alert(`ERROR : ${error}`);
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
        <Typography component="h1" variant="h5">
          Edit Vision Board
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={visionOne} width={125} alt="picOne" />
              <Button
                variant="contained"
                component="label"
                size="small"
                color="secondary"
              >
                upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={visionTwo} width={125} alt="picTwo" />
              <Button
                variant="contained"
                component="label"
                size="small"
                color="secondary"
              >
                upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={visionThree} width={125} alt="picThree" />
              <Button
                variant="contained"
                component="label"
                size="small"
                color="secondary"
              >
                upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Box>
          </Box>
          <TextField
            margin="normal"
            required
            fullWidth
            multiline
            rows={5}
            onChange={(e) => setGeneralVision(e.target.value)}
            defaultValue="describe in this space how you would like to feel with new habits implemented in your life"
            color="secondary"
            name="generalVision"
            label="General Vision"
            type="generalVision"
            id="generalVision"
            autoComplete="current-generalVision"
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
            fullWidth
          >
            Edit my vision board
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
