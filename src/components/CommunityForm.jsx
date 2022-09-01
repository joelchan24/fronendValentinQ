import { useState } from "react";
import { addPostWs } from "../services/communityWs";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddCommentIcon from "@mui/icons-material/AddComment";

const theme = createTheme();

export default function CommunityForm() {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = { comment };

    try {
      const data = await addPostWs(response);
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AddCommentIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create a Post
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
              name="password"
              label="Create a post"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              post
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
