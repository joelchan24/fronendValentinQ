import { useState } from "react";
import { addHabitWs } from "../services/habitWs";

import {
  Avatar,
  Button,
  TextField,
  CssBaseline,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';

export default function HabitForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = { title, description, reason };

    try {
      const data = await addHabitWs(response);
      console.log('que es data  ---> ',data);
      alert("TESTING SUCCESS");
    } catch (error) {
      console.log(error.response.data.errorMessage);
      alert(`ERROR : ${error.response.data.errorMessage}`);
    }
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom:8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1,  bgcolor:"secondary.main"}} >
            <AddBoxTwoToneIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            create a micro habit
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
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
              maxRows={5}
              name="description"
              label="Description"
              type="description"
              id="description"
              autoComplete="description"
              placeholder="add at least 40 characters of description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              maxRows={3}
              name="reason"
              label="Reason"
              type="reason"
              id="reason"
              autoComplete="reason"
              placeholder="please describe a reason to do it"
              onChange={(e) => setReason(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}
