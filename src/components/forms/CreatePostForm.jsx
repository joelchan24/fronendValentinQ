import { useState } from "react";
import { addPostWs } from "../../services/communityWs";
import { allPostsWs } from "../../services/communityWs";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Container,
} from "@mui/material";
import InsertCommentTwoToneIcon from "@mui/icons-material/InsertCommentTwoTone";

export default function CreatePostForm({ setComments }) {
  const [comment, setComment] = useState("");

  const getAllPosts = async () => {
    try {
      const res = await allPostsWs();
      setComments(res.data.posts);
    } catch (error) {
      alert(`ERROR : ${error.response.data.errorMessage}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = { comment };

    try {
      const data = await addPostWs(response);
      getAllPosts();
      setComment("");
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
          marginTop: 2,
          marginBottom: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main", width: 80, height:80 }}>
          <InsertCommentTwoToneIcon />
        </Avatar>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            multiline
            color="secondary"
            rows={3}
            name="post"
            label="Create a post"
            id="post"
            value={comment}
            autoComplete="current-post"
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            color="secondary"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Post 
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
