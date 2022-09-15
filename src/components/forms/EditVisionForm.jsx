import { useState, useRef } from "react";
import { updateProfileWs } from "../../services/user-admin-ws";
import { singleImageWs } from "../../services/updatePicWs";

import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@mui/material";

export default function EditVisionForm({
  props,
  setVisionEdit,
  setShowVisionOne,
  setShowGeneralVision,
}) {
  const [visionOne, setVisionOne] = useState(props.pebblesUser.visionOne);

  const [generalVision, setGeneralVision] = useState(
    props.pebblesUser.generalVision
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfileWs({
        visionOne,
        generalVision,
      });
      setShowVisionOne(visionOne);
      setShowGeneralVision(generalVision);
      setVisionEdit((prevState) => !prevState);
    } catch (error) {
      alert(`ERROR : ${error.response.data.errorMessage}`);
    }
  };

  const elInput = useRef("input");

  const openImage = (e) => { elInput.current.click() };

  const updateImage = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    try {
      const res = await singleImageWs(formData);
      setVisionOne(res.data.url.uri);
    } catch (error) {
      alert(error)
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
              <img src={typeof visionOne != "string" ? URL.createObjectURL(visionOne) : visionOne}
                width={125} alt="picOne"
              />
              <input hidden accept="image/*" type="file" ref={elInput} onChange={updateImage} />
              <Button variant="contained" component="label" size="small" color="secondary" onClick={openImage} >
                upload
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
