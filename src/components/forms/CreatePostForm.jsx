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
  Modal,
  Typography
} from "@mui/material";
import InsertCommentTwoToneIcon from "@mui/icons-material/InsertCommentTwoTone";

export default function CreatePostForm({ setComments, props }) {
  const [comment, setComment] = useState("");

  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false);
  const [colorMessage, setColorMessage] = useState('')
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getAllPosts = async () => {
    try {
      const res = await allPostsWs();
      
      handleOpen()
      setComments(res.data.posts);
    } catch (error) {
      setColorMessage('red')
      setMessage(error.response.data.errorMessage)
      handleOpen()
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = { comment };

    try {
      const data = await addPostWs(response);
      getAllPosts();
      setComment("");
      setColorMessage('green')
      setMessage('Post created 🙂')
    } catch (error) {
      setColorMessage('red')
      setMessage(error.response.data.errorMessage)
      handleOpen()
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main", width: 75, height:75 }}>
          <InsertCommentTwoToneIcon sx={{ m: 1, bgcolor: "secondary.main", width: 50, height:50 }}  />
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
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={props.style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" color={colorMessage}>
              Hey! 👇
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} color={colorMessage}>
              {message}
            </Typography>
          </Box>
        </Modal>
      </div>
    </Container>
  );
}
