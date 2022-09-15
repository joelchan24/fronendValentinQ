import { useState } from "react";
import { addPostWs } from "../../services/communityWs";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@mui/material";
import InsertCommentTwoToneIcon from '@mui/icons-material/InsertCommentTwoTone';

export default function EditPostForm(props) {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = { comment };

    try {
      const data = await addPostWs(response);
      alert("TESTING SUCCESS");
    } catch (error) {
      alert(`ERROR : ${error.response.data.errorMessage}`);
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <InsertCommentTwoToneIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit your Post
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
              multiline
              maxRows={5}
              name="post"
              label="Create a post"
              id="post"
              autoComplete="current-post"
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              edit
            </Button>
          </Box>
        </Box>
      </Container>
  );
}
