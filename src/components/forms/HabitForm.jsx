import { useState } from "react";
import { addHabitWs } from "../../services/habitWs";

import {
  Avatar,
  Button,
  TextField,
  CssBaseline,
  Box,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";

export default function HabitForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reason, setReason] = useState("");
  const [timeSuggestion, setTimeSuggestion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = { title, description, reason, timeSuggestion };

    try {
      const data = await addHabitWs(response);
      console.log("que es data  ---> ", data);
      alert("TESTING SUCCESS");
      setTitle("");
      setDescription("");
      setReason("");
    } catch (error) {
      console.log(error.response.data.errorMessage);
      alert(`ERROR : ${error.response.data.errorMessage}`);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "100%",
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly'
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AddBoxTwoToneIcon sx={{ width: 75, height: 75 }} color="secondary" />
        <Typography component="h1" variant="h5" sx={{fontWeight: 'light', mb:1}}>
          create micro habit (admin only)
        </Typography>
        <Typography sx={{fontWeight: 'light'}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum eaque incidunt molestias ipsum nihil aliquid illum eum quis tempora
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          color="secondary"
          value={title}
          autoComplete="title"
          placeholder="add a title for the micro habit"
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          multiline
          rows={3}
          name="description"
          label="Description"
          value={description}
          type="description"
          id="description"
          color="secondary"
          autoComplete="description"
          placeholder="add at least 40 characters of description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          multiline
          name="reason"
          label="Reason"
          color="secondary"
          value={reason}
          type="reason"
          id="reason"
          autoComplete="reason"
          placeholder="please describe a reason to do it"
          onChange={(e) => setReason(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="timeSuggestion" color="secondary">
            Time Suggestion
          </InputLabel>
          <Select
            labelId="timeSuggestion"
            id="timeSuggestion"
            value={timeSuggestion}
            color="secondary"
            label="Time Suggestion"
            onChange={(e) => setTimeSuggestion(e.target.value)}
          >
            <MenuItem value={"Morning"}>Morning</MenuItem>
            <MenuItem value={"Afternoon"}>Afternoon</MenuItem>
            <MenuItem value={"Night"}>Night</MenuItem>
            <MenuItem value={"Any Time"}>Any Time</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          fullWidth
          color="secondary"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Create
        </Button>
      </Box>
    </Container>
  );
}
