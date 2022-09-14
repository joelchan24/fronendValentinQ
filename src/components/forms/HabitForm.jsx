import { useState } from "react";
import { addHabitWs } from "../../services/habitWs";

import {
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
  Modal,
  Avatar
} from "@mui/material";
import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";

export default function HabitForm({props}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reason, setReason] = useState("");
  const [timeSuggestion, setTimeSuggestion] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = { title, description, reason, timeSuggestion };

    try {
      const data = await addHabitWs(response);
      alert("TESTING SUCCESS");
      setTitle("");
      setDescription("");
      setReason("");
    } catch (error) {
      setError(error.response.data.errorMessage);
      handleOpen();
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main", width: 75, height:75 }} mt={2}>
          <AddBoxTwoToneIcon sx={{ width: 50, height: 50 }}/>
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{ fontWeight: "light", mb: 1 }}
        >
          create micro habit (admin only)
        </Typography>
        <Typography sx={{ fontWeight: "light" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          eaque incidunt molestias ipsum nihil aliquid illum eum quis tempora
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
          rows={2}
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
        <FormControl fullWidth >
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
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={props.style}>
            <Typography color="red" id="modal-modal-title" variant="h6" component="h2">
              ERROR!
            </Typography>
            <Typography color="red" id="modal-modal-description" sx={{ mt: 2 }}>
              {error}
            </Typography>
          </Box>
        </Modal>
      </div>
    </Container>
  );
}
